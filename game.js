document.getElementById('mouse').addEventListener('mouseover', addScore);

let score = 0;
let time = 10;
const needed = 10;

function endGame(){
   if(score>=10) {
      document.querySelector('.board').innerHTML = "You won! 🏆";
   } else if (time<=0){
		document.querySelector('.board').innerHTML = "You lost 😈";
   }
   document.getElementById('buttons').style.visibility= 'unset';
}

function addScore(){
   score++;
   document.getElementById('score').innerHTML = 'Score: <b>' + score + '/' + needed + '  </b>';
   randNum =  Math.round(Math.random()*480);
   randNum2 =  Math.round(Math.random()*480);
   document.getElementById('mouse').style.marginTop = randNum + 'px';
   document.getElementById('mouse').style.marginLeft = randNum2 + 'px';
   if(score>=10){
      endGame();
   }
}

function timer(){
  time--;
  document.getElementById("time").innerHTML= time + " secs";
  if (time <= 0)  {
      clearInterval(timeOut);
      endGame();
   }
}
const timeOut = setInterval(timer,1000);

function createButtons(){
   if (endGame()) {
   document.getElementById('#buttons').style.visibility='unset';
   }
}
