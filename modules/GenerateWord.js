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
    this.word = this.data.features[randomPkmn].name
    this.word = this.word.toLowerCase();
    this.word = this.word.replace('2','');
    this.word = this.word.replace('é','e');
    this.word = this.word.replace('è','e');
    this.word = this.word.replace('ê','e');
    
    const content = document.querySelector(".dashes");
    this.word.split("").map((item, index) => {
      if(item == " "){
        content.innerHTML += `<div class="dash nbr${index}"> </div>`;
      }else if(item == "-"){
        content.innerHTML += `<div class="dash nbr${index}">-</div>`;
      }
      else{
        content.innerHTML += `<div class="dash nbr${index}">_</div>`;
      }
      
    });  
    
    //cheat
    console.log(this.word);
    return [this.word, randomPkmn];
  }
}
