---
title:  "Inline Assign"
permalink: /inline-assign/
date:   2019-08-23 15:00:00 +0800
categories: inline assign
---
You can add or edit the assignee, tags, start and due date and priority of a task with `@`, `#`, `< >` (with `;`) and `!` directly from the task name.

Type `Publish the article @crystal #Marketing< <9.30>` in the task name.

![inline assign]({{ site.url }}{{ site.baseurl }}/assets/images/inline-assign/inline_assign.png)


The task will be assigned to **Crystal** and have the tag **Marketing** and due date of **Sept. 30th**.

![inline assign]({{ site.url }}{{ site.baseurl }}/assets/images/inline-assign/inline_assign_2.png)

You can also add or remove assignees and tags from a task, without having to type them all over again.

To add one more assignee or tag to a task, type `+@assignee` or `+#tag` in the task name. To remove an existing assignee or tag from a task, type `-@assignee` or `-#tag` instead.

![add or remove tags inline]({{ site.url }}{{ site.baseurl }}/assets/images/inline-assign/inline_assign_add_remove.png)

Read more on our blog about [inline assigning](https://quire.io/blog/p/Type-it-while-you-think-it.html). 
{: .notice}



## Inline assign a task

Assign a task to an existing member with `@` directly from the task name.

When you type `Publish the article @crystal` in the task name, the task will be assigned to **Crystal**.


## Inline set a date and time

Set a start date and due date with `< >` and `;` directly from the task name.

When you type `Publish the article <04/30>` in the task name, the task will have a due date of **April 30th**.

![inline assgin due date]({{ site.url }}{{ site.baseurl }}/assets/images/inline-assign/inline_assign_due_date.png)


#### Example date formats you can type:


- Type `<04/30;>`, the task will have a start date of **April 30th**.

- Type `<04/30;05/05>`, the task will have a start date of **April 30th** and a due date of **May 5th**.

- Type `<today>` or `<tomorrow>` or `<next week>` to quickly set due date.

- Type `<04/30 13:00>`, the task will be set to due on **April 30th 13:00**.

- Type `<+1d>`, `<+1w>` or `<+1m>` to add one more **day**, one more **week** or one more **month** to the due date, counting from today.

- Type `<+n>` (eg. `<+5>`) or `<-n>` (eg. `<-5>`) to add or remove more days from the start and/or due date, counting from today.

![inline add or remove days]({{ site.url }}{{ site.baseurl }}/assets/images/inline-assign/inline_add_remove_days.png)

**Tip:** This works in a task's date picker too.
{: .notice--info}

![datepicker add or remove days]({{ site.url }}{{ site.baseurl }}/assets/images/inline-assign/date_picker_add_remove_days.png)

#### Date formats allowed: 

If your month is entered before day, the input allowed:

- Apr 30, 2020
- Apr 30
- 4/30/2020
- 4/30
- 4-30-2020
- 4-30
- 4.30.2020
- 4.30

If your day is entered before month, the input allowed:

- 30 Apr 2020
- 30 Apr
- 30/4/2020
- 30/4
- 30-4-2020
- 30-4
- 30.4.2020
- 30.4



## Inline add a tag

You can add a tag with `#` directly from the task name.

For example, when you type `Publish the article #Urgent` in the task name and press Enter, the task will have a tag of Urgent.

**Note:** You need to select `[tag name](new tag)` in the dropdown if you type it at the end of the task name.
{: .notice--warning}



## Inline add a priority

You can add a priority with `!` directly from the task name.

For example, when you type `Publish the article !2` in the task name and press Enter, the task will have a priority of High(an orange up arrow).

**Note:** Priority from high to low is !1, !2, !3 and !4.
{: .notice--warning}



## Inline transfer task to another project

You can transfer a task to another project with `>` directly from the task name.

For example, you can type `Publish the article >` in the task name and use the arrow key to choose which project you want to transfer the task to. 


