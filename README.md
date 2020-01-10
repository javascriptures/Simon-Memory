# Simon Memory Game by Jordan Taylor

![Screen Shot 2020-01-09 at 3 28 00 PM](https://user-images.githubusercontent.com/57779829/72113228-b1865000-32f4-11ea-9edc-75799fcafd4e.png)

Welcome to the Simon Memory Game! Designed after the classic, handheld game Simon, this game tests your ability to replicate a pattern of colors in the correct order.

To play this game, first open https://javascriptures.github.io/Simon-Memory/ in your browser. Your screen should display the image above. To begin the game, press the "START" button. A random color button will light up, prompting the user (you) to repeat this single sequence back. If the user misses the sequence, they can play it back by pressing "PLAY SEQUENCE AGAIN" at any point. Once the sequence is repeated, another sequence will light up, building on the previous. The game will keep track of your score as you progress through the game. For demonstration purposes, the score caps off at 5 points, at which point you will be treated with a little winner's surprise!

Now for the nerd stuff...

## Game Features

I utilized a lot of CSS and Javascript effects in the making of this game. Let's explore some!

### Aesthetic Features:

#### Button "Glow"
The classic handheld "Simon" game I had as a kid had glowing buttons that would light up in a sequence. It's hard to recreate this effect on a glowing computer screen so I had to get creative with how I would create this illusion. I decided to use the box-shadow effect in CSS around the colored button divs and added space between them to closer resemble the original game.

![Screen Shot 2020-01-10 at 10 09 27 AM](https://user-images.githubusercontent.com/57779829/72175590-522a4d80-3391-11ea-8919-2169a94be73c.png)

#### Hover Effect
To give the user a sense of which button they're trying to click, I added a mouse hover effect in CSS.

![Screen Shot 2020-01-10 at 10 11 23 AM](https://user-images.githubusercontent.com/57779829/72175689-9584bc00-3391-11ea-8574-49c7cedf09a9.png)

#### Winning Effects

![Screen Shot 2020-01-10 at 10 26 19 AM](https://user-images.githubusercontent.com/57779829/72176644-aafae580-3393-11ea-9c0a-7cb5422be241.png)

I wanted the user to feel accomplished when they won the game so I added a confetti effect, a button flash, and an embedded gif.

The confetti effect was taken from an open source library (https://www.cssscript.com/confetti-falling-animation/). This was completely borrowed and is not my own code. I added a confetti.js file to the directory and called the methods confetti.start() and confetti.stop() to initiate the animation upon winning and end the animation upon game restart. 

The button flash effect was created using the methods ".fadeTo" and ".setTimeout" on the colored button divs. These were timed and coordinated to give a little flash animation upon winning.

The embedded gif was created first in HTML and then was hidden in CSS using the visibility property. In javascript I changed the visibility from "hidden" to "visible" upon winning.

#### Click Sounds

To mimic the button press feel of the original game, I added a "click" sound every time a button is pressed. This also helps users keep track of what button have been pressed, to follow the sequence better. I embedded the link in HTML and then called it in javascript when a click event is triggered.

### Game Technologies

#### Sequence Arrays

This game almost entirely relies on the use of arrays for storing user input as well as the randomized sequence created by the game. 

For the randomized computer sequence, I created a function called getRandomNumber that uses Math.floor and Math.random and then pushes the new random number into the computer sequence array. 

![Screen Shot 2020-01-10 at 10 33 43 AM](https://user-images.githubusercontent.com/57779829/72177143-ef3ab580-3394-11ea-8f0c-96bb5778a912.png)

Every time a colored button is pressed, a new number is pushed into the userInput array. I created a function called isEqual to test if the userInput array matches the computer sequence array, at which point the game will progress and a new point will be added to the score. 

#### The Simon Flash Sequence

This effect was, by far, the most difficult part of creating this game. I deployed many different types of techniques to accomplish this and landed on the ".fadeTo" and setInterval methods in the end. In my lightUp function, every element of the computer sequence array is individually triggered to give a flashing effect to the div buttons. Once the end of the array is reached, the clearInterval method is called to end the flashing sequence.

![Screen Shot 2020-01-10 at 10 34 19 AM](https://user-images.githubusercontent.com/57779829/72177095-d205e700-3394-11ea-9f29-3695ea79898f.png)


