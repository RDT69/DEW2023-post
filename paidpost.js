const Client = require('./client');
const Post = require('./post');

class Paidpost extends Post {
  price;

  constructor(name, price) {
    super(name);
    this.price = price;
  }

  attach(client) {
    if (client instanceof Client) super.attach(client);
  }

  detach(client) {
    super.detach(client);
  }
}

module.exports = Paidpost;
