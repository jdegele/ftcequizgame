// game.js

let currentQuestionIndex = 0;
let questionCount = 0;
let hintTokens = 3;
let powerUps = 0;
let sessionQuestions = [];
let correctPerTopic = {
  atomic: 0,
  bonding: 0,
  thermo: 0,
  acids: 0
};
let totalPerTopic = {
  atomic: 0,
  bonding: 0,
  thermo: 0,
  acids: 0
};

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generateSession() {
  sessionQuestions = shuffle([...questions]);
  currentQuestionIndex = 0;
  questionCount = 0;
  document.getElementById("question-count").textContent = "0";
  loadQuestion();
}

function loadQuestion() {
  const q = sessionQuestions[currentQuestionIndex];
  document.getElementById("question-text").textContent = q.question;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.className = "answer-btn";
    btn.onclick = () => handleAnswer(choice, q);
    answersDiv.appendChild(btn);
  });
}

function handleAnswer(choice, q) {
  const correct = choice === q.answer;
  const topic = q.topic;
  totalPerTopic[topic]++;
  if (correct) {
    correctPerTopic[topic]++;
    powerUps++;
  } else {
    hintTokens++;
  }
  updateProgress();
  questionCount++;
  document.getElementById("question-count").textContent = questionCount;
  currentQuestionIndex++;

  if (questionCount % 20 === 0) {
    document.getElementById("session-end-options").style.display = "block";
    document.getElementById("game-controls").style.display = "none";
  } else {
    loadQuestion();
  }
}

function updateProgress() {
  for (const topic in totalPerTopic) {
    const percent = totalPerTopic[topic] === 0 ? 0 : Math.round((correctPerTopic[topic] / totalPerTopic[topic]) * 100);
    document.querySelector(`#progress-${topic} progress`).value = percent;
  }
  document.getElementById("hint-tokens").textContent = hintTokens;
  document.getElementById("power-ups").textContent = powerUps;
}

document.getElementById("next-btn").onclick = () => loadQuestion();
document.getElementById("hint-btn").onclick = () => {
  if (hintTokens > 0) {
    hintTokens--;
    alert("Hint: Think about the concept behind the question.");
    document.getElementById("hint-tokens").textContent = hintTokens;
  } else {
    alert("No more hint tokens available!");
  }
};
document.getElementById("end-session-btn").onclick = () => {
  document.getElementById("session-end-options").style.display = "block";
  document.getElementById("game-controls").style.display = "none";
};
document.getElementById("continue-session").onclick = () => {
  document.getElementById("session-end-options").style.display = "none";
  document.getElementById("game-controls").style.display = "block";
  loadQuestion();
};
document.getElementById("stop-session").onclick = () => {
  alert("Session ended. Your progress is saved.");
  generateSession();
};

// Start game
window.onload = generateSession;
