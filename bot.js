require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);

class Deck {
  constructor() {
    this.deck = [];

    const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
    const values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];


    for (let suit in suits) {
      for (let value in values) {
        this.deck.push(`${values[value]} of ${suits[suit]}`);
      }
    }
  }

  shuffle() {
    const { deck } = this;
    let m = deck.length,
      i;

    while (m) {
      i = Math.floor(Math.random() * m--);

      [deck[m], deck[i]] = [deck[i], deck[m]];
    }

    return this;
  }

  deal() {
    return this.deck.pop();
  }
}

function shuffleCards() {
  deck1.shuffle();
  let message = `smoke or fire?`;
  return message;
}

function drawCard(userChoice) {
  let result = deck1.deal();
  let tmp = result;
  let hist = tmp.slice(0,1);
  let smoke = "!smoke";
  let fire = "!fire";
  let color;
  let message;
  let choice = userChoice;
  let number = parseInt(tmp);
  
  if(tmp.includes("Spades") === true || tmp.includes("Clubs") === true) {
    color = smoke;
  } else {
    color = fire;
  }
  history.push(tmp);
  // let passFail = isSmokeOrFire(choice, color, number, hist);
  if(isNaN(number) == true){
    let number = tmp.slice(0,1);
    return tmp;
  }
  switch(choice){
    case "!smoke":
      if(color === choice){
        return "Correct! Drinks: " + tmp + " " + counter + ". ";
      }else{
        return "Wrong! Take "  + tmp + " " + counter + " drink(s). ";
      }
    case "!fire":
      if(color === choice){
        return "Correct! Drinks: "  + tmp + " " + counter + ". ";
      }else{
        return "Wrong! Take "  + tmp + " " + counter + " drink(s). ";
      }
    case "!higher":
      if(number > tmp){
        return "Correct! Drinks: "  + tmp + " " + counter + ". ";
      }else{
        return "Wrong! Take "  + tmp + " " + counter + " drink(s). ";
      }
    case "!lower":
      if(number < tmp){
        return "Correct! Drinks: "  + tmp + " " + counter + ". ";
      }else{
        return "Wrong! Take "  + tmp + " " + counter + ". ";
      }
    default:
      return "Something went wrong. Please enter another command. ";
      }

    }


// function isSmokeOrFire(choice, color, number, hist) {
//   let result2 = color;
//   let result3 = choice;
//   counter++;
//   isHigherOrLower(number, hist, choice);
//   if(result2 === result3){
//     let message = "Correct! Drinks: " + counter; 
//     return message;
//   }
//   else {
//     let message = "WRONG!! Take " + counter + " drinks.";
//     counter = 0;
//     return message;
//   }
// }
  
// function isHigherOrLower(number, hist, choice){
//   let result4 = number;
//   let result5 = choice;
//   let higher = "!higher";
//   let lower = "!lower";
//   let last = hist;
//   counter++;
//   if(counter > 0 && result5 === higher){
//     if(last > result4){
//       let message = "Correct! Drinks: " + counter;
//       return message;
//     }
//     else{
//       let message = "WRONG! Take " + counter + " drinks.";
//       return message;
//     }
//   }
// }

let history = [];
let counter = 0;
const deck1 = new Deck();
client.on('message', msg => {
  if(msg.content === '!smoke or fire') {
    let response = shuffleCards();
    msg.reply('you ready??');
    msg.reply(response);
  }
    if(msg.content === '!smoke') {
      let userChoice = msg.content;
      let result = drawCard(userChoice);
      msg.reply(result);
      msg.reply("Smoke or fire, low or higher?");  
    }
    if(msg.content === '!fire') {
      let userChoice = msg.content;
      let result = drawCard(userChoice);
      msg.reply(result);
      msg.reply("Smoke or fire, lower or higher?");
    }
    if(msg.content === '!higher') {
      let userChoice = msg.content;
      let result = drawCard(userChoice);
      msg.reply(result);
      msg.reply("Smoke or fire, lower or higher?");
    }
    if(msg.content === '!lower') {
      let userChoice = msg.content;
      let result = drawCard(userChoice);
      msg.reply(result);
      msg.reply("Smoke or fire, lower or higher?");
    }
});


