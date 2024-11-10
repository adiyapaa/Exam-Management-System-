// src/ExamManagementSystem.java
import dao.StudentDAO;
import model.Student;

import java.util.List;

public class ExamManagementSystem {
    public static void main(String[] args) {
        StudentDAO studentDAO = new StudentDAO();

        // Add a new student
        Student student = new Student("John Doe", "john.doe@example.com", "123-456-7890");
        studentDAO.addStudent(student);

        // List all students
        List<Student> students = studentDAO.getAllStudents();
        System.out.println("All Students:");
        for (Student s : students) {
            System.out.println(s);
        }
    }
}