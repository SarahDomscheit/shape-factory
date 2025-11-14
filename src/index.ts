interface ShapeModel {
  type: string;
  describe(): string;
}

class CircleShape implements ShapeModel {
  type = "circle";

  constructor(private radius: number) {}

  describe(): string {
    return `The Circle has the radius: ${this.radius}`;
  }
}

export class SquareShape implements ShapeModel {
  type = "square";

  constructor(private side: number) {}

  describe(): string {
    return `The Square has the side: ${this.side}`;
  }
}

export class ShapeFactory {
  static createShape(type: "circle" | "square", size: number): ShapeModel {
    switch (type) {
      case "circle":
        return new CircleShape(size);
      case "square":
        return new SquareShape(size);
      default:
        throw new Error(`Unknown shape type: ${type}`);
    }
  }
}

const shapes: ShapeModel[] = [
  ShapeFactory.createShape("circle", 5),
  ShapeFactory.createShape("square", 10),
];

shapes.forEach((shape) => {
  console.log(shape.describe());
});
