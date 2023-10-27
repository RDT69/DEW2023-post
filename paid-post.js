const post = require('./post');

class paidpost extends post {
  price;

  constructor(name, price) {
    super(name);
    this.price = price;
  }
}

module.exports = paidpost;
