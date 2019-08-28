---
title:  "Styling"
permalink: /styling/
date:   2019-08-23 15:00:00 +0800
categories: styling
---
You can add color, bold, italic, strikethrough, code,  as well as characters to your tasks, so they become more distinguishable.

For a basic cheat sheet of Quire's Markdown, click on the ![markdown icon]({{ site.url }}{{ site.baseurl }}/assets/images/styling/markdown_icon.png)
 icon.

![markdown icon in detail panel]({{ site.url }}{{ site.baseurl }}/assets/images/styling/markdown_icon_detail_panel.png)

For example, you can type the following in a task name, description and comment:

**Color**

`{css-style| text} (eg., {color: red|text})`

Let's say you type the following;

![markdown color text]({{ site.url }}{{ site.baseurl }}/assets/images/styling/markdown_color_text_1.png)

The task list will look like this:

![markdown color task name]({{ site.url }}{{ site.baseurl }}/assets/images/styling/markdown_color_text_2.png)

**Bold**

`**text**`

**Italic**

`*text*`

**Note:** You can also make your project or organizaton name bold and/or italic.
{: .notice--warning}

**Underline**

`_text_`

**Strikethrough (Crossed Out)**

`~text~`

**Tip:** To quickly add some of the basic styles, simply type `{` and select the style you want.
{: .notice--info}

![markdown quick add color to text]({{ site.url }}{{ site.baseurl }}/assets/images/styling/markdown_quick_add_color.png)

**Code**

``text``

**Headers**

`# H1` <br>
`## H2` <br>
`### H3` <br>


**Numbered List**

`1. step1`<br>
`1. step2`

**Bulleted List**

`* item1`<br>
`* item2`

**Link**

`http://example.com/path`<br>
`[This link](http://example.com/path)`

**Table**

`| Left   | Center   | Right |` <br>
`| :------ |:-----------:| ------:|` <br>
`| A | text A | word A |` <br>
`| B | text B | word B |` <br>
`| C | text C | word C |` <br>

**Tip:** You can type `<br>` to break a line in a table cell, and `\<br>` to escape (keep `<br>` in the cell).
{: .notice--info}


**Characters**

You can type `&yen;`, `&reg;`, `&#8451;` and`&#x263B;` which will turn into ¥, ®, ℃, ☻, respectively. These are just a few examples of [html entities](https://www.w3schools.com/html/html_entities.asp) you can enter in a task name, description or comment.

Check out our blog post for a complete [Markdown guide and cheat sheet](https://quire.io/blog/p/Our-Very-Own-Markdown.html). 
{: .notice}

