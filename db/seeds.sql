INSERT INTO department(name)
VALUES ('HR'),
('Finance'),
('Marketing'),
('Sales'),
('Management');

INSERT INTO role(title, salary, department_id)
VALUES ('Recruiter', 50000, 1),
('Accounting', 60000, 2),
('Budget analyst', 60000, 2),
('Social media', 50000, 3),
('Brand ambassador', 60000, 3),
('Representative', 40000, 4),
('Manager', 100000, 5);

INSERT INTO employee(first_name, last_name, role_id)
VALUES ('April', 'Kepner', 1),
('Meredith', 'Grey', 2),
('Callie', 'Torres', 3),
('Miranda', 'Bailey', 4),
('Cristina', 'Yang', 5),
('Arizona', 'Robbins', 6),
('Derek', 'Shepard', 7);