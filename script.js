var count;
var timer = 60;
var score=0;
var hit_val

function make_bubble()
{
 count = document.querySelector("#bpannel")
for(let i=1;i<=175;i++){
    count.innerHTML += `<div class="bubble"><h4>${Math.floor(Math.random()*10)}</h4></div>`
    
}}
 make_bubble();

 function timer_value(){
    var timerint =setInterval(function(){
      if(timer>0) { 
        timer--;
        document.querySelector("#time").textContent=timer
    }
    else{
  clearInterval(timerint)
  document.querySelector("#bpannel").innerHTML=
  `<h1 class="jsh1"> GAME OVER</h1> <h1 class="jsh1"> YOUR SCORE IS ${score}</h1> `
    }
    },1000)
 }
 timer_value();

 

 function hit_num(){
 hit_val = Math.floor(Math.random()*10)
 
document.querySelector("#hit").textContent= hit_val
 }
 hit_num()

 function score_cal(){
  score+=10
  document.querySelector("#score").textContent=score
 }
 function score_degread(){
  score -=5;
  document.querySelector("#score").textContent=score;
 }
 
 let btmp = document.querySelector("#bpannel")
 btmp.addEventListener("click",(val)=>{
  val= Number((val.target).textContent)
  console.log(val)
 if(val===hit_val){
  console.log("working")
score_cal();
make_bubble();
hit_num();
 }
 else{
 score_degread();
 }
 })
