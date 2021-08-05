//can set an empty string or enter your name to variable userName
let userName = '';
//ternanry expression that decides what to do if a user enters a name or not
userName ? console.log(`Hello ${userName}!`) : console.log("Hello!");
let userQuestion = 'Will I fly like Superman one day?';
console.log(`${userName} asked: ${userQuestion}`);
/*if used empty string, you can write console statement as: console.log(`The user asked: ${userQuestion}`);
*/
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
//control flow using Switch case, you can use if else as well
switch(randomNumber){
  case 0:
eightBall = 'It is certain';
break; 
case 1:
eightBall ='It is decidedly so';
break;  
case 2:
eightBall ='Reply hazy try again';
break; 
case 3:
eightBall ='Cannot predict now';
break; 
case 4:
eightBall ='Do not count on it';
break;
case 5: 
eightBall ='My sources say no';
break; 
case 6:
eightBall ='Outlook not so good';
break; 
case 7:
eightBall ='Signs point to yes';
break; 
}
console.log(eightBall);
//Yeey made a magic eight ball. 