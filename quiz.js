const questions = [
    {
      q: "Where was our first date?",
      a: ["Cinema", "Restaurant", "Park", "Cafe"]
    },
    {
      q: "What is my favorite thing about you?",
      a: ["Your smile", "Your laugh", "Your heart", "Everything"]
    },
  ];
  
  // Duplicate until you have 30 questions 💘
  while (questions.length < 30) {
    questions.push(...questions.slice(0, 30 - questions.length));
  }
  
  let current = 0;
  
  function showQuestion() {
    const quiz = document.getElementById("quiz");
    quiz.innerHTML = `
      <h2>${questions[current].q}</h2>
      ${questions[current].a.map(opt =>
        `<label><input type="radio" name="q">${opt}</label><br>`
      ).join("")}
    `;
  }
  
  function nextQuestion() {
    current++;
    if (current >= questions.length) {
      window.location.href = "final.html";
    } else {
      showQuestion();
    }
  }
  
  showQuestion();
  