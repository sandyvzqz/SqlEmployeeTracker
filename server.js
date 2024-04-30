//import required libraries
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const db = require('./db/connection');

var promptUser=()=>{
    inquirer.prompt([
        {
            type: 'list',
            name: 'userPrompt',
            message: 'Welcome to employee tracker. What would you like to do today?',
            choices: ['View all departments' , 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        },
    ])
    .then(answer => {
        switch (answer.userPrompt){
            case 'View all departments':
                viewAllDepartments();
                break;
            case 'View all roles':
                viewAllRoles();
                break;
            case 'View all employees':
                viewAllEmployees();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                addEmployee();
                break;
            case 'Update an employee role':
                updateEmployeeRole();
                break;
        }
    })
};

//query function to view all departments 
const viewAllDepartments= () => {
    //selects unique department id and name only
    const sql = `SELECT DISTINCT department.id, department.name AS department from department`;
    db.query(sql, (err, res) => {
        if (err) {
        console.log(err);
        }
        console.table(res);
        promptUser();
    })
};

const viewAllRoles= () => {
    const sql= `SELECT DISTINCT role.id AS role_id, role.title, role.salary, role.department_id AS dep_id from role;`;
    db.query(sql, (err, res) => {
        if (err) {
        console.log(err);
        }
        console.table(res);
        promptUser();
    })
};

const viewAllEmployees = () => {
    const sql = `SELECT employee.id AS employee_id, employee.first_name, employee.last_name, role.title, role.id AS role_id, department.name AS department, role.salary, manager.id AS manager
    FROM employee
    LEFT JOIN role on employee.role_id= role.id
    LEFT JOIN department on role.department_id = department.id
    LEFT JOIN employee manager on manager.id = employee.manager_id;`
    db.query(sql, (err, res) => {
        if (err){
        console.log(err);
        }      
        console.table(res);
        promptUser();
    })
};

const addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'addDep',
            message: 'What department name would you like to add?'
        },
    ])
    .then((answer) => {
        const sql = `INSERT INTO department(name)
        VALUES ('${answer.addDep}');` ;
        db.query(sql, (err, res)=> {
            if (err) {
            console.log(err);
            }
            console.log('Department Added');
            promptUser();
        })
    })
};

const addRole=() =>{
    inquirer.prompt([
        {
            type: 'input',
            name: 'addRole',
            message: 'What role would you like to add?'
        },
        {
            type: 'input', 
            name: 'roleSal',
            message: 'What is the salary of that role?'
        },
        {
            type: 'input',
            name: 'roleDep',
            message: 'What department id does this role belong to?'
        },
    ])
    .then((answer) =>{
        const sql = `INSERT INTO role(title , salary, department_id)
        VALUES ('${answer.addRole}', '${answer.roleSal}', '${answer.roleDep}');` ;
        db.query(sql, (err, res)=> {
            if (err) {
            console.log(err);
            }
            console.log('Employee role has been added to database.');
            promptUser();
        })
    })
};

const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'What is the first name of the new employee?'
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'What is the last name of the new employee?'
        },
        {
            type: 'input',
            name: 'roleId',
            message: 'What is the role id of the new employee?'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the manager id of the new employee?'
        },
    ])
    .then((answer) => {
        const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
        VALUES ('${answer.firstName}','${answer.lastName}','${answer.roleId}','${answer.managerId}');` ;
        db.query(sql, (err, res)=> {
            if (err){
                console.log(err);
            }
            console.log('New employee has been added to database.');
            promptUser();
        })
    })
};

const updateEmployeeRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is the employee id?'
        },
        {
            type: 'input',
            name: 'roleId',
            message: 'What is the new role id?'
        }
    ])
    .then((answer)=>{
        const sql = `UPDATE employee
        SET role_id = ${answer.roleId}
        WHERE employee.id = ${answer.employeeId};` ;
        db.query(sql, (err, res) => {
            if (err) {
                console.log(err);
            }
            console.log('Employee role has been updated.');
            promptUser();
        })
    })
}; 

//call the inquirer prompt 
promptUser();