const quizData = [{
    question: "Apa Kepanjangan dari HTML?",
    a: "Hypertext Markup Language",
    b: "Hyper link Markup Language",
    c: "Hyper Tool Markup Language",
    d: "Hyper Test Markup Language",
    correct: "a",
},
{
    question: "Berikut ini tag untuk membuat heading, kecuali?",
    a: "h5",
    b: "h7",
    c: "h6",
    d: "h4",
    correct: "b",
},
{
    question: "Untuk Menambahkan baris baru menggunakan tag?",
    a: "hr",
    b: "newline",
    c: "br",
    d: "break",
    correct: "d",
},
];
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
};
const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = `  
 <h2>Jawaban anda ${score}/${quizData.length}</h2>  
 <button onclick="history.go(0)">Mulai Lagi</button>  
`
        }
    }
});