const quizData =
{
    "struktur-data": [
        {
            "question": "1.Penambahan data baru dan penghapusan dilakukan pada ujung yang berbeda, yaitu rear(penambahan data) dan front(penghapusan data) merupakan struktur data ...",
            "a": "Deques",
            "b": "Stack",
            "c": "Queues",
            "d": "Jawaban A dan C benar",
            "e": "Semua Benar",
            "correct": "a",
        },
        {
            "question": "Selection Sort Merupakan pengurutan yang ...",
            "a": "a.dilakukan dengan cara membagi data menjadi dua buah bagian, dan proses pengurutan terjadi pada proses merging/combine.",
            "b": "b.dikenal sebagai algoritma pengurutan yang membutuhkan waktu paling lama, hanya saja algoritma ini adalah algoritma pengurutan yang paling sederhana.",
            "c": "c.menggabungkan data-data yang sudah terbagi pada Tahap pertama. Proses merge ini juga melibatkan proses membandingkan data antara list yang akan digabung.",
            "d": "d.diasumsikan bahwa sebagian data sudah dalam keadaan terurut sehingga data berikutnya akan dibandingkan dengan data yang sudah dalam keadaan terurut ini, dan disisipkan pada bagian data yang sudah terurut tersebut.",
            "e": "e.tidak akan melakukan dua proses ini (perbandingan dan pertukaran) pada satu waktu, akan tetapi, pada algoritma selection sort, akan dicari data yang memenuhi syarat terlebih dahulu.",
            "correct": "e",
        },
        {
            "question": `3.Perhatikan Code ini 
                def strVal(strData):
                    temp=0
                    for i in range (len(strData)):
                        temp=temp+ord(strData[i])
                    return(temp)
                strVal('indonesia')
                code diatas merupakan penerapan dari ...`,
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
            "question": "Type data dibawah ini, yang tidak termasuk dalam tipe data sederhana tunggal, adalah",
            "a": "Boolean ",
            "b": "Integer",
            "c": "String ",
            "d": "float ",
            "e": "Char",
            "correct": "c",
        },
        {
            "question": "==, <=, >=, != , termasuk dalma operator",
            "a": "Aritmatika",
            "b": "Unary",
            "c": "Relasi",
            "d": "Binary",
            "e": "Bitwise",
            "correct": "c",
        },
        {
            "question": "3.List type Tuple memakai tanda ...",
            "a": "{...}",
            "b": "[...]",
            "c": "(...)",
            "d": "{...]",
            "e": "(...}",
            "correct": "c",
        },
    ]

};

// const
// if
const mulaiQuiz = document.getElementById("mulai-kuis");
const getMataKuliah = document.getElementById("mata-kuliah");
let currentSubject = "";
const mulaiJawab = document.getElementById("kuis-mulai-jawab");
mulaiQuiz.addEventListener("click", function () {
    currentSubject = getMataKuliah.options[getMataKuliah.selectedIndex].value;
    removeClass("#kuis-mulai-jawab", "hidden");
    // mulaiJawab.classList.remove("hidden");
    console.log(currentSubject)
    addClass(".choose-subject", "hidden");


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
        const currentQuizData = quizData[currentSubject][currentQuiz];
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
            if (answer === quizData[currentSubject][currentQuiz].correct) score++;
            currentQuiz++;
            if (currentQuiz < quizData[currentSubject].length) loadQuiz();
            else {
                quiz.innerHTML = `  
 <h2 class="text-accent-color mt-4">Jawaban anda ${score}/${quizData[currentSubject].length}</h2>  
 <button class="button-accent-bg mb-4" onclick="history.go(0)">Mulai Lagi</button>  
`
            }
        }
    });

});