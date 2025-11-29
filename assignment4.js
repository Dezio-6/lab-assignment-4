// 1. Quiz Questions Array
const quizQuestions = [
  { question: "What is the capital of India?", answer: "delhi" },
  { question: "Which planet is known as the Red Planet?", answer: "mars" },
  { question: "HTML stands for?", answer: "hypertext markup language" },
  { question: "Who wrote the Harry Potter series?", answer: "jk rowling" },
];

// 2. Function to Run the Quiz
function runQuiz() {
  // 3. Score Initialization
  let score = 0;

  // 4. Loop Through Questions
  for (let i = 0; i < quizQuestions.length; i++) {
    let userAns = prompt(quizQuestions[i].question);

    // 5 & 6. Normalize the Input
    userAns = userAns.toLowerCase().trim();

    // 7. Check the Answer
    if (userAns === quizQuestions[i].answer) {
      score++;
      // 8. Feedback
      alert("Correct!");
    } else {
      alert("Wrong! Correct answer: " + quizQuestions[i].answer);
    }
  }

  // 9. Display Final Score
  alert("Quiz Finished! Your score: " + score + " / " + quizQuestions.length);
}

// 10. Run the Quiz
runQuiz();
