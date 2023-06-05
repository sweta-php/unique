const Questions = [

    {
        question: "What is the capital of India?",
        answer: [
            { text: "Mumbai", correct: false },
            { text: "Ahmedabad", correct: false },
            { text: "Delhi", correct: true },
            { text: "Jamnagar", correct: false },
        ]


    },
    {
        question: "Which city is known as Lake city of India?",
        answer: [
            { text: "Jaypur", correct: false },
            { text: "Ahmedabad", correct: false },
            { text: "Udaipur", correct: true },
            { text: "Non-of-above", correct: false },
        ]


    },

    {
        question: "Rainbow consist of how many colours?",
        answer: [
            { text: "7", correct: true },
            { text: "5", correct: false },
            { text: "8", correct: false },
            { text: "6", correct: false },
        ]


    },
    {
        question: "Which city is called Diamond city of India?",
        answer: [
            { text: "Mumbai", correct: false },
            { text: "Ahmedabad", correct: false },
            { text: "Delhi", correct: false },
            { text: "Surat", correct: true },
        ]


    },
    {
        question: "Which is national game of India?",
        answer: [
            { text: "Cricket", correct: false },
            { text: "Hockey", correct: true },
            { text: "Boxing", correct: false },
            { text: "Football", correct: false },
        ]


    },

];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");
var count = document.getElementById("count");
let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
var counter = 10;
setInterval(function () {
    counter--;
    if (counter >= 0) {
        count.innerHTML = counter;
    }
    if (counter === 0) {
        currentQuestionIndex++;
        showQuestion();

    } if (currentQuestionIndex === Questions.length) {
        showScore;
        document.getElementById('count').style.display = 'none';
        document.getElementById('time-left').style.display = 'none';
    }

}, 1000);



function showQuestion() {
    resetState();
    counter = 10;
    let currentQuestion = Questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectanswer);


    });
}


function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectanswer(e) {
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if (iscorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;

    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();

    let result = (score / Questions.length) * 100;
    questionElement.innerHTML = 'You scored ' + score + ' out of ' + Questions.length + ' !! <br>' + 'Your result is ' + result + '%';
    //nextButton.innerHTML = 'Play Again';

    // nextButton.style.display = 'block';



}

function handleNextButton() {
    currentQuestionIndex++;
    counter = 10;
    if (currentQuestionIndex < Questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }

}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < Questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});


startQuiz();