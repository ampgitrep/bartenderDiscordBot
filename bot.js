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
  //result returns 
  
  
  let result = deck1.deal();
  let tmp = result;
  let hist = tmp.slice(0,1);
  let smoke = "!smoke";
  let fire = "!fire";
  let color;
  let choice = userChoice;
  let number; 

  if(tmp.includes("Spades") === true || tmp.includes("Clubs") === true) {
    color = smoke;
  } else {
    color = fire;
  }

  if(isNaN(hist) === false){
    number = parseInt(hist);
  }

  
  if(hist === "J"){
    number = 11;
  }else if(hist === "Q"){
    number = 12;
  }else if(hist === "K"){
    number = 13;
  }else if(hist === "A"){
    number = 14;
  }else{
    hist = hist;
  }

  
  
  
  history.push(number);
  let lastNumber = history[history.length -2];
  switch(choice){
    case "!smoke":
      if(color === choice){
        counter++;
        let message =  tmp + " Correct! Drinks: "  +  counter + " " + ". ";
        return message;
      }else{
        let message = tmp + " " + "Wrong! Take "  + counter + " drink(s). ";
        return message;
      }
    case "!fire":
      if(color === choice){
        counter++;
        let message =   tmp + " Correct! Drinks: "  +  counter + " " + ". ";
        return message;
      }else{
        let message =  tmp + " " + "Wrong! Take "  + counter + " drink(s). ";
        return message;
      }
    case "!higher":
      if(number > lastNumber){
        counter++;
        let message =    tmp + " Correct! Drinks: "  +  counter + " " + ". ";
        return message;
      }else{
        let message =  tmp + " " + "Wrong! Take "  + counter + " drink(s). ";
        return message;
      }
    case "!lower":
      if(number < lastNumber){
        counter++;
        let message =   tmp + " Correct! Drinks: "  +  counter + " " + ". ";
        return message;
      }else{
        let message =  tmp + " " + "Wrong! Take "  + counter + " drink(s). ";
        return message;
      }
    default:
      let message =  "Something went wrong. Please enter another command. ";
      return message;
      }
    }

const deck1 = new Deck();
const history = [];
let counter = 0;
client.on('message', msg => {
  if(msg.content === '!smoke or fire') {
    let response = shuffleCards();
    msg.reply('you ready??');
    msg.reply(response);
  }
    if(msg.content === '!smoke') {
      let userChoice = msg.content;
      let result = drawCard(userChoice,history,counter);
      msg.reply(result);
      msg.reply("Smoke or fire, low or higher?");  
    }
    if(msg.content === '!fire') {
      let userChoice = msg.content;
      let result = drawCard(userChoice,history,counter);
      msg.reply(result);
      msg.reply("Smoke or fire, lower or higher?");
    }
    if(msg.content === '!higher') {
      let userChoice = msg.content;
      let result = drawCard(userChoice,history,counter);
      msg.reply(result);
      msg.reply("Smoke or fire, lower or higher?");
    }
    if(msg.content === '!lower') {
      let userChoice = msg.content;
      let result = drawCard(userChoice,history,counter);
      msg.reply(result);
      msg.reply("Smoke or fire, lower or higher?");
    }
});


