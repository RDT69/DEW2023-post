class post {
  name;

  #number = 0;

  constructor(name) {
    this.name = name;
  }

  get sumary() {
    return `${this.name} publication number  ${this.#number}`;
  }
}
module.exports = post;
