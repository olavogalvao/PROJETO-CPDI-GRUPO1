const questions = [
    {
      question: "Qual a principal vantagem de conectar pessoas com habilidades específicas a projetos globais?",
      choices: ["Aumento do número de intermediários no mercado de trabalho.", "Diminuição das oportunidades de trabalho digno e autônomo", "Promoção de oportunidades de trabalho digno e autônomo, sem intermediários."],
      answer: "Promoção de oportunidades de trabalho digno e autônomo, sem intermediários.",
    },
    {
      question: "Qual o impacto da integração de indivíduos em iniciativas produtivas e inovadoras no crescimento econômico?",
      choices: ["Estagnação do crescimento econômico local e global.", "Estimular o crescimento econômico local e global.", "Reduzir a produtividade e a inovação."],
      answer: "Estimular o crescimento econômico local e global.",
    },
    {
      question: "Qual a principal característica da educação de qualidade?",
      choices: ["Impedir a troca de conhecimentos e habilidades entre os participantes.", "Incentivar o aprendizado contínuo por meio de projetos práticos.", " Limitar o acesso à educação de qualidade."],
      answer: "Incentivar o aprendizado contínuo por meio de projetos práticos.",
    },
    {
      question: "Qual recurso adicional pode ser encontrado em uma plataforma de educação de qualidade?",
      choices: ["Materiais educacionais e recursos para desenvolvimento profissional.", "Apenas materiais educacionais desatualizados.", "Ferramentas para restringir o acesso à informação."],
      answer: "Materiais educacionais e recursos para desenvolvimento profissional.",
    },
    {
      question: "Qual o principal objetivo da democratização do acesso a oportunidades de trabalho e colaboração?",
      choices: ["Aumentar a distância entre pessoas de diferentes contextos sociais e econômicos.", "Conectar pessoas de diferentes contextos sociais e econômicos, reduzindo desigualdades.", "Manter as barreiras de entrada ao mercado de trabalho"],
      answer: "Conectar pessoas de diferentes contextos sociais e econômicos, reduzindo desigualdades.",
    },
   
    {
      question: "Qual a principal estratégia para reduzir as desigualdades no mercado de trabalho?",
      choices: ["Aumentar o número de intermediários no processo de contratação.", "Priorizar projetos inclusivos e eliminar intermediários.", "Manter as mesmas práticas de seleção, privilegiando determinados grupos."],
      answer: "Priorizar projetos inclusivos e eliminar intermediários.",
    },
  
    
  ];
  
  const questionElement = document.getElementById("question");
  const choiceElements = Array.from(document.getElementsByClassName("choice"));
  const nextButton = document.getElementById("next");
  const scoreElement = document.getElementById("score");
  const wrongElement = document.getElementById("wrong");
  
  let currentQuestion = 0;
  let score = 0;
  let wrong = 0;
  let answerChosen = false;
  
  function loadQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionElement.innerText = currentQuestionData.question;
  
    const choices = shuffleArray(currentQuestionData.choices);
    for (let i = 0; i < choiceElements.length; i++) {
      choiceElements[i].innerText = choices[i];
    }
    answerChosen = false; // reset flag when loading new question
  }
  
  function checkAnswer(e) {
    if (answerChosen) return; // prevent multiple answers
    answerChosen = true;
  
    if (e.target.innerText === questions[currentQuestion].answer) {
      score++;
      scoreElement.innerText = "Pontuação: " + score;
      alert("Correto!");
    } else {
      wrong++;
      wrongElement.innerText = "Erros: " + wrong;
      alert(
        "Errado! A resposta correta é " + questions[currentQuestion].answer + "."
      );
    }
  }
  
  choiceElements.forEach((element) => {
    element.addEventListener("click", checkAnswer);
  });
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    wrong = 0;
    scoreElement.innerText = "Pontuação: 0";
    wrongElement.innerText = "Erros: 0";
    loadQuestion();
  }
  
  nextButton.addEventListener("click", () => {
    if (!answerChosen) {
      alert("Por favor, escolha uma resposta antes de prosseguir.");
      return;
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      alert(
        "Fim do Quiz! Você acertou " +
          score +
          " de " +
          questions.length +
          " perguntas."
      );
      restartQuiz();
    }
  });
  
  function shuffleArray(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  loadQuestion();