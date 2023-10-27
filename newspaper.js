const paidpost = require('./paid-post');

class newspaper extends paidpost {
  district;

  constructor(name, price, district) {
    super(name, price);
    this.district = district;
  }

  get sumary() {
    return `${super.sumary}  of ${this.district}`;
  }
}
module.exports = newspaper;
