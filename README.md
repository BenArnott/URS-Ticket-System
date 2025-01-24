# URS-Ticket-System Code Design

The initial prototype design can be found on this [Link](https://benarnott.github.io/URS-Ticket-System/)

## The Systems Purpose

PURPOSE

My proposed Product is for a User Requirement Specification (URS) ticketing website, this system will allow for my team to gain the core requirements of projects and every day Lab User needs in a formatted way. This HTML based website will act as a centralised place for ticket creation, allowing users to submit the exact fields of information required to complete tasks, creating a more organised environment. A ticketing system is shown to help scalability, ordering tickets based on priority, as well as recording success metrics. The benefits of a ticketing system is shown by a Salesforce measurement, showing a 63% increase in productivity in 2020 after the introduction of a ticketing system (Salesforce, 2022).
The website will feature a simple, user-friendly form that will include the basic fields for essential information such as the Lab Users name, User PRID (employee number), contact details, a description of the request, and the required completion date. Once a ticket has been created the system will notice the Robotics and Automation team in the form of an automated email, allowing for a timely response.

The website will be created using HTML, CSS, and JavaScript, with a focus on creating a responsive design that works on both desktop and mobile devices. JavaScript will handle form validation and interactions, while email functionality will be integrated using a library such as Email.js or SMTP.js to send structured submissions directly to the team. In its initial phase, the website will focus on email notifications, but it could be expanded in the future to include database storage for tracking and analysing past submissions.

One of the many advantages of this platform is that it streamlines communication because all requests are made in one location, removing the need for follow-up emails or meetings. By guaranteeing that new requests are sent to the team in a timely formatted way, it will help increase efficiency. Additionally, the system's scalability allows for the gradual addition of new features to improve functionality, like request tracking and metric analytics. The user interface will be designed, a prototype with email notification and ticket submission features will be made, the system will be tested for dependability, and user feedback will be incorporated to improve the platform. This website will offer a useful and expandable way to assist the workflow of the Robotics and Automation Team through managing user requirements.

## Project Planning

The Agile technique, which prioritises iterative development and collaboration, is used to plan and carry out this project. The project starts by outlining its overall objective, which is to provide a user-friendly ticket submission system for the User Requirement Specifications (URS). The product backlog, which will be organised into epics like "UI Design," "Form Functionality," and "Data Storage," contain the requirements and are divided into smaller, more manageable tasks. The project will be broken up into three two-week-long sprints, each with their own set of deliverables. Daily standups will be used to track progress and resolve any obstacles, and regular sprint planning sessions can be utilised to prioritise work. A review will be conducted at the conclusion of each sprint to review the results and take comments into consideration. 

In order to improve the process for the sprints, retrospectives will also be carried out. To maintain team transparency and visualise the workflow, we can make use of a Kanban board for this. Throughout the development cycle, testing and debugging are given top priority in order to preserve the quality of the final products. This strategy makes sure that the project will be completed in a flexible and progressive manner while successfully fulfilling the requirements.

![Screenshot](ProjectPlanningTable.png)

![Screenshot](AgilePracticesTable.png)

## User Feedback
[Feedback Form](https://docs.google.com/forms/d/e/1FAIpQLScb-IveZ_1XHtToDfNOmGVE4wiZP1UCcFefLmZl2Nn3_CLj_g/viewform?usp=header) Please fill in the feedback form after reviewing the URS website.

## Design Screenshots

Page 1 - The home page for the application allowing users to create tickets.

![Screenshot](URS%20App%201.png)

Page 2 - The ticket manager, allowing users to edit, delete or share their tickets.

![Screenshot](URS%20App%202.png)

## Creating the Prototype Process

- Designing the Prototype in Figma:
I started by making use of Figma to create the URS ticketing system's user interface, focussing on a simple and user friendly prototype. The design includes items like the general layout, navigation buttons, and the ticket submission form. To guarantee responsiveness and consistency, I selected particular fonts, colours, and element locations.

- Generating CSS Code:
I then converted the design elements into CSS code using a built-in Figma plugin after the design was complete. The style settings, including sizes, colours, and placements, for every component in the design were automatically produced by this plugin from the source design. The exported CSS code was used as the base for the front-end development of the website.

- Uploading the CSS Code:
An index.css file was then created, including the created CSS source code. With all the styles required to duplicate the Figma look, this file acts as the website's stylesheet. I arranged and went over the code to make sure it was accurate and clear. 

- Linking the CSS to HTML:
I used HTML to organise the material in the index.html file and added a <link> element in the <head> section to link it to the index.css file. I then made sure that the visual styles defined in the CSS file were applied to the content by assigning the appropriate CSS classes to every HTML element.

For example:

The navigation buttons ("Create a Ticket" and "View Tickets") were styled using the .rectangle3 and .rectangle4 classes.
Form fields, such as "Full Name" and "User PRID," were styled using classes such as .rectangle6 and .rectangle7 to form mock input boxes.

- Publishing the Prototype:
I published the project using the terminal to make the prototype publicly available. This required the use of  GitHub Websites, allowing me to link the VS Code to the repositry via a hyperlink. I was able to then review and test the functional prototype in a web browser thanks to the procedure' creation of a shared web link. Through this I discovered multiple placement issues with the text while testing. Utilising the inspect element I was able to alter the sizing and layer placement of the text, fixing the issues through VS Code.
