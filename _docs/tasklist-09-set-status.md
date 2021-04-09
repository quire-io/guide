---
title:  "Change Status"
permalink: /set-status/
date:   2019-08-23 15:00:00 +0800
categories: set status
---
You can change the status of a task to show the progress. 

There are three default statuses: **To-Do**, **In Progress** and **Completed**.



## Set status to a task 
In the main panel, right click on the status circle to set a status. 

![default statuses]({{ site.url }}{{ site.baseurl }}/assets/images/set-status/default_status_options.png)


Or in the detail panel, you can click on the arrow beside the **Complete** icon to set a status.

**Tip:** You can set to always [see status options](/guide/project-settings/#always-see-status-options-when-click-on-the-complete-icon) when you click on the complete icon in the Project Settings. 
{: .notice--info}

![set status in detail panel]({{ site.url }}{{ site.baseurl }}/assets/images/set-status/set_status_detail_panel.png)


## Complete a task

We will show you how many subtasks you still have when you hover over the circle. Click on the **Complete** circle to mark the task as done. 

![complete task in main panel]({{ site.url }}{{ site.baseurl }}/assets/images/set-status/complete_task_main_panel.png)

**Tip:** Select a task and hit <kbd>Ctrl</kbd> + <kbd>/</kbd> (for Windows) or <kbd>⌘</kbd> + <kbd>/</kbd> (for Mac) to quickly complete it.
{: .notice--info}


## Create new statuses
In the main panel, right click on the status icon at the left hand side of the task name, and select **Add new status**.


![add new status]({{ site.url }}{{ site.baseurl }}/assets/images/set-status/status_options_add_new.png)


Or you can click on the dropdown menu icon beside the project name at the top and select **Edit status**. Then click **+ Add new status** to create new statuses.

![edit status]({{ site.url }}{{ site.baseurl }}/assets/images/set-status/edit_status.png)


{% capture notice-text %}
**Note:** 
- The progress percentage below 100% (not including 100%) can’t be the same as the ones that already existed.
- However, you can create multiple statuses for the progress 100%. For example, you can name the statuses as **Cancelled** or **Won’t do**, etc. If you filter by Active Tasks in the List view, the tasks applied with these statuses will be hidden as well. 
{% endcapture %}

<div class="notice--warning">
  {{ notice-text | markdownify }}
</div>

Learn more about how to [create new statuses in Board view](/guide/status-column/#add-a-new-status-column).
{: .notice}



## Edit the statuses
In the main panel, right click on the status icon at the left hand side of the task name, hover over the status you want to edit and click the **edit (pen)** icon. 

![edit status by right clicking on the status icon]({{ site.url }}{{ site.baseurl }}/assets/images/set-status/status_options_edit.png)



Or you can also edit the statuses in the Project Settings page. 

![edit status]({{ site.url }}{{ site.baseurl }}/assets/images/set-status/edit_status.png)


![edit status in project settings page]({{ site.url }}{{ site.baseurl }}/assets/images/set-status/status_settings_page.png)



