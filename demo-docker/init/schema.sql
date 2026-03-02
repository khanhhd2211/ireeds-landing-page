-- demo-postgres/init/schema.sql

-- create a dedicated database
CREATE DATABASE demo;

-- switch to that database
\c demo   

-- create team members table
CREATE TABLE team_members (
    id   serial PRIMARY KEY,
    name text NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    image_url text
);

INSERT INTO team_members (name, title, description, image_url)
VALUES 
    ('David, PhD', 'David, PhD', 'PhD in Economics at University of Georgia, and Department Head at International University', 'images/david.jpg'),
    ('Andrew, PhD', 'Andrew, PhD', 'PhD in Economics at Princeton University, and Lecturer in Economics at De Montfort University (UK)', 'images/man.png'),
    ('Peter, PhD', 'Peter, PhD', 'Founder and CEO of Intelligent Financial Research & Consulting (IFRC)', 'images/man1.png');