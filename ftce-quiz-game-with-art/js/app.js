let currentQuestionIndex = 0;
let shuffledQuestions = [];
let totalQuestionsPerSession = 20;
let correctCount = 0;

// Shuffle the question bank
function shuffleQuestions() {
  shuffledQuestions = [...questions].sort(() => Math.random() - 0.5).slice(0, totalQuestionsPerSession);
  currentQuestionIndex = 0;
  correctCount = 0;
  loadQuestion();
}

// Load a question and display it
function loadQuestion() {
  const q = shuffledQuestions[currentQuestionIndex];
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices");
  const explanationText = document.getElementById("explanation");
  const questionImage = document.getElementById("question-image");

  questionText.textContent = q.question;
  choicesList.innerHTML = "";
  explanationText.textContent = "";
  document.getElementById("next-btn").disabled = true;

  // Show image if available
  if (q.image) {
    questionImage.innerHTML = `<img src="${q.image}" alt="diagram" style="max-width: 100%; max-height: 250px;">`;
  } else {
    questionImage.innerHTML = "";
  }

  // Add answer choices
  q.choices.forEach(choice => {
    const li = document.createElement("li");
    li.textContent = choice;
    li.classList.add("choice");
    li.onclick = () => handleAnswer(choice, q.answer, q.explanation);
    choicesList.appendChild(li);
  });
}

// Handle answer selection
function handleAnswer(selected, correct, explanation) {
  const choicesList = document.querySelectorAll("#choices li");
  const explanationText = document.getElementById("explanation");

  choicesList.forEach(li => {
    li.onclick = null;
    if (li.textContent === correct) li.classList.add("correct");
    else if (li.textContent === selected) li.classList.add("incorrect");
  });

  if (selected === correct) {
    correctCount++;
    explanationText.textContent = "✅ Correct! " + explanation;
  } else {
    explanationText.textContent = "❌ Incorrect. " + explanation;
  }

  document.getElementById("next-btn").disabled = false;
}

// Handle next question
document.getElementById("next-btn").addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledQuestions.length) {
    loadQuestion();
  } else {
    showSummary();
  }
});

// Show final summary
function showSummary() {
  const container = document.querySelector(".container");
  container.innerHTML = `
    <h1>Session Complete!</h1>
    <p>You answered ${correctCount} out of ${totalQuestionsPerSession} correctly.</p>
    <button onclick="shuffleQuestions()">Start New Session</button>
  `;
}

// Start on page load
window.onload = shuffleQuestions;
