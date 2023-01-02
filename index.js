import EnemyController from "./EnemyController.js";
import Player from "./Player.js";
import BulletController from "./images/BulletController.js";

let canvas = document.getElementById("game");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.border = "8px solid black";
canvas.style.background = "black";

var ctx = canvas.getContext("2d");

let x = window.innerWidth/2;
let y = window.innerHeight-80;

const playerBulletController = new BulletController(canvas, 5,"red");
const enemyBulletController = new BulletController(canvas, 4, "white");
const enemyController = new EnemyController(canvas,enemyBulletController, playerBulletController);
const player = new Player(canvas, 5, playerBulletController);

let isGameOver = false;
let didWin = false;

function game(){
   checkGameOver();
   ctx.clearRect(0, 0, innerWidth, innerHeight);
   displayGameOver();
   if (!isGameOver){
   enemyController.draw(ctx);
   player.draw(ctx);
   playerBulletController.draw(ctx);
   enemyBulletController.draw(ctx);
   }
}

function displayGameOver(){
   if (isGameOver){
      let text = didWin ? "You Win" : "Game over";
      let textOffset = didWin ? 3.5 : 5;

      ctx.fillStyle = "white";
      ctx.font = "70px Arial";
      ctx.fillText(text, canvas.width / textOffset, canvas.height/2);
   }
}

function checkGameOver(){
   if(isGameOver){
      return;
   } 

   if(enemyBulletController.collideWith(player)){
      isGameOver = true;
   }

   if(enemyController.collideWith(player)){
      isGameOver = true;
   }

   if(enemyController.enemyRows.length === 0){
      didWin = true;
      isGameOver = true;
   }
}

setInterval(game, (1000/60));

export { canvas };