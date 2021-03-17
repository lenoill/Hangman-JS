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
    const randomPkmn = Math.floor(Math.random() * 387);
    const content = document.querySelector(".dashes");
    this.data.results[randomPkmn].name.split("").map((item, index) => {
      content.innerHTML += `<div class="dash nbr${index}">_</div>`;
    });
    //cheat
    console.log(this.data.results[randomPkmn].name);
    this.word = this.data.results[randomPkmn].name;
    return this.data.results[randomPkmn].name;
  }
}
