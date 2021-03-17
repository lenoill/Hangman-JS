const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=386";
const keyboard = document.querySelector(".keyboard");
const hangman = document.querySelector(".hangman");
const dash = document.querySelectorAll(".dashes");
const endScreen = document.querySelector(".end-screen");
const result = document.querySelector(".result");
const retry = document.querySelector(".retry");

export { apiUrl, keyboard, hangman, dash,endScreen, result, retry};
