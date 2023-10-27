class user {
  name;

  constructor(name) {
    this.name = name;
  }

  read(txt) {
    return `${this.name} is reading ${txt}`;
  }
}

module.exports = user;
