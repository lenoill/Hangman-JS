import { app } from "./../main.js";
import { result, endScreen, keyboard, hangman, dash , imageUrl} from "./config.js";
let word = "";
let pkmnNumber = ""

export class EndGame {
    constructor(){
    }
    getWord(pkmnName, pkmnNbr){
        word = pkmnName;
        pkmnNumber = pkmnNbr;
        return pkmnName;
    }
    isWin(winLose) {
        document.querySelector('.pkmn-image').src = `${imageUrl}${pkmnNumber+1}.svg`
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