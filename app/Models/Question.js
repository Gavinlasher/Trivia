import { generateId } from "../Utils/generateId.js";

export class Questions {
  constructor(data) {
    this.difficulty = data.difficulty;
    this.name = data.name;
    this.question = data.question;
    this.correct_answer = data.correct_answer;
    this.incorrect_answers = data.incorrect_answers;
    this.id = data.id || generateId()
  }

  get Template() {
    return /*html*/ `

<div class="col-12">
<div class="bg-light text-dark">
  <h4>${this.question}</h4>
    <div class="p-3">
      ${this.Answer}
    </div>
</div>
</div>



`;
  }

  get Answer() {
    let randomAnswer = [this.correct_answer, ...this.incorrect_answers];

    const newRandom = randomAnswer.sort((a, b) => 0.5 - Math.random());
    let tempA = "";
    newRandom.forEach((a) => {
      tempA += `<button type="button" onclick="app.triviaController.guess('${a}','${this.id}')" class="btn btn-dark ms-3 text-light">${a}</button>`;
    });

    return tempA;
  }
}
