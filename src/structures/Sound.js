const path = require("path");

class Sound {
  constructor(soundPath) {
    this.path = soundPath;
    this.name = path.basename(this.path);
  }
}

module.exports = Sound;
