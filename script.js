const form = document.getElementById("marksForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("studentName").value.trim();

    const marks = [
        Number(document.getElementById("mark1").value),
        Number(document.getElementById("mark2").value),
        Number(document.getElementById("mark3").value),
        Number(document.getElementById("mark4").value),
        Number(document.getElementById("mark5").value)
    ];

    if (marks.some(mark => mark < 0 || mark > 100)) {
        alert("Please enter marks between 0 and 100.");
        return;
    }

    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const percentage = total / 5;

    let grade;
    let message;

    if (percentage >= 90) {
        grade = "A";
        message = "Outstanding! Keep shining! ✨";
    } else if (percentage >= 75) {
        grade = "B";
        message = "Great work! You're doing well! 🚀";
    } else if (percentage >= 50) {
        grade = "C";
        message = "Good effort! Keep improving! 💪";
    } else {
        grade = "F";
        message = "Keep practising. You can do better! 🌱";
    }

    document.getElementById("resultName").textContent = name;
    document.getElementById("total").textContent = total + "/500";
    document.getElementById("percentage").textContent = percentage.toFixed(2) + "%";
    document.getElementById("grade").textContent = grade;
    document.getElementById("message").textContent = message;
    document.getElementById("progressText").textContent = percentage.toFixed(2) + "%";

    result.classList.remove("hidden");

    const progressBar = document.getElementById("progressBar");
    progressBar.style.width = "0%";

    setTimeout(() => {
        progressBar.style.width = percentage + "%";
    }, 100);

    result.scrollIntoView({ behavior: "smooth", block: "nearest" });
});