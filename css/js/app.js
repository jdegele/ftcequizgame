let currentQuestionIndex = 0;
let shuffledQuestions = [];
let correctCount = 0;

function shuffleQuestions() {
  shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  correctCount = 0;
  loadQuestion();
}

function loadQuestion() {
  const q = shuffledQuestions[currentQuestionIndex];
  document.getElementById("question-text").textContent = q.question;
  document.getElementById("choices").innerHTML = "";
  document.getElementById("explanation").textContent = "";
  document.getElementById("next-btn").disabled = true;

  const imgBox = document.getElementById("question-image");
  imgBox.innerHTML = q.image ? `<img src="${q.image}" alt="Question image">` : "";

  q.choices.forEach(choice => {
    const li = document.createElement("li");
    li.textContent = choice;
    li.className = "choice";
    li.onclick = () => handleAnswer(li, choice, q.answer, q.explanation);
    document.getElementById("choices").appendChild(li);
  });
}

function handleAnswer(element, selected, correct, explanation) {
  const choices = document.querySelectorAll("li.choice");
  choices.forEach(li => {
    li.onclick = null;
    if (li.textContent === correct) li.classList.add("correct");
    else if (li.textContent === selected) li.classList.add("incorrect");
  });

  document.getElementById("explanation").textContent = explanation;
  if (selected === correct) correctCount++;

  document.getElementById("next-btn").disabled = false;
}

document.getElementById("next-btn").addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledQuestions.length) {
    loadQuestion();
  } else {
    document.querySelector(".container").innerHTML = `
      <h1>Session Complete</h1>
      <p>You got ${correctCount} out of ${shuffledQuestions.length} correct.</p>
      <button onclick="shuffleQuestions()">Start Again</button>
    `;
  }
});

window.onload = shuffleQuestions;
