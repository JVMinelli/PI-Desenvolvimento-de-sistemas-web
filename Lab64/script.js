const quizData = [
    {
        question: "O que significa a sigla PUC?",
        options: ["Pontifícia Universidade Católica", "Primeira Universidade Católica", "Pontifícia Universidade Cristã", "Primeira Universidade Cristã"],
        answer: "Pontifícia Universidade Católica"
    },
    {
        question: "Qual o nome do centro de convivência ao lado do prédio H7?",
        options: ["Centro de Convivência Puc", "Ypê", "Manacás", "Centro Pau-Brasil"],
        answer: "Manacás"
    },
    {
        question: "Quantos Campus da PUC existem em Campinas?",
        options: [
            "2",
            "1",
            "4",
            "3"
        ],
        answer: "2"
    },
    {
        question: "Qual o curso mais concorrido da PUC?",
        options: ["Engenharia da computação", "Medicina", "Jornalismo", "Psicologia"],
        answer: "Medicina"
    },
    {
        question: "Quantas engenharias existem na PUCC?",
        options: ["10", "11", "12", "13"],
        answer: "12"
    }
];

const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("enviar");
  const restartButton = document.getElementById("restart-button");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    restartButton.style.display="block"
    quiz.innerHTML = `
      <h1>Quiz completo!</h1>
      <p>Você acertou: ${score}/${quizData.length} Parabéns!</p>
    `;
    restartButton.style.display="block";
  }

  function restartQuiz() {
    currentQuestion = 0;
    displayQuestion();
    restartButton.style.display = "none";
  }
  
  showQuestion();