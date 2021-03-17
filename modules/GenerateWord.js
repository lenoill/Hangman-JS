export class GenerateWord {
  constructor(url) {
    this.url = url;
    this.data = null;
    this.word = "";
  }
  loadJson() {
    return new Promise((resolve, reject) => {
      fetch(this.url)
        .then((res) => res.json())
        .then((res) => {
          this.data = res;
          resolve("ok");
        })
        .catch((err) => reject("Can't acces the api", err));
    });
  }
  selectWord() {
    const randomPkmn = Math.floor(Math.random() * 386);
    // problem woth the "-" of nidoran and mime or remove 2 from porygon2
    this.word = this.data.results[randomPkmn].name.split("-")[0];
    this.word = this.word.replace('2','');
    const content = document.querySelector(".dashes");
    this.word.split("").map((item, index) => {
      content.innerHTML += `<div class="dash nbr${index}">_</div>`;
    });
    
    

    //cheat
    console.log(this.word);
    return this.word;
  }
}
