export default class Bullet{
    constructor(canvas, x, y, velocity, bulletColor){
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.bulletColor = bulletColor;

        this.width = 10;
        this.height = 20;
    }

        draw(ctx){

            for (let elem in bullets){
            if (this.y < 0){
                this.y = player.y;
            } else {
            this.y -= this.velocity;
            }
        }
            ctx.fillStyle = this.bulletColor;
            ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
