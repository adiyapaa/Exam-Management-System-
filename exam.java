import java.sql.Date;

public class Exam {
    private int examId;
    private String subject;
    private Date date;
    private int totalMarks;

    public Exam(int examId, String subject, Date date, int totalMarks) {
        this.examId = examId;
        this.subject = subject;
        this.date = date;
        this.totalMarks = totalMarks;
    }

    public Exam(String subject, Date date, int totalMarks) {
        this.subject = subject;
        this.date = date;
        this.totalMarks = totalMarks;
    }

    // Getters and Setters
    // toString method
}
