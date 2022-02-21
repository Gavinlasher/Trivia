import { TriviaController } from "./Controllers/TriviaController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  triviaController = new TriviaController();
}

window["app"] = new App();
