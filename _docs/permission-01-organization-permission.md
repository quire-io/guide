---
title:  "Organization Level"
permalink: /organization-permission/
date:   2019-08-23 15:00:00 +0800
categories: organization permission control
---
There are 5 types of organization members.

- **Admin:** Members who can manage all tasks, projects and members in the organization.

- **Normal+:** Members who can manage all tasks and projects, add projects, and edit the organization. Normal+ members can not manage the members and delete projects in the organization.

- **Normal:** Members who can only read and edit the tasks and projects he/she had been invited to in the organization. He/She can create new tasks in those projects. He/She can also create new projects as well. Normal members can not manage the members and delete projects in the organization. 

    **Note:** When a normal member creates a project, he/she becomes the **admin** of the project. But he/she still can not access other projects that he/she had not been invited to.
	{: .notice--warning}

- **Limited+:** Members who can read all tasks and projects in the organization, add tasks, and manage assigned tasks. Limited+ members can not manage the members and delete projects in the organization. 

- **Guest:** Members who can only read the organization.

---
<span style="color:orange">R</span> = Read, <span style="color:green">C</span> = Create, <span style="color:blue">E</span> = Edit, <span style="color:red">D</span> = Delete

|    | Admin   | Normal+ |   Normal   | Limited+ | Guest   | 
| :------ |:-----:| :-----:|:-----:| :-----:|:-----:|
| **Organization** <br> (including organization name and profile) | <span style="color:orange">R</span>, <span style="color:blue">E</span>, <span style="color:red">D</span> | <span style="color:orange">R</span>, <span style="color:blue">E</span>  | <span style="color:orange">R</span>, <span style="color:blue">E</span>   |  <span style="color:orange">R</span>    |  <span style="color:orange">R</span>  |
| **Members Management**|  <span style="color:orange">R</span>, <span style="color:green">C</span>, <span style="color:blue">E</span>, <span style="color:red">D</span> | - | - |  -   | -  |
| **Projects** | <span style="color:orange">R</span>,<span style="color:green">C</span>,<span style="color:blue">E</span>,<span style="color:red">D</span> | <span style="color:orange">R</span>, <span style="color:green">C</span>, <span style="color:blue">E</span>  | <span style="color:green">C</span>   |  <span style="color:orange">R</span>    |  -  |


Read more on our blog about [organization permission](https://quire.io/blog/p/Roles-&-Permissions-in-Quire.html). 
{: .notice}