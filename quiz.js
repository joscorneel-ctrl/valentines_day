const questions=[
  {q:"Where was our first date?", a:["Cinema","Restaurant","Park","Cafe"]},
  {q:"What do I love most about you?", a:["Your smile","Your laugh","Your heart","Everything"]},
  {q:"What's our favorite thing to do together?", a:["Travel","Watch movies","Talk for hours","All of the above"]},
  {q:"What song reminds me of you?", a:["Our song","Every love song","That one you hate","All of them"]},
  {q:"What makes you special to me?", a:["Your kindness","Your strength","Your love","All of it"]}
];
// duplicate to 30 questions
while(questions.length<30){questions.push(...questions.slice(0,30-questions.length));}

let current=0;
function showQuestion(){
  const quiz=document.getElementById("quiz");
  quiz.innerHTML=`
    <h2>${questions[current].q}</h2>
    ${questions[current].a.map(opt=>`<label><input type="radio" name="answer"> ${opt}</label><br>`).join('')}
    <p>Question ${current+1} of 30</p>
  `;
}
function nextQuestion(){
  current++;
  if(current>=30){window.location.href="final.html";}
  else{showQuestion();}
}
showQuestion();
