//Use the Fetch API to get quiz questions
//show the question and answer

async function getQuestion() {
  const url =
    "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple";
  const result = await fetch(`${url}`);
  const data = await result.json();

  console.log(data.results);
}

getQuestion();
