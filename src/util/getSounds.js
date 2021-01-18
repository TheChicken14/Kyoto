const fs = require("fs");
const path = require("path");

const Sound = require("../structures/Sound");

/**
 * @returns {Sound[]}
 */
module.exports = function getSounds() {
  const files = fs.readdirSync(path.join(__dirname, "..", "..", "sounds"));

  return files.map(
    (f) => new Sound(path.join(__dirname, "..", "..", "sounds", f))
  );
};
