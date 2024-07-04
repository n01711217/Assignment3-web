document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: "Guess my correct number",
            options: ["n0127172", "n02761782", "n08937829", "n01711217"],
            answer: "n01711217"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Venus"],
            answer: "Mars"
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: "Pacific Ocean"
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
            answer: "Leonardo da Vinci"
        },
        {
            question: "What is the smallest prime number?",
            options: ["1", "2", "3", "5"],
            answer: "2"
        },
        {
            question: "What is the freezing point of water?",
            options: ["0 degrees Celsius", "32 degrees Fahrenheit", "Both A and B", "None of the above"],
            answer: "Both A and B"
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "F. Scott Fitzgerald"],
            answer: "Harper Lee"
        }
    ];

    let currentQuestion = 0;
    let score = 0;
    let answers = [];
    const answeredQuestions = new Set();

    function showQuestion() {
        const questionContainer = document.getElementById('question-container');
        questionContainer.innerHTML = '';

        if (currentQuestion < questions.length) {
            const question = questions[currentQuestion];
            const questionElement = document.createElement('h2');
            questionElement.textContent = `${currentQuestion + 1}. ${question.question}`;
            questionContainer.appendChild(questionElement);

            question.options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option;
                button.addEventListener('click', () => selectAnswer(option));
                button.disabled = answeredQuestions.has(currentQuestion);
                questionContainer.appendChild(button);
            });

            document.getElementById('navigation-buttons').style.display = 'block';

            // Show submit button on last question
            if (currentQuestion === questions.length - 1) {
                document.getElementById('submit-button').style.display = 'inline-block';
                document.getElementById('next-button').style.display = 'none';
            } else {
                document.getElementById('submit-button').style.display = 'none';
                document.getElementById('next-button').style.display = 'inline-block';
            }
        }

        updateNavigationButtons();
    }

    function selectAnswer(selected) {
        const question = questions[currentQuestion];
        const feedbackElement = document.createElement('p');

        if (selected === question.answer) {
            score++;
            feedbackElement.textContent = "Correct!";
            feedbackElement.className = 'correct';
        } else {
            feedbackElement.textContent = "Incorrect!";
            feedbackElement.className = 'incorrect';
        }

        answers.push({ question: question.question, selected, correct: question.answer });
        const questionContainer = document.getElementById('question-container');
        questionContainer.appendChild(feedbackElement);

        answeredQuestions.add(currentQuestion);
    }

    function nextQuestion() {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            showQuestion();
        }
    }

    function prevQuestion() {
        if (currentQuestion > 0) {
            currentQuestion--;
            showQuestion();
        }
    }

    function updateNavigationButtons() {
        document.getElementById('prev-button').disabled = currentQuestion === 0;
        document.getElementById('next-button').disabled = currentQuestion === questions.length - 1;
    }

    function submitQuiz() {
        const scoreElement = document.getElementById('score');
        scoreElement.style.display = 'block';
        scoreElement.innerHTML = `<h2>Your final score is: ${score}/${questions.length}</h2>`;

        const resultList = document.createElement('ul');
        answers.forEach(answer => {
            const resultItem = document.createElement('li');
            resultItem.textContent = `Question: ${answer.question} | Your Answer: ${answer.selected} | Correct Answer: ${answer.correct}`;
            resultItem.className = answer.selected === answer.correct ? 'correct' : 'incorrect';
            resultList.appendChild(resultItem);
        });

        scoreElement.appendChild(resultList);
    }

    function authenticate() {
        const authContainer = document.getElementById('auth');
        const quizContainer = document.getElementById('quiz');
        
        authContainer.style.display = 'none';
        quizContainer.style.display = 'block';
        
        showQuestion();
    }

    window.authenticate = authenticate;
    window.submitQuiz = submitQuiz;
    window.nextQuestion = nextQuestion;
    window.prevQuestion = prevQuestion;
});
