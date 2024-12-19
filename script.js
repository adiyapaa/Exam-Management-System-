document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const examForm = document.getElementById('examForm');
    
    // Store Username and Redirect to Exam
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.getElementById('username').value.trim();
            if (username) {
                localStorage.setItem('username', username);
                window.location.href = 'exam.html';
            }
        });
    }

    // Display Username and Exam Type on Exam Page
    if (examForm) {
        const username = localStorage.getItem('username');
        const examType = localStorage.getItem('examType');
        document.getElementById('welcomeUser').textContent = `Welcome, ${username}`;
        document.getElementById('examType').value = examType;

        examForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const examDate = document.getElementById('examDate').value;
            const examTime = document.getElementById('examTime').value;
            const examLocation = document.getElementById('examLocation').value;
            alert(`Exam Details Submitted:\nType: ${examType}\nDate: ${examDate}\nTime: ${examTime}\nLocation: ${examLocation}`);
        });
    }
});

// Capture Exam Type Selection
function chooseType(type) {
    localStorage.setItem('examType', type);
    window.location.href = 'exam.html';
}
