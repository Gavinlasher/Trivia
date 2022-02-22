import { ProxyState } from "../AppState.js";
import { Questions } from "../Models/Question.js";
import { Pop } from "../Utils/Pop.js";

export class TriviaService {
  async getQuestion() {
    const res = await axios.get(
      "https://opentdb.com/api.php?amount=50&category=15&difficulty=easy&type=multiple"
    );
    console.log(res, "this is the data coming back");

    let question = res.data.results.map((q) => new Questions(q));

    ProxyState.questions = question;
  }

  guess(guess,id) {
    console.log("this is the guess from the service", guess);
   let currentQuestion = ProxyState.questions.find(q => q.id == id)

   
   console.log(currentQuestion);
  if(currentQuestion.correct_answer == guess) {
      Pop.toast('Correct')
      
    } else {
     Pop.toast('Wrong')
    }
  }
}
export const triviaService = new TriviaService();
