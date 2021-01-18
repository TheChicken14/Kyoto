import path from "path";

export default class Sound {
    constructor(soundPath: string) {
        this.path = soundPath;
        this.name = path.basename(this.path)
    }

    path: string;

    name: string;
}