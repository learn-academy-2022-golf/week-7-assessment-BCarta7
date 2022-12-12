# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: The foreign key would be on the Student model, as foreign keys are inherited from the primary keys in the "parent" associated model. To fix this I think I would generate a migration that creates the individual associations to inherit foreign keys.

Researched answer: Foreign keys always attach to the belongs_to side in an association. Migration files are the correct way to update existing models and associations, creating a variable in the ruby console such as "john = Cohort.first", then creating a new entry in the Student model for john using dot notation will generate a foreign key.

2. Which RESTful routes must always be passed params? Why?

Your answer: Any RESTful route that targets an individual or specific resource will need a param passed, such as Show or Delete. The information in the param will be required for the route to know what specific element to target for it's CRUD action.

Researched answer: GET, PATCH/PUT, and DELETE always require params to target specific items in the database. 

3. Name three rails generator commands. What is created by each?

Your answer: Rails generator commands include generate migration to create a migration file and change existing models, generate model to create a new table in the database, and generate rspect to install a new test environment in the rails directory.  

Researched answer: In addition to above, there are several other generate commands to quickly add files to the project, notably generate controller.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
- This action would use the index controller method, showing all items in the Student model.

action: "POST" location: /students
- This action would use the create controller method, adding a new entry to the database.

action: "GET" location: /students/new
- This action would use the new controller method, displaying a form for the user to enter data which can be submit as a new entry in the database.

action: "GET" location: /students/2
- This action would use the show controller method, displaying the Student entry with a primary key of 2.

action: "GET" location: /students/2/edit
- This action would use the edit controller method, displaying a form for the user to update the entry with a primary key of 2 in the database.

action: "PATCH" location: /students/2
- This action would use the update controller method, updating data in the entry with a primary key of 2 in the database.

action: "DELETE" location: /students/2
- This action would use the destroy controller method, removing the entry with a primary key of 2 from the database. 

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
- As a user, I am greeted with a landing page showing all items on my to do list
- As a user, I can access a form to create a new item on the to do list
- As a user, I can submit the form and see the new item on the to do list
- As a user, I can access a form to update existing items on the to do list
- As a user, I can submit the form and see the changes to the item
- As a user, I can remove items from the to do list
- As a user, I can search for specific items on my to do list with a search function
- As a user, I can navigate back to the landing page from any other page using a link
- As a user, items on all pages are clearly labelled and accessible.
- As a user, all pages are logically laid out and aesthetically pleasing.
