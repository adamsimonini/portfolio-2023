export class PlaneClass {
  constructor({ name = "plane", direction = "left", speed = 10, size = 1 }) {
    this.name = name;
    this.direction = direction;
    this.speed = speed;
    this.size = size;
  }
}
