export class Singleton {
    constructor() {
        if (!Singleton.instance) {
            this.time = Date.now();
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
    getTime() {
        return this.time;
    }
    static instance = false;
}