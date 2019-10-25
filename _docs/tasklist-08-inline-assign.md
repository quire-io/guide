---
title:  "Inline Assign"
permalink: /inline-assign/
date:   2019-08-23 15:00:00 +0800
categories: inline assign
---
You can add or edit the assignee, tags, start and due date and priority of a task with `@`, `#`, `<>` (with `;`) and `!` directly from the task name.

For example, type "Publish the article `@crystal` `#Marketing` `<9.30>`" in the task name and press Enter.

![inline assign]({{ site.url }}{{ site.baseurl }}/assets/images/inline-assign/inline_assign.png)


The task will be assigned to Crystal, and have the tag Marketing and due date of Sept. 30th.

![inline assign]({{ site.url }}{{ site.baseurl }}/assets/images/inline-assign/inline_assign_2.png)

You can also add or remove assignees and tags from a task, without having to type them all over again.

To add one more assignee or tag to a task, type `+@assignee` or `+#tag` in the task name. To remove an existing assignee or tag from a task, type `-@assignee` or `-#tag` instead.

![add or remove tags inline]({{ site.url }}{{ site.baseurl }}/assets/images/inline-assign/inline_assign_add_remove.png)

Check out our blog post about [inline assigning](https://quire.io/blog/p/Type-it-while-you-think-it.html). 
{: .notice}



## Inline assign a task

Assign a task to an existing member with `@` directly from the task name.

For example, when you type `Publish the article @crystal` in the task name and press Enter, the task will be assigned to Crystal.


## Inline set a start and due date

Set a start date and due date with `<>` and `;` directly from the task name.

For example, when you type `Publish the article <04/30>` in the task name and press Enter, the task will have a due date of **April 30th**.

![inline assgin due date]({{ site.url }}{{ site.baseurl }}/assets/images/inline-assign/inline_assign_due_date.png)

If you type `<04/30;>` in the task name and press Enter, the task will have a start date of **April 30th**.

If you type `<04/30;05/05>`, the task will have a start date of **April 30th** and a due date of **May 5th**.

In addition, you can type `<today>`, `<tomorrow>` and `<next week>` to quickly set due date too.

You can also type `<+1d>`, `<+1w>` or `<+1m>` to add one more **day**, one more **week** or one more **month** to the due date, counting from today.

You can even type `<+n>` (eg. `<+5>`) or `<-n>` (eg. `<-5>`) to add or remove more days from the start and/or due date, counting from today.

![inline add or remove days]({{ site.url }}{{ site.baseurl }}/assets/images/inline-assign/inline_add_remove_days.png)

This works in a task's date picker too.

![datepicker add or remove days]({{ site.url }}{{ site.baseurl }}/assets/images/inline-assign/date_picker_add_remove_days.png)

#### Date Formats Allowed: 

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

**Note:** You need to select `[tag name] (new tag)` in the dropdown if you type it at the end of the task name.
{: .notice--warning}



## Inline add a priority

You can add a priority with `!` directly from the task name.

For example, when you type `Publish the article !2` in the task name and press Enter, the task will have a priority of High(an orange up arrow).

**Note:** Priority from high to low is !1, !2, !3 and !4.
{: .notice--warning}



## Inline add a task to board

You can add a task to a specific board with `^` directly from the task name.

For example, you can type `Publish the article ^` in the task name and use the arrow key to choose which board you want to add the task to.

Note: If the project doesn’t have a board, you would need to create a board first, in order to add the task to a board. 
{: .notice--warning}

