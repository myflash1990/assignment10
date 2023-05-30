class Main {
  constructor() {
    this.color = "";
  }
  colorChoice(color) {
    this.color = color;
  }
}
class Circle extends Main {
  render() {
    return `<circle cx="200" cy="190" r="160" fill="${this.color}" />;`;
  }
}
class Square extends Main {
  render() {
    return `<rect width="100%" height="100%" fill="${this.color}"/>`;
  }
}
class Triangle extends Main {
  render() {
    return `<polygon points="180, 18 244, 182 56,182" fill="${this.color}"/>;`;
  }
}

module.exports = { Circle, Square, Triangle };
