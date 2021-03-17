import {EndGame} from "./EndGame.js"
const endgame = new EndGame();
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
              endgame.isWin("WIN");
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
              endgame.isWin("LOST");
          }
        }
      });
    });
  }
  
  
}
