const Paidpost = require('./paidpost');

class Magazine extends Paidpost {
  topic;

  constructor(name, price, topic) {
    super(name, price);
    this.topic = topic;
  }

  get summary() {
    return `${super.summary} of ${this.topic}`;
  }
}
module.exports = Magazine;
