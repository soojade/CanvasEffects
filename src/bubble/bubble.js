export default class Bubble {
  constructor (x, y, r, colors) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = colors[Math.floor(Math.random() * colors.length)]; // 随机获取颜色
  }

  // 更新x y 坐标及半径
  update () {
    this.x += (Math.random() - 0.5) * 5; // x轴随机偏移
    this.y += (Math.random() - 0.5) * 5; // x轴随机偏移
    this.r += -Math.random() - 1; // 半径随机变化
    if (this.r < 0) {
      this.r = 0;
    }
  }

  /**
   *  绘制圆形
   * @param {Canvas context} context canvas 2d 上下文
   */
  draw (context) {
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(this.x, this.y, this.r, 0, Math.PI * 2, false); // 绘制圆弧(x,y,半径,起始角度,结束角度,false顺时针)
    context.globalCompositeOperation = 'lighter'; // 设置或返回如何将一个源（新的）图像绘制到目标（已有）的图像上
    context.fill();
    this.update();
  }
}
