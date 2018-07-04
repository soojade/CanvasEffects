export default class Canvas {
  constructor (width, height, bgColor) {
    this.canvas = document.createElement('canvas');
    this.canvas.innerText =
      '您的浏览器版本太低，请使用最新版本的 chrome、Firefox 或 edge 浏览器';
    this.canvas.style.display = 'block';
    this.canvas.style.margin = '0 auto';
    this.canvas.style.background = bgColor;
    this.canvas.width = width;
    this.canvas.height = height;
    document.body.appendChild(this.canvas);
    this.canvas.context = this.canvas.getContext('2d');
  }

  /**
   * 传入canvas 和 x y 相对页面的坐标点转换成相对 canvas的坐标点
   * @param {HTMLCanvasElement} canvas
   * @param {int} x
   * @param {int} y
   */
  static windowToCanvas (canvas, x, y) {
    let box = canvas.getBoundingClientRect();
    return {
      x: x - box.left * (canvas.width / box.width),
      y: y - box.top * (canvas.height / box.height)
    };
  }
}
