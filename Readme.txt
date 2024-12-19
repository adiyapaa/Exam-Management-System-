Exam Management System
======================

Project Overview
----------------
The Exam Management System is a Java-based application designed to help manage students, exams, and exam results using a MySQL database. The application performs basic operations such as adding, viewing, and managing student records, exams, and results. It uses JDBC for database connectivity and is structured using the Data Access Object (DAO) pattern.

Project Goals
-------------
1. **Student Management**: Keep track of students, including details like name, email, and phone number.
2. **Exam Management**: Organize and manage exam details, including subjects, dates, and maximum scores.
3. **Result Management**: Store and retrieve student exam results to track performance.

Technologies and Tools
----------------------
- **Java**: The primary programming language.
- **MySQL**: For data storage.
- **JDBC**: To connect Java to the MySQL database.
- **DAO Pattern**: For organized and reusable data access code.

Key Features
------------
- **Add and Manage Students**: Allows adding new students and viewing existing student information.
- **Set Up Exams**: Enables the creation and management of exams with subject, date, and score details.
- **Record Exam Results**: Allows storing and retrieving students' scores for each exam.

Getting Started
---------------
1. **Database Setup**: 
   - A MySQL database is required to store the data for students, exams, and results.
   - Tables include `Students`, `Exams`, and `Results` with relationships defined for data integrity.
   
2. **Environment**:
   - Requires JDK 8 or higher and MySQL.
   - The application can be run in any Java IDE (like IntelliJ or Eclipse) or via the command line.

Usage
-----
Once set up, the application can be used to:
- Register new students.
- Define exams.
- Record and view results for students.

Future Enhancements
-------------------
- **User Authentication**: Adding user roles such as admin and student.
- **Detailed Reports**: Generate detailed exam and student performance reports.
- **UI Enhancement**: Convert to a graphical user interface (GUI) for improved user experience.


HTML Files:

Exam.html 
index.html
style.css 
script.js 

