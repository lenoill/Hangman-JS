import { GenerateWord } from "./modules/GenerateWord.js";
import { apiUrl } from "./modules/config.js";
import { Keyboard } from "./modules/Keyboard.js";
import { Game } from "./modules/Game.js";
import { EndGame } from "./modules/EndGame.js";

export const app = {
  init() {
    const word = new GenerateWord(apiUrl);
    const click = new Game();
    const keys = new Keyboard();
    const end = new EndGame();
    
    keys.generate();

    word
      .loadJson()
      .then(() => word.selectWord())
      .then(res => end.getWord(res))
      .then((res) => click.clickOnLetter(res))
      
      .catch((err) => {
        throw Error("Doesn't work " + err);
      });
      
  },
};

app.init();

