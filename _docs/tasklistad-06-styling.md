---
title:  "Styling"
permalink: /styling/
date:   2019-08-23 15:00:00 +0800
categories: styling
---
You can add color, bold, italic, strikethrough, code,  as well as characters to your **task names, descriptions or comments**, so they can stand out more.

For a basic cheat sheet of Quire's Markdown, click on the ![markdown icon]({{ site.url }}{{ site.baseurl }}/assets/images/styling/markdown_icon.png)
 icon.

![markdown icon in detail panel]({{ site.url }}{{ site.baseurl }}/assets/images/styling/markdown_icon_detail_panel.png)

Here are some formatting example:

**Color**

```
{css-style| text} (eg., {color: red|text})
```

Let's say you type the following;

![markdown color text]({{ site.url }}{{ site.baseurl }}/assets/images/styling/markdown_color_text_1.png)

The task list will look like this:

![markdown color task name]({{ site.url }}{{ site.baseurl }}/assets/images/styling/markdown_color_text_2.png)

**Bold**

```
**text**
```

**Italic**

```
*text*
```

**Note:** You can also make your project or organizaton name bold and/or italic.
{: .notice--warning}

**Underline**

```
_text_
```

**Strikethrough (Crossed Out)**

```
~text~
```

**Tip:** To quickly add some of the basic styles, simply type `{` and select the style you want.
{: .notice--info}

![markdown quick add color to text]({{ site.url }}{{ site.baseurl }}/assets/images/styling/markdown_quick_add_color.png)

**Code**

```
`text·
```

**Headers**

```
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

**Numbered List**

```
1. step1
2. step2
3. step3
```

**Bulleted List**

```
* item1
* item2
* item3
```

**Checklist**

```
- [ ] item
- [ ] item 
- [ ] item
```

**Link**
```
This is a [Google link](https://www.google.com/)
```
```
http://example.com/path
```

**Table**

```
| Left   | Center   | Right |
| :------ |:-----------:| ------:|
| A | text A | word A |
| B | text B | word B |
| C | text C | word C |
```

**Tip:** You can type `<br>` to break a line in a table cell, and `\<br>` to escape (keep `<br>` in the cell).
{: .notice--info}


**Characters**

You can type `&yen;`, `&reg;`, `&#8451;` and`&#x263B;` which will turn into ¥, ®, ℃, ☻, respectively. These are just a few examples of [html entities](https://www.w3schools.com/html/html_entities.asp) you can enter in a task name, description or comment.

**Emojis**

Type in `:` to get emoji cheet sheet or you can copy and paste an emoji from websites like getemoji.com. 

![add emojis]({{ site.url }}{{ site.baseurl }}/assets/images/styling/quire_emoji.png)

Check out our blog post for a complete [Markdown guide and cheat sheet](https://quire.io/blog/p/Our-Very-Own-Markdown.html). 
{: .notice}
