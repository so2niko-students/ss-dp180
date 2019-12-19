class Square {
    constructor(color = 'red') {
        this.main = document.querySelector('#main');
        this.counter = 0;
        this.class = `${color}t${Date.now()}r${Math.floor(Math.random() * 1000000)}`;
        this.createHTML(color);
    }

    createHTML(color) {
        this.main.innerHTML += `<div class="square ${this.class}" style="background-color:${color}"></div>`;
        this.square = this.main.querySelector(`.${this.class}`);
        this.square.addEventListener('click', this.clickSquare.bind(this));
    }

    clickSquare() {
        this.counter += 1;
        this.square.innerText = this.counter;
    }
}

const squares = [new Square('green')];

document.querySelector('.btn__add-square').addEventListener('click', () => {
    squares.push(new Square());
    console.clear();
    console.log(squares);
});