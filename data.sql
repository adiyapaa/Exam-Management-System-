CREATE DATABASE exam_management_system;
USE exam_management_system;

CREATE TABLE Students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    email VARCHAR(50),
    phone VARCHAR(15)
);

CREATE TABLE Exams (
    exam_id INT PRIMARY KEY AUTO_INCREMENT,
    subject VARCHAR(50),
    date DATE,
    total_marks INT
);

CREATE TABLE Results (
    result_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    exam_id INT,
    marks_obtained INT,
    FOREIGN KEY (student_id) REFERENCES Students(student_id),
    FOREIGN KEY (exam_id) REFERENCES Exams(exam_id)
);
