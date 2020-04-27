---
layout: null
---

var store = [
  {%- for c in site.collections -%}
    {%- if forloop.last -%}
      {%- assign l = true -%}
    {%- endif -%}
    {%- assign docs = c.docs | where_exp:'doc','doc.search != false' -%}
    {%- for doc in docs -%}
      {%- if doc.header.teaser -%}
        {%- capture teaser -%}{{ doc.header.teaser }}{%- endcapture -%}
      {%- else -%}
        {%- assign teaser = site.teaser -%}
      {%- endif -%}

      {% comment %} search for path of each docs {% endcomment %}
      {%- assign needBreak = false -%}
      {%- for nav in site.data.navigation["docs"] -%}
        {%- if needBreak -%}
          {%- break -%}
        {%- endif -%}
        {%- if nav.children != null -%}
          {%- for child in nav.children -%}
            {%- if child.url == doc.url -%}
              {%- assign path = nav.title -%}
              {%- assign needBreak = true -%}
              {%- break -%}
            {%- endif -%}
          {%- endfor -%}
        {%- endif -%}
      {%- endfor -%}

      {
        "title": {{ path | append: " > " | append: doc.title | jsonify }},
        "excerpt":
          {%- if site.search_full_content == true -%}
            {{ doc.content | newline_to_br |
              replace:"<br />", " " |
              replace:"</p>", " " |
              replace:"</h1>", " " |
              replace:"</h2>", " " |
              replace:"</h3>", " " |
              replace:"</h4>", " " |
              replace:"</h5>", " " |
              replace:"</h6>", " "|
            strip_html | strip_newlines | jsonify }},
          {%- else -%}
            {{ doc.content | newline_to_br |
              replace:"<br />", " " |
              replace:"</p>", " " |
              replace:"</h1>", " " |
              replace:"</h2>", " " |
              replace:"</h3>", " " |
              replace:"</h4>", " " |
              replace:"</h5>", " " |
              replace:"</h6>", " "|
            strip_html | strip_newlines | truncatewords: 50 | jsonify }},
          {%- endif -%}
        "categories": {{ doc.categories | jsonify }},
        "tags": {{ doc.tags | jsonify }},
        "url": {{ doc.url | absolute_url | jsonify }},
        "teaser": {{ teaser | absolute_url | jsonify }}
      }{%- unless forloop.last and l -%},{%- endunless -%}
    {%- endfor -%}
  {%- endfor -%}]