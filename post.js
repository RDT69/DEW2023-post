class Post {
  name;

  #subcribers = [];

  #number = 0;

  constructor(name) {
    this.name = name;
  }

  get summary() {
    return `${this.name} publication number ${this.#number}`;
  }

  getSubscribers() {
    return this.#subcribers.map((client) => client.name).join(',');
  }

  attach(user) {
    if (this.#subcribers.includes(user)) return null;

    return this.#subcribers.push(user);
  }

  detach(user) {
    this.#subcribers = this.#subcribers.filter((u) => u !== user);
  }

  publish() {
    this.#number += 1;
    return this.#subcribers.map((user) => user.notify(this));
  }
}
module.exports = Post;
