export default function getQuestions(req, res) {
  // Import questions data
  const questions = require("../data/questions.json"); // Update the path as needed

  // Respond with the questions in JSON format
  res.status(200).json(questions);

  console.log(questions);
}
