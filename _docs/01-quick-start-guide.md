---
title:  "Welcome to Jekyll!"
permalink: /docs/quick-start-guide/
date:   2019-05-3 14:25:31 +0800
categories: jekyll update
---


The bread and butter of any theme. Below you'll find the layouts included with Minimal Mistakes, what they look like and the type of content they've been built for.

![map]({{ site.url }}{{ site.baseurl }}/assets/images/test/map.png)
![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/test/phone.png){: .align-center}
![image-left]({{ site.url }}{{ site.baseurl }}/assets/images/test/phone.png){: .align-left} 
![no-alignment]({{ site.url }}{{ site.baseurl }}/assets/images/test/phone.png)
![image-right]({{ site.url }}{{ site.baseurl }}/assets/images/test/phone.png){: .align-right}

## Default layout

The base layout all other layouts inherit from. There's not much to this layout apart from pulling in several `_includes`:

* `<head>` elements
* masthead navigation links
* {% raw %}`{{ content }}`{% endraw %}
* page footer
* scripts

**Note:** You won't ever assign this layout directly to a post or page. Instead all other layouts will build off of it by setting `layout: default` in their YAML Front Matter.
{: .notice--warning}

### Layout based and user-defined classes

Class names corresponding to each layout are automatically added to the `<body>` element eg. `<body class="layout--single">`.

| layout           | class name                  |
| ---------------- | --------------------------- |
| archive          | `.layout--archive`          |
| archive-taxonomy | `.layout--archive-taxonomy` |
| search           | `.layout--search`           |
| single           | `.layout--single`           |
| splash           | `.layout--splash`           |
| home             | `.layout--home`             |
| posts            | `.layout--posts`            |
| categories       | `.layout--categories`       |
| category         | `.layout--category`         |
| tags             | `.layout--tags`             |
| tag              | `.layout--tag`              |

Using YAML Front Matter you can also assign custom classes to target with CSS or JavaScript. Perfect for "art directed" posts or adding custom styles to specific pages.

Example:

```yaml
---
layout: splash
classes:
  - landing
  - dark-theme
---
```

Outputs:

```html
<body class="layout--splash landing dark-theme">
```

### Canonical URL

You can set custom Canonical URL for a page by specifying `canonical_url` option in pages YAML Front Matter. For example, if you have the following:

```yaml
layout: single
title: Title of Your Post
canonical_url: "https://yoursite.com/custom-canonical-url"
```

This will generate the following in the `<head>` of your page:

```html
<link rel="canonical" href="https://yoursite.com/custom-canonical-url" />
```

## Compress layout

A Jekyll layout that compresses HTML in pure Liquid. To enable add `layout: compress` to `_layouts/default.html`.

**Note:** Has been known to mangle markup and break JavaScript... especially if inline `// comments` are present. For this reason it has been disabled by default.
{: .notice--danger}

* [Documentation](http://jch.penibelst.de/)

## Single layout

The layout you'll likely use the most --- sidebar and main content combo.

**Includes:**

* Optional header image with caption
* Optional header overlay (solid color/image) + text and optional "call to action" button
* Optional social sharing links module
* Optional comments module
* Optional related posts module
* Wide page variant

{% include gallery id="single_layout_gallery" caption="Image header and meta info examples for `single` layout" %}

Assign with `layout: single` , or better yet apply as a [Front Matter default]({{ "/docs/configuration/#front-matter-defaults" | relative_url }}) in `_config.yml`.

### Wide page

To expand the main content to the right, filling the space of what is normally occupied by the table of contents. Add the following to a post or page's YAML Front Matter:

```yaml
classes: wide
```

**Note:** If the page contains a table of contents, it will no longer appear to the right. Instead it will be forced into the main content container directly following the page's title.
{: .notice--info}

### Table of contents

Auto-generated table of contents list for your posts and pages can be enabled by adding `toc: true` to the YAML Front Matter.