import Bubble from './bubble';

export default class Canvas {
  constructor () {
    this.canvas = document.createElement('canvas');
    this.canvas.innerText =
      '您的浏览器版本太低，请使用最新版本的 chrome、Firefox 或 edge 浏览器';
    this.canvas.style.display = 'block';
    this.canvas.style.background = '#000';
    document.body.appendChild(this.canvas);
    this.context = this.canvas.getContext('2d');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.arr = []; // 存放鼠标移动产生的气泡
    this.r = 50; // 默认气泡初始半径
    this.colors = [
      '#69d2e7',
      '#a7dbdb',
      '#3e0e4cc',
      '#f38630',
      '#fa6900',
      '#ff4e50',
      '#f9d423'
    ]; // 设置一组比较好看的颜色
    window.onresize = () => {
      // 实时根据视窗大小调整canvas大小
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    };
  }

  // resize (canvas) {
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;
  // }

  // 通过鼠标移动生成气泡
  handler () {
    this.canvas.onmousemove = e =>
      this.arr.push(new Bubble(e.offsetX, e.offsetY, this.r, this.colors));
    this.render();
  }
  render () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // 清空给定矩形内的像素(x,y,宽,高)
    this.arr.forEach((item, i) => {
      item.draw(this.context);
      if (item.r === 0) {
        // 半径变成0时，删除气泡
        this.arr.splice(i, 1);
        i--; // 由于删除了一个，索引要回拨1
      }
    });
    window.requestAnimationFrame(this.render.bind(this));
  }
}
