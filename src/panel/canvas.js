export default class Canvas {
  constructor () {
    this.canvas = document.createElement('canvas');
    this.canvas.innerText =
      '您的浏览器版本太低，请使用最新版本的 chrome、Firefox 或 edge 浏览器';
    this.canvas.style.display = 'block';
    this.canvas.style.background = '#ccc';
    document.body.appendChild(this.canvas);
    this.context = this.canvas.getContext('2d');
    this.canvas.width = 500;
    this.canvas.height = 500;
  }
}
