export class Singleton {
    constructor() {
        this.time = Date.now();
    }
    static instance = false;
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }
}