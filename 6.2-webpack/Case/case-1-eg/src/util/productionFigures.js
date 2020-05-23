import isPrime from "./isPrime";

export default class productionFigures {

    constructor(duration = 500) {

        this.duration = duration;
        this.timer = null;
        this.number = 1;
        this.numberIsPrime = null;
    }

    start() {

        if (this.timer) return;

        this.timer = setInterval(() => {

            this.numberIsPrime && this.numberIsPrime(this.number, isPrime(this.number));

            this.number++;

        }, this.duration);
    }

    stop() {

        clearInterval(this.timer);

        this.timer = null;
    }
};