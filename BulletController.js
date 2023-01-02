import Bullet from "./Bullet.js";

export default class BulletController {
  bullets = [];
  timeTilleNextBulletAllowed = 0;

  constructor(canvas, maxBullet, bulletColor) {
    this.canvas = canvas;
    this.maxBullet = maxBullet;
    this.bulletColor = bulletColor;
  }

  draw(ctx) {
    this.bullets = this.bullets.filter(
      (bullet) => bullet.y + bullet.width > 0 && bullet.y <= this.canvas.height
    );

    this.bullets.forEach((bullet) => bullet.draw(ctx));
    if (this.timeTilleNextBulletAllowed > 0) {
      this.timeTilleNextBulletAllowed--;
    }
  }

  collideWith(sprite) {
    const bulletThatHitSpriteIndex = this.bullets.findIndex((bullet) =>
      bullet.collideWith(sprite)
    );
    if (bulletThatHitSpriteIndex >= 0) {
      this.bullets.splice(bulletThatHitSpriteIndex, 1);
      return true;
    }
    return false;
  }

  shoot(x, y, velocity, timeTilleNextBulletAllowed = 0) {
    if (
      this.timeTilleNextBulletAllowed <= 0 &&
      this.bullets.length < this.maxBullet
    ) {
      const bullet = new Bullet(this.canvas, x, y, velocity, this.bulletColor);
      this.bullets.push(bullet);
      this.timeTilleNextBulletAllowed = timeTilleNextBulletAllowed;
    }
  }
}
