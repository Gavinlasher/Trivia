import { ProxyState } from "../AppState.js";
import { triviaService } from "../Services/TriviaService.js";

function _drawQuestions() {
  let temp = "";
  let questions = ProxyState.questions;
  questions.forEach((q) => (temp += q.Template));

  document.getElementById("question").innerHTML = temp;
}

export class TriviaController {
  constructor() {
    this.getQuestion();
    ProxyState.on("questions", _drawQuestions);
    console.log("great job you are connected");
  }

  async getQuestion() {
    try {
      await triviaService.getQuestion();
    } catch (error) {
      console.log(error);
    }
  }

  guess(guess) {
    console.log("hello from guess", guess);
    triviaService.guess(guess);
  }
}
