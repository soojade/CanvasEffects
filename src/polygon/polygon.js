class Point {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }
}

export default class Polygon {
  constructor (
    centerX,
    centerY,
    radius,
    sides,
    startAngle,
    strokeStyle,
    fillStyle,
    filled
  ) {
    this.x = centerX;
    this.y = centerY;
    this.radius = radius;
    this.sides = sides < 2 ? 2 : sides;
    this.startAngle = startAngle;
    this.strokeStyle = strokeStyle;
    this.fillStyle = fillStyle;
    this.filled = filled;
  }

  getPoints () {
    let points = [];
    let angle = this.startAngle || 0;

    for (let i = 0; i < this.sides; i++) {
      points.push(
        new Point(
          this.x + this.radius * Math.sin(angle),
          this.y - this.radius * Math.cos(angle)
        )
      );
      angle += (Math.PI * 2) / this.sides;
    }
    return points;
  }

  createPath (context) {
    let points = this.getPoints();
    context.beginPath();
    context.moveTo(points[0].x, points[0].y);

    for (let i = 1; i < this.sides; i++) {
      context.lineTo(points[i].x, points[i].y);
    }
    context.closePath();
  }

  stroke (context) {
    context.save();
    this.createPath(context);
    context.strokeStyle = this.strokeStyle;
    context.stroke();
    context.restore();
  }

  fill (context) {
    context.save();
    this.createPath(context);
    context.fillStyle = this.fillStyle;
    context.fill();
    context.restore();
  }
}
