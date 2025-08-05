document.addEventListener("DOMContentLoaded", function () {
  const quizContainer = document.getElementById("quiz-container");
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const nextBtn = document.getElementById("nextBtn");
  const resultEl = document.getElementById("result");
  const scoreEl = document.getElementById("score");
  const restartBtn = document.getElementById("restartBtn");

  const quizData = [
    {
      question: "What does ES6 stand for?",
      options: ["EcmaScript 6", "Easy Script 6", "Electronic Script 6", "Extra Script 6"],
      answer: 0,
    },
    {
      question: "Which method is used to filter elements in an array?",
      options: ["map()", "filter()", "reduce()", "find()"],
      answer: 1,
    },
    {
      question: "What keyword declares a constant variable in JavaScript?",
      options: ["var", "let", "const", "constant"],
      answer: 2,
    },
  ];

  let currentQuestion = 0;
  let score = 0;

  function loadQuestion() {
    questionEl.textContent = quizData[currentQuestion].question;
    answersEl.innerHTML = "";

    quizData[currentQuestion].options.forEach((option, index) => {
      const btn = document.createElement("button");
      btn.classList.add("answer-btn");
      btn.textContent = option;
      btn.dataset.index = index;

      btn.addEventListener("click", () => {
        // إزالة التحديد من باقي الأزرار
        document.querySelectorAll(".answer-btn").forEach(b => b.classList.remove("selected"));
        // تحديد الزر المضغوط
        btn.classList.add("selected");
      });

      answersEl.appendChild(btn);
    });
  }

  function checkAnswer() {
    const selectedBtn = document.querySelector(".answer-btn.selected");
    if (!selectedBtn) {
      alert("Please select an answer!");
      return false;
    }
    const answer = parseInt(selectedBtn.dataset.index);
    if (answer === quizData[currentQuestion].answer) {
      score++;
    }
    return true;
  }

  nextBtn.addEventListener("click", () => {
    if (!checkAnswer()) return;

    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      quizContainer.style.display = "none";
      resultEl.style.display = "block";
      scoreEl.textContent = score;
    }
  });

  restartBtn.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    quizContainer.style.display = "block";
    resultEl.style.display = "none";
    loadQuestion();
  });

  // بدء الاختبار أول مرة
  loadQuestion();
});
