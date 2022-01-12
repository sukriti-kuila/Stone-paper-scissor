
 let r = 0;
 let p = 1;
 let s = 2;
 let text = document.getElementById("para");
 let text1 = document.getElementById("para1");
 let text2 = document.getElementById("para2");
 let text3 = document.getElementById("comScore");
 let text4 = document.getElementById("youScore");
 let text5 = document.getElementById("uWinner");
 let computerUW = 0;
 let userUW = 0;

 function timedRefresh(timeoutPeriod) {
     setTimeout("location.reload(true);", timeoutPeriod);
 }

 function computerGenerate() {
     return Math.floor(Math.random() * 3);
 }

 function computerChoice(x) {
     if (x == 0)
         return "Rock";
     else if (x == 1)
         return "Paper";
     else
         return "Scissor";
 }

 function ultimateWinner(score, player) {
     if (score == 5)
         return (text5.innerHTML = "Ultimate Winner - " + player);
     else
         return (text5.innerHTML = "Ultimate Winner - TBD");
 }


 function winner(x, y) {

     if (userUW == 5 || computerUW == 5) {
         userUW = 0;
         computerUW = 0;
         text3.innerHTML = "Computer - " + computerUW;
         text4.innerHTML = "You - " + userUW;
         text5.innerHTML = "Ultimate Winner - TBD";
         // window.onload = timedRefresh(1000);

     }


     if (x == y)
         return "Draw";

     else if ((x == 0 && y == 1) || (x == 1 && y == 2) || (x == 2 && y == 0)) {
         // userUW = restart(userUW);
         userUW++;
         text4.innerHTML = "You - " + userUW;
         ultimateWinner(userUW, "you");
         console.log(userUW);
         return "You";
     }

     else if ((x == 0 && y == 2) || (x == 1 && y == 0) || (x == 2 && y == 1)) {
         // computerUW = restart(computerUW);
         computerUW++;
         text3.innerHTML = "Computer - " + computerUW;
         ultimateWinner(computerUW, "Computer");
         console.log(computerUW);
         return "Computer";
     }



 }
 // console.log(ultimateWinner());
 function btnOne() {
     let x = computerGenerate();
     let comChoice = computerChoice(x);
     let win = winner(x, 0);
     text.innerText = "Your Choice - Rock ";
     text1.innerText = "Computer Choice - " + comChoice;
     text2.innerText = "Winner of the Round - " + win;
 }

 function btnTwo() {
     let x = computerGenerate();
     let comChoice = computerChoice(x);
     text1.innerText = "Computer Choice - " + comChoice;
     text.innerText = ("Your Choice - Paper");
     let win = winner(x, 1);
     text2.innerText = "Winner of the Round - " + win;
 }

 function btnThree() {
     let x = computerGenerate();
     let comChoice = computerChoice(x);
     text1.innerText = "Computer Choice - " + comChoice;
     text.innerText = ("Your Choice - Scissor");
     let win = winner(x, 2);
     text2.innerText = "Winner of the Round - " + win;
 }