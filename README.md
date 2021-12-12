# bartenderDiscordBot
## Purpose
 - This is a fun project built to practice with node.js and javascript. This is a discord bot that will allow two players to play the game Smoke or Fire.\
 - There is plenty of other card games that can be added to this bot to play
 
 ## tools used
  - node.js to host the bot locally
  - vanilla javascript
  
  ## how it works
  - The rules are pretty simple, and can be played by any number of players:
    1. Players will pick someone to go first.
    2. The first player will type #smoke or fire
    3. The bot will draw a card and send it in the discord chat.
    4. If the player is correct, the bot will increase the "drink" count by 1, and ask the player to guess whether the next card will be "smoke or fire, lower or higher". If the player is wrong, the bot will reset the "drink" count and ask the player to "take a drink"
    5. The active player will continue to guess cards until the count reaches 3, in which case the bot will ask the user to "continue" or to "pass". If the player chooses to pass, the next player will just continue where player 1 left off.
    
