//Use the Fetch API to get quiz questions
//show the question and answer

function getQuestion() {
  // const url =
  //   "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple";
  // const result = await fetch(`${url}`);
  // const data = await result.json();

  // console.log(data.results);
  const data = {
    response_code: 0,
    results: [
      {
        type: "multiple",
        difficulty: "easy",
        category: "Animals",
        question: "What is the collective noun for a group of crows?",
        correct_answer: "Murder",
        incorrect_answers: ["Pack", "Gaggle", "Herd"],
      },
      {
        type: "multiple",
        difficulty: "easy",
        category: "Animals",
        question: "What is Grumpy Cat&#039;s real name?",
        correct_answer: "Tardar Sauce",
        incorrect_answers: ["Sauce", "Minnie", "Broccoli"],
      },
      {
        type: "multiple",
        difficulty: "easy",
        category: "Animals",
        question: "What colour is the female blackbird?",
        correct_answer: "Brown",
        incorrect_answers: ["Black", "White", "Yellow"],
      },
      {
        type: "multiple",
        difficulty: "easy",
        category: "Animals",
        question: "By definition, where does an abyssopelagic animal live?",
        correct_answer: "At the bottom of the ocean",
        incorrect_answers: [
          "In the desert",
          "On top of a mountain",
          "Inside a tree",
        ],
      },
      {
        type: "multiple",
        difficulty: "easy",
        category: "Animals",
        question: "What do you call a baby bat?",
        correct_answer: "Pup",
        incorrect_answers: ["Cub", "Chick", "Kid"],
      },
      {
        type: "multiple",
        difficulty: "easy",
        category: "Animals",
        question: "Hippocampus is the Latin name for which marine creature?",
        correct_answer: "Seahorse",
        incorrect_answers: ["Dolphin", "Whale", "Octopus"],
      },
      {
        type: "multiple",
        difficulty: "easy",
        category: "Animals",
        question: "What is the name of a rabbit&#039;s abode?",
        correct_answer: "Burrow",
        incorrect_answers: ["Nest", "Den", "Dray"],
      },
      {
        type: "multiple",
        difficulty: "easy",
        category: "Animals",
        question: "What is the fastest  land animal?",
        correct_answer: "Cheetah",
        incorrect_answers: [
          "Lion",
          "Thomson&rsquo;s Gazelle",
          "Pronghorn Antelope",
        ],
      },
      {
        type: "multiple",
        difficulty: "easy",
        category: "Animals",
        question: "How many teeth does an adult rabbit have?",
        correct_answer: "28",
        incorrect_answers: ["30", "26", "24"],
      },
      {
        type: "multiple",
        difficulty: "easy",
        category: "Animals",
        question: "What is the scientific name for modern day humans?",
        correct_answer: "Homo Sapiens",
        incorrect_answers: [
          "Homo Ergaster",
          "Homo Erectus",
          "Homo Neanderthalensis",
        ],
      },
    ],
  };
  return data.results;
}

const quizCollection = getQuestion();

let totalPoints = 0;
let currentQuizIndex = 0;
//get quiz data
//display question data and answer data
//console log the first question and answer for the user
function displayQuestion() {
  const question = document.getElementById("question");
  const answer1 = document.getElementById("btn1");
  const answer2 = document.getElementById("btn2");
  const answer3 = document.getElementById("btn3");
  const answer4 = document.getElementById("btn4");

  const quizquestion = quizCollection[currentQuizIndex].question;
  const correctanswer = quizCollection[currentQuizIndex].correct_answer;
  const incorrectanswer = quizCollection[currentQuizIndex].incorrect_answers;

  console.log(quizCollection[0]);
  console.log(correctanswer);
  console.log(incorrectanswer);
  console.log(quizquestion);
  //homework randomise the answer before display - create function
  question.innerHTML = quizquestion;
  answer1.innerHTML = correctanswer;
  answer2.innerHTML = incorrectanswer[0];
  answer3.innerHTML = incorrectanswer[1];
  answer4.innerHTML = incorrectanswer[2];
}

displayQuestion();

//check the id of the press button
//check value of the button
//check value equal to correctanswer
//if true add 1 point
//else 0 point

function checkAnswer(id) {
  const userAnswer = document.getElementById(`btn${id}`).textContent;
  if (userAnswer === quizCollection[0].correct_answer) {
    totalPoints += 1;
  }

  console.log(totalPoints);
}

//get the second question data
//display the data

//if index = 9 , come out the total point

function updateQuestion() {
  currentQuizIndex++;
  if (currentQuizIndex === 10) {
    alert(`Congratulations your total score is ${totalPoints}`);
    return;
  }
  console.log("currentQuizIndex", currentQuizIndex);
  displayQuestion();
}

//display the first question + answer
//click on the answer
//use if answer correct , add 1 point
//else if incorrect, add 0 point
//else alert need to click on the answer
//click next to the next page
//add the total point from the correct answer
//display the total point
