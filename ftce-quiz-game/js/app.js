
const container = document.getElementById("question-container");
const choicesList = document.getElementById("choices");
const explanationBox = document.getElementById("explanation");
const imageContainer = document.getElementById("image-container");
const nextBtn = document.getElementById("next-btn");

let currentQuestion = 0;

function displayQuestion() {
  const q = questions[currentQuestion];
  container.textContent = q.question;
  explanationBox.textContent = "";
  choicesList.innerHTML = "";

  if (q.image) {
    imageContainer.innerHTML = `<img src="${q.image}" alt="Question Diagram" style="max-width:100%;">`;
  } else {
    imageContainer.innerHTML = "";
  }

  q.choices.forEach(choice => {
    const li = document.createElement("li");
    li.textContent = choice;
    li.onclick = () => {
      if (choice === q.answer) {
        explanationBox.textContent = "✅ Correct! " + q.explanation;
      } else {
        explanationBox.textContent = "❌ Incorrect. " + q.explanation;
      }
    };
    choicesList.appendChild(li);
  });
}

nextBtn.onclick = () => {
  currentQuestion = (currentQuestion + 1) % questions.length;
  displayQuestion();
};

displayQuestion();
