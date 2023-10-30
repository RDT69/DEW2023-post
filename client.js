const User = require('./user');

class Client extends User {
  billing = 0;

  constructor(name) {
    super(name);
    this.billing = 0;
  }

  notify(post) {
    if (post.price > 0) {
      this.billing += post.price;
      this.billing = Math.round(this.billing * 100) / 100;
    }
    return this.read(post.summary);
  }
}
module.exports = Client;
