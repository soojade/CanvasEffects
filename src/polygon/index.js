import Canvas from './canvas';
import Polygon from './polygon';

window.onload = () => {
  const canvas = new Canvas(500, 500, '#eee').canvas;
  const context = canvas.context;

  const colors = [
    '#69d2e7',
    '#a7dbdb',
    '#3e0e4cc',
    '#f38630',
    '#fa6900',
    '#ff4e50',
    '#f9d423'
  ]; // 设置一组比较好看的颜色

  canvas.onmousedown = e => {
    let n = Math.floor(Math.random() * 10);
    let angle = Math.floor(Math.random() * 360); // 随机角度
    let index = Math.floor(Math.random() * 7); // 随机取颜色

    let { x, y } = Canvas.windowToCanvas(canvas, e.clientX, e.clientY);
    context.clearRect(0, 0, canvas.width, canvas.height);
    let polygon = new Polygon(
      x,
      y,
      canvas.width / 5,
      n,
      angle,
      colors[index],
      colors[index],
      true
    );

    polygon.createPath(context);

    if (polygon.filled && n > 2) {
      polygon.fill(context);
    } else {
      polygon.stroke(context);
    }
  };
};
