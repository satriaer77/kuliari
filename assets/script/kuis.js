const quizData =
{
    "struktur-data": [
        {
            "question": "<span class='text-bold '>1. Penambahan data baru dan penghapusan dilakukan pada ujung yang berbeda, yaitu rear(penambahan data) dan front(penghapusan data) merupakan struktur data ...</span>",
            "a": "Deques",
            "b": "Stack",
            "c": "Queues",
            "d": "Jawaban A dan C benar",
            "e": "Semua Benar",
            "correct": "a",
        },
        {
            "question": "<span class='text-bold '>2. Selection Sort Merupakan pengurutan yang ...</span>",
            "a": "Dilakukan dengan cara membagi data menjadi dua buah bagian, dan proses pengurutan terjadi pada proses merging/combine.",
            "b": "Dikenal sebagai algoritma pengurutan yang membutuhkan waktu paling lama, hanya saja algoritma ini adalah algoritma pengurutan yang paling sederhana.",
            "c": "Menggabungkan data-data yang sudah terbagi pada Tahap pertama. Proses merge ini juga melibatkan proses membandingkan data antara list yang akan digabung.",
            "d": "Tidak akan melakukan dua proses ini (perbandingan dan pertukaran) pada satu waktu, akan tetapi, pada algoritma selection sort, akan dicari data yang memenuhi syarat terlebih dahulu.",
            "e": "Diasumsikan bahwa sebagian data sudah dalam keadaan terurut sehingga data berikutnya akan dibandingkan dengan data yang sudah dalam keadaan terurut ini, dan disisipkan pada bagian data yang sudah terurut tersebut.",
            "correct": "d",
        },
        {
            "question": `<span class='text-bold'>3. Perhatikan Code ini</span>
                <span class='content-code'>
                def strVal(strData):<br>
                &ensp;temp=0<br>
                &ensp;for i in range (len(strData)):<br>
                &ensp;&ensp;temp=temp+ord(strData[i])<br>
                &ensp;return(temp)<br>
                strVal('indonesia')
                </span>
                <span class='text-bold'>code diatas merupakan penerapan dari ...</span>`,
            "a": "Sequential Search",
            "b": "Binary Search",
            "c": "Bubblesort",
            "d": "Hashing",
            "e": "Deque",
            "correct": "d",
        },
    ],

    "algoritma-dasar": [
        {
            "question": "<span class='text-bold'>1. Type data dibawah ini, yang tidak termasuk dalam tipe data sederhana tunggal, adalah</span>",
            "a": "Boolean ",
            "b": "Integer",
            "c": "String ",
            "d": "float ",
            "e": "Char",
            "correct": "c",
        },
        {
            "question": "<span class='text-bold'>2. ==, <=, >=, != , termasuk dalma operator</span>",
            "a": "Aritmatika",
            "b": "Unary",
            "c": "Relasi",
            "d": "Binary",
            "e": "Bitwise",
            "correct": "c",
        },
        {
            "question": "<span class='text-bold'>3. List type Tuple memakai tanda ...</span>",
            "a": "{...}",
            "b": "[...]",
            "c": "(...)",
            "d": "{...]",
            "e": "(...}",
            "correct": "c",
        },

    ]

};


function getSelected(answerLists)
{
    let answerId;
    answerLists.forEach((answerElement) => {
        if (answerElement.checked) answerId = answerElement.id;
    });
    return answerId;
}

function highlightAnswer(inputName, cond) {
    const getAnswer     = document.getElementsByName(inputName);
    let answeredElement = null;
    for (let i = 0; i < getAnswer.length; i++)
	{
        getAnswer[i].parentElement.classList.remove("answered");
        if (getAnswer[i].checked)
		{
            getAnswer[i].parentElement.classList.add("answered");
        }

        if (cond) {
            getAnswer[i].parentElement.classList.remove("answered");
            getAnswer[i].checked = false;
        }
    }
}

const mulaiQuiz     = document.getElementById("mulai-kuis");
const getMataKuliah = document.getElementById("mata-kuliah");
let currentSubject  = "";
const mulaiJawab    = document.getElementById("kuis-mulai-jawab");

mulaiQuiz.addEventListener("click", function () {
    currentSubject = getMataKuliah.options[getMataKuliah.selectedIndex].value;
    removeClass("#kuis-mulai-jawab", "hidden");
    addClass(".choose-subject", "hidden");


    const quiz            = document.getElementById("quiz");
    const answerElements  = document.querySelectorAll(".answer");
    const questionElement = document.getElementById("question");

    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");

    const submitButton = document.getElementById("submit");

    let bns         = '';
    let currentQuiz = 0;
    let score       = 0;

    const deselectAnswers = function() {
        answerElements.forEach((answer) => (answer.checked = false));
    };

    const loadQuiz = function() {
        deselectAnswers();
        const currentQuizData = quizData[currentSubject][currentQuiz];
		
        questionElement.innerHTML = currentQuizData.question;
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
    };

    loadQuiz();

    submitButton.addEventListener("click", () => {

        const answer = getSelected(answerElements);

        if (answer)
        {

            if (answer === quizData[currentSubject][currentQuiz].correct)
            {
                score++;
            }
            else
            {
                bns += `Soal ${currentQuiz + 1} = ${answer}, Jawaban yang benar ${quizData[currentSubject][currentQuiz]["correct"]}<br>`;
            }

            currentQuiz++;

            if (currentQuiz < quizData[currentSubject].length)
            {
                loadQuiz();
                highlightAnswer("answer", true);
            }
            else
            {
                quiz.innerHTML = `
                <h3 class="text-accent-color mt-4">Jawaban anda ${score}/${quizData[currentSubject].length} : , dengan
                Nilai : ${score / quizData[currentSubject].length * 100} <br></h3>
                <span>${bns}</span>
                <button class="button-accent-bg mb-4" onclick="history.go(0)">Mulai Lagi</button>`;
                question.innerHTML     = "";
                addClass("#submit","hidden");
            }
        }
    });

});


const quizClick = document.getElementById("quiz");

quizClick.addEventListener("click", function () {
    highlightAnswer("answer", false);
});
