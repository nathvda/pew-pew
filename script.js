

let canvas = document.getElementById("game");
let dx = 25;

canvas.setAttribute("width",`${window.innerWidth}px`);
canvas.setAttribute("height",`${window.innerHeight}px`);
canvas.style.border = "8px solid black";
canvas.style.background = "black";

class Bullet{
    constructor(canvas,x,y,velocity, bulletColor){
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.bulletColor = bulletColor;

        this.width = 10;
        this.height = 10;
    }

        draw(ctx){
            if (this.y < 0){
                this.y = player.y;
            }
            this.y -= this.velocity;
            ctx.fillStyle = this.bulletColor;
            ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

class Player{
    constructor(canvas, x, y, velocity, playerColor){
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.playerColor = playerColor;

        this.height = 40;
        this.width = this.height * 2; 
    }
    
    draw(ctx){
        ctx.fillStyle = "red";
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }

    shoot(){
        console.log("bullet created");
        const bullet = new Bullet(canvas, posBu,this.y, 10, "white");
        bullet.draw(ctx);
    }
}


document.addEventListener("keydown", (e) => {

    if (e.code == "ArrowRight" && (player.x + pWidth < innerWidth)){

        if (player.x + pWidth > innerWidth){

        } else {
            player.x += dx;
            posBu = player.x;
        }
    } else if (e.code == "ArrowLeft" && player.x > 0){
        
        if (player.x < 0){
        } else {
            player.x -= dx;
        }
    } else if (e.code == "Space"){
        player.shoot();
    }

})

var ctx = canvas.getContext("2d");

let x = window.innerWidth/2;
let y = window.innerHeight-80;
let pWidth;
let posBu;

const player = new Player(canvas, x, y, dx, "red");

function animateCanvas(){
   ctx.clearRect(0,0, innerWidth, innerHeight);

   requestAnimationFrame(animateCanvas);
   pWidth = player.width;
   player.draw(ctx);
}

animateCanvas();