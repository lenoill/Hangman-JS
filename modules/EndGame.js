import { app } from "./../main.js";
import { result, endScreen, keyboard, hangman, dash } from "./config.js";
let word = "";

export class EndGame {
    constructor(){
    }
    getWord(value){
        word = value;
        return value;
    }
    isWin(winLose) {
        if (winLose === "WIN") {
          result.textContent = "You won!";
          endScreen.style.display = "initial";
          this.retry();
        } else if (winLose === "LOST") {
          result.textContent = `The answer was ${word.toUpperCase()}`;
          endScreen.style.display = "initial";
          this.retry();
        }
        
        
      }
      retry(){
        document.querySelector(".retry").addEventListener("click", () => {
            location.reload();
          });
      }
}
/*après deux retry, le jeu génère deux noms de pokémons diférrents ajoute autant de dash que dans les deux noms */