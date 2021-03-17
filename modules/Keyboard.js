export class Keyboard{
    constructor(){}

    generate(){
        
        this.letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        this.letters.forEach((item) => {
            const btnLetter = document.createElement('button');
            btnLetter.classList = `btnLetter ${item}`;
            btnLetter.innerText = item.toUpperCase();
            document.querySelector(".keyboard").appendChild(btnLetter);
        });
    }
}