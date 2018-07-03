import Bubble from './panel';

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
}
