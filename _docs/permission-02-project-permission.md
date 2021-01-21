---
title:  "Project Level"
permalink: /project-permission/
date:   2019-08-23 15:00:00 +0800
categories: project permission control
---
There are 4 types of project members.

- **Admin:** Members who can manage all tasks and members in the project.

- **Normal:** Members who can add and edit all tasks and manage the project. Normal members can not manage the project members and delete the projects. 

- **Limited:** Members who can add new tasks and manage assigned tasks. Limited members can not manage the project members and delete the tasks created by others.

	**Note:** Limited members can only complete tasks that are assigned to or created by them. Also, he/she can not add or move tasks to a board. 
	{: .notice--warning}

- **Guest:** Members who can only read the tasks and add comments in the project.


---
<span style="color:#F8A109">R</span> = Read, <span style="color:#91C44B">C</span> = Create, <span style="color:#65AEFF">E</span> = Edit, <span style="color:#EB5F64">D</span> = Delete


|    | Admin   | Normal |   Limited   | Guest| 
| :------ |:-----:| :-----:|:-----:| :-----:|
| **Project** <br>(including project name and description) | <span style="color:#F8A109">R</span>, <span style="color:#65AEFF">E</span>, <span style="color:#EB5F64">D</span>| <span style="color:#F8A109">R</span>, <span style="color:#65AEFF">E</span>  |<span style="color:#F8A109">R</span>| <span style="color:#F8A109">R</span>|
| **Members Management** |  <span style="color:#F8A109">R</span>, <span style="color:#91C44B">C</span>, <span style="color:#65AEFF">E</span>, <span style="color:#EB5F64">D</span> | <span style="color:#F8A109">R</span> | <span style="color:#F8A109">R</span> |  <span style="color:#F8A109">R</span>   |
| **External Member Management** |  <span style="color:#F8A109">R</span>, <span style="color:#91C44B">C</span>, <span style="color:#65AEFF">E</span>, <span style="color:#EB5F64">D</span> | <span style="color:#F8A109">R</span> | <span style="color:#F8A109">R</span> |  <span style="color:#F8A109">R</span>   |
| **Task**|  <span style="color:#F8A109">R</span>, <span style="color:#91C44B">C</span>, <span style="color:#65AEFF">E</span>, <span style="color:#EB5F64">D</span> | <span style="color:#F8A109">R</span>, <span style="color:#91C44B">C</span>, <span style="color:#F8A109">E</span>, <span style="color:#EB5F64">D</span> | <span style="color:#F8A109">R</span>, <span style="color:#91C44B">C</span>, <span style="color:#65AEFF">E¹ ²</span>, <span style="color:#EB5F64">D²</span> |  <span style="color:#F8A109">R</span>   |
| **Due Date**|  <span style="color:#F8A109">R</span>, <span style="color:#91C44B">C</span>, <span style="color:#65AEFF">E</span>, <span style="color:#EB5F64">D</span> | <span style="color:#F8A109">R</span>, <span style="color:#91C44B">C</span>, <span style="color:#65AEFF">E</span>, <span style="color:#EB5F64">D</span> | <span style="color:#F8A109">R</span>, <span style="color:#65AEFF">E¹</span> |  <span style="color:#F8A109">R</span>   |
| **Assignee**|  <span style="color:#F8A109">R</span>, <span style="color:#91C44B">C</span>, <span style="color:#65AEFF">E</span>, <span style="color:#EB5F64">D</span> | <span style="color:#F8A109">R</span>, <span style="color:#91C44B">C</span>, <span style="color:#65AEFF">E</span>, <span style="color:#EB5F64">D</span> | <span style="color:#F8A109">R</span> |  <span style="color:#F8A109">R</span>   |
| **Tag**|  <span style="color:#F8A109">R</span>, <span style="color:#91C44B">C</span>, <span style="color:#65AEFF">E</span>, <span style="color:#EB5F64">D</span> | <span style="color:#F8A109">R</span>, <span style="color:#91C44B">C</span>, <span style="color:#65AEFF">E</span>, <span style="color:#EB5F64">D</span> | <span style="color:#F8A109">R</span>, <span style="color:#65AEFF">E¹ ²</span>|  <span style="color:#F8A109">R</span>   |
| **Comment**|  <span style="color:#F8A109">R</span>, <span style="color:#91C44B">C</span>, <span style="color:#65AEFF">E³</span>, <span style="color:#EB5F64">D³</span> | <span style="color:#F8A109">R</span>, <span style="color:#91C44B">C</span>, <span style="color:#65AEFF">E³</span>, <span style="color:#EB5F64">D³</span> | <span style="color:#F8A109">R</span>, <span style="color:#91C44B">C</span>, <span style="color:#65AEFF">E³</span>, <span style="color:#EB5F64">D³</span> |  <span style="color:#F8A109">R</span>, <span style="color:#91C44B">C</span>, <span style="color:#65AEFF">E³</span>, <span style="color:#EB5F64">D³</span>   |

¹ Only when the task is assigned to such member. <br>
² Only when the task is created by such member. <br>
³ Only when it is added by such member. <br>


Read more on our blog about [project permission](https://quire.io/blog/p/Roles-&-Permissions-in-Quire.html). 
{: .notice}

