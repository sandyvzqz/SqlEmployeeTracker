[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
# SQL Employee Tracker 
## Week 12 module challenge 

### Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Contribution](#contribution)
- [License](#license)

## Description
The purpose of this app is to modify and view an employee database using the terminal. First, mySQL is installed to create a database with tables and seed the tables with values. The inquirer library is used to create a prompt that gives the user choices to view the employee database, or modify it. Lastly, the console table library is used to render the database inside the terminal upon the user choice from the inquirer prompts. 

## Installation 
To run the app successfully, these steps are recommended:
- Clone the git repository
- Open the schema.sql file in the terminal
- Run the command 'mysql -u root -p' and enter the provided password in the connection.js file
- Now source the schema file by running 'SOURCE schema.sql;' 
- Next, source the seed file by running 'SOURCE seeds.sql;'
- Open the server.js file in the terminal
- Run 'npm install' to install are required packages for the app
- To begin using the app, run 'node server.js' in the terminal, and the user prompt begins
  
## Usage
This app allows you to view all employees, all roles, and all departments. You may also update an employee role, add a new role or new employee to the database, and add a new department. 

## Demo 
This is a video demonstrating the functionality of the finished app. 
[DemoVideo] (https://drive.google.com/file/d/15QFpldybbdi8zJqOVTN4tfgtHR0phB1N/view)

## Contribution
I referenced these articles to help me with the code of this project.
- [Console Table documentation](https://www.npmjs.com/package/console.table?activeTab=readme)
- [SQL Update](https://www.w3schools.com/sql/sql_update.asp)
- [SQL As](https://www.w3schools.com/sql/sql_ref_as.asp)
- [SQL Left join](https://www.w3schools.com/sql/sql_join_left.asp)

## License
This application is covered under the MIT License.
