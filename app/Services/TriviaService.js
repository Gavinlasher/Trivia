import { ProxyState } from "../AppState.js";
import { Questions } from "../Models/Question.js";

export class TriviaService {
  async getQuestion() {
    const res = await axios.get(
      "https://opentdb.com/api.php?amount=50&category=15&difficulty=easy&type=multiple"
    );
    console.log(res, "this is the data coming back");

    let question = res.data.results.map((q) => new Questions(q));

    ProxyState.questions = question;
  }

  guess(guess) {
    console.log("this is the guess from the service", guess);
    if (ProxyState.questions.find((q) => q.correct_answer == guess)) {
      alert("right");
    } else {
      alert("wrong");
    }
  }
}
export const triviaService = new TriviaService();
