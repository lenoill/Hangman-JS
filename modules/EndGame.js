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
        } else if (winLose === "LOST") {
          result.textContent = `The answer was ${word.toUpperCase()}`;
          endScreen.style.display = "initial";
        }
        const retry = document.querySelector(".retry");
        retry.addEventListener("click", () => {
          //need reset keyboard hangman et dash
          keyboard.innerHTML = "";
          hangman.src = "images/hangman0.gif";
          dash.forEach((item) => {
            item.innerHTML = "";
          });
          //reload the app
          app.init();
          endScreen.style.display = "none";
        });
      }
}