---
title:  "Board Column"
permalink: /status-column/
date:   2019-08-23 15:00:00 +0800
categories: board column
---
When you switch to the [Board view](/guide//project-view/#board), the tasks will be columned by **statuses** by default. 

## Shuffle by column
You can change the way you organize your boards by customizable columns sections. 

Click on the **Board** icon on the right hand side and select from the dropdown menu how you want to visualize your tasks. 


![shuffle board columns]({{ site.url }}{{ site.baseurl }}/assets/images/status-column/board_shuffle_columns.png)

- Visually project’s progress? Shuffle the board by **status**
- Keep up with the most critical tasks? Shuffle the board by **priority**
- Concerning with team allocations? Shuffle the board by **assignee**
- Categorizing different groups: Shuffle the board by **tag**
- Visualize project schedule? Shuffle the board by **date** 


## Add a column

You can add new columns when you shuffle your board by **Status** or **Tag**. 

#### Add a new status column
There are 3 default status columns: **To-Do**, **In Progress** and **Completed**.

![three default status columns]({{ site.url }}{{ site.baseurl }}/assets/images/status-column/three_default_status_column.png)

You can create new ones and give them a new progress percentage. 

Click on **Add status** to the right of the existing columns. Then type in the name and set its percentage and color respectively. 

Or you can hover between the two existing columns for the **Add status** option to appear. 

![hover to add new status columns]({{ site.url }}{{ site.baseurl }}/assets/images/status-column/board_add_status_hover.png)


{% capture notice-text %}
**Note:**
- The progress percentage below 100% (not including 100%) can’t be the same as the ones that already existed.
- However, you can create multiple columns for the progress 100%. For example, you can name the columns as Cancelled or Won’t do, etc. If you filter by Active Tasks in the List view, the tasks within these columns will be hidden. 
{% endcapture %}

<div class="notice--warning">
  {{ notice-text | markdownify }}
</div>



#### Add a new tag column

When you shuffle the board by tag, you can click **Add tag** to the right of the existing columns to add a new tag. Type in the new tag name and set its color and its visibility to other projects. 

Or you can hover between the two existing columns for the **Add tag** option to appear. 


![hover to add new tag columns]({{ site.url }}{{ site.baseurl }}/assets/images/status-column/board_add_tag_hover.png)



## Edit a column
You can edit the columns when you shuffle your board by Status or Tag. 

Click on the **More Options** icon at the upper right corner of the column and choose **Edit status** or **Edit tag**.

![edit a column]({{ site.url }}{{ site.baseurl }}/assets/images/status-column/board_edit_column.png)




## Move a column
You can drag the column and drop it at an ideal location.

<video muted="" playsinline="" loop="" autoplay="" title="move a column in board view" poster="{{ site.url }}{{ site.baseurl }}/assets/images/status-column/board_move_column.png" style="max-height: 364px; margin: 0 auto; width: 100%; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 4px; margin: 0.8em 0;">
  <source src="{{ site.url }}{{ site.baseurl }}/assets/images/status-column/board_move_column.mp4" type="video/mp4">
</video>


**Note:** The newly created column is default added to the right of the existing columns.
{: .notice--warning}



## Hide a column
Click on the **More Options** icon at the upper right corner of the column and choose **Hide column** or **Hide column for everyone**.

![hide a column]({{ site.url }}{{ site.baseurl }}/assets/images/status-column/hide_column.png)



When set a column to reshow, the column will be visible to everyone again. 

<video muted="" playsinline="" loop="" autoplay="" title="reshow a column in board view" poster="{{ site.url }}{{ site.baseurl }}/assets/images/status-column/board_reshow_column.png" style="max-height: 364px; margin: 0 auto; width: 100%; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 4px; margin: 0.8em 0;">
  <source src="{{ site.url }}{{ site.baseurl }}/assets/images/status-column/board_reshow_column.mp4" type="video/mp4">
</video>


## Peekaboo all tasks in column
Click on the **More Options** icon at the upper right corner of the column and choose **Peekaboo all tasks in this column**.

![peekaboo a column]({{ site.url }}{{ site.baseurl }}/assets/images/status-column/board_peekaboo_column.png)

**Note:** The peekaboo tasks will be shown again automatically after 7 days if they were not completed. You will be able to find them by going to the filter bar. Click on Customize, then Peekaboo tasks.
{: .notice--warning}

## Delete a column
You can delete the columns when you shuffle your board by Status or Tag. 

Click on the **More Options** icon at the upper right corner of the column, you can find the delete option in Edit status or Edit tag. 

![delete a column]({{ site.url }}{{ site.baseurl }}/assets/images/status-column/board_delete_column.png)



**Note:** Once the column has been deleted, it can’t be undone, so please make sure before deleting it.
{: .notice--warning}
