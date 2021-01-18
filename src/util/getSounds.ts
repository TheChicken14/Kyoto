import fs from "fs";
import path from "path"

import Sound from "../structures/Sound"

export default function(): Sound[] {
    const files = fs.readdirSync(path.join(__dirname, "..", "sounds"))

    return files.map(f => new Sound(path.join(__dirname, "..", "sounds", f)));
}