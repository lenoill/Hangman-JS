import { app } from "./../main.js";
import { result, endScreen, keyboard, hangman, dash } from "./config.js";

export class Game {
  constructor() {
    this.count = 0;
  }
  clickOnLetter(pkmnName) {
    const buttons = document.querySelectorAll(".btnLetter");
    buttons.forEach((item) => {
      item.addEventListener("click", () => {
        //disable the clicked button
        document.querySelector(`.${item.classList[1]}`).disabled = "true";

        const pkmnsplit = pkmnName.split("");
        //if the clicked letter is correct
        const indexList = [];
        if (pkmnsplit.includes(item.classList[1])) {
          //get the place of the correct letter
          pkmnsplit.map((value, index) => {
            if (value === item.classList[1]) {
              indexList.push(index);
            }
          });
          //add de letter at the good place
          indexList.forEach((value) => {
            document.querySelector(
              `.nbr${value}`
            ).textContent = item.classList[1].toUpperCase();
          });

          //if the word is found, disabled keyboard
          let currentWord = [...document.querySelectorAll(".dash")]
            .map((item) => item.textContent)
            .join("");
          if (currentWord == pkmnName.toUpperCase()) {
            document
              .querySelectorAll(".btnLetter")
              .forEach((item) => (item.disabled = true));
            this.gameEnd("WIN");
          }
        } else {
          this.count++;
          //change image
          document.querySelector(
            ".hangman"
          ).src = `images/hangman${this.count}.gif`;
          //block the game after 7 try
          if (this.count == 7) {
            document
              .querySelectorAll(".btnLetter")
              .forEach((item) => (item.disabled = true));
            this.gameEnd("LOST");
          }
        }
      });
    });
  }
  gameEnd(winLose) {
    if (winLose === "WIN") {
      result.textContent = "You won!";
      endScreen.style.display = "initial";
      this.retry();
    } else if (winLose === "LOST") {
      result.textContent = "YOU DIED!";
      endScreen.style.display = "initial";
      this.retry();
    }
  }
  retry() {
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
