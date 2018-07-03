// import Particle from './particle';

export default class Canvas {
  constructor () {
    this.canvas = document.createElement('canvas');
    this.canvas.innerText =
      '您的浏览器版本太低，请使用最新版本的 chrome、Firefox 或 edge 浏览器';
    this.canvas.style.display = 'block';
    this.canvas.style.background = '#000';
    document.body.appendChild(this.canvas);
    this.context = this.canvas.getContext('2d');
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    this.colors = [
      '#69d2e7',
      '#a7dbdb',
      '#3e0e4cc',
      '#f38630',
      '#fa6900',
      '#ff4e50',
      '#f9d423'
    ]; // 设置一组比较好看的颜色
    this.init();
    window.onresize = () => {
      // 实时根据视窗大小调整canvas大小
      this.width = this.canvas.width = window.innerWidth;
      this.height = this.canvas.height = window.innerHeight;
      this.init();
    };
  }

  // resize (canvas) {
  //   this.width = this.canvas.width = window.innerWidth;
  // this.height = this.canvas.height = window.innerHeight;
  // }

  // handler () {
  //   window.onload = () => {
  //     this.arr.push(new Particle(this.x, this.y, this.color));
  //   };
  //   this.canvas.onmousemove = e => this.render();
  // }

  init () {
    let count = 3;
    let arr = [];
    for (let i = 0; i < count; i++) {
      arr[i] = {
        x: Math.floor(Math.random() * this.width),
        y: Math.floor(Math.random() * this.height),
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        moveX: Math.random() * 2 - 1, // 随机移动方向
        moveY: Math.random() * 2 - 1
      };
    }
    this.context.clearRect(0, 0, this.width, this.height); // 清空给定矩形内的像素(x,y,宽,高)
    arr.forEach((item, index) => {
      item.x += item.moveX;
      item.y += item.moveY;
      item.moveX *= item.x > this.width || item.x < 0 ? -1 : 1; // 碰到边界反弹
      item.moveY *= item.y > this.height || item.y < 0 ? -1 : 1;

      // this.context.fillStyle = item.color;
      // this.context.fillRect(item.x, item.y, 3, 3);
      this.draw(this.context, item.x, item.y, item.color, 5, 5);
    });

    window.requestAnimationFrame(this.init);
  }

  // 绘制粒子
  draw (context, x, y, color, width = 1, height = 1) {
    context.save();
    context.fillStyle = color;
    context.beginPath();
    context.fillRect(x, y, width, height);
    context.closePath();
    context.fill();
    context.restore();
  }

  // 修改x y 坐标及颜色
  change (x, y, mX, mY) {
    x += mX; // x轴随机偏移
    y += mY; // x轴随机偏移
    mX *= x > window.innerWidth || x < 0 ? -1 : 1;
    mY *= y > window.innerWidth || y < 0 ? -1 : 1;
    return [x, y];
  }
}
