export class Puzzle {

    constructor(
        width = 500,
        height = 500,
        imgUrl = "./img/lol.jpg",
        rows = 3,
        cols = 3,
        dom = document.getElementById("puzzle")
    ) {
        this.width = width;
        this.height = height;
        this.imgUrl = imgUrl;
        this.rows = rows;
        this.cols = cols;
        this.dom = dom;
        this.singleWidth = this.width / this.cols;
        this.singleHeight = this.width / this.rows;
        this.size = rows * cols;
    }
}