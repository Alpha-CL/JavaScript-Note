export class Puzzle {

    constructor(
        width = 480,
        height = 480,
        imgUrl = "./img/warcraft.jpeg",
        rows = 3,
        cols = 3,
        dom = document.getElementById("puzzle")
    ) {
        this.width = width + 5;
        this.height = height + 5;
        this.imgUrl = imgUrl;
        this.rows = rows;
        this.cols = cols;
        this.dom = dom;

        this.singleWidth = (this.width - 5) / this.cols;
        this.singleHeight = (this.width - 5) / this.rows;
        this.size = rows * cols;

        this.mapArray = [];
    }

    init() {

        this.dom.style.width = this.width + "px";
        this.dom.style.height = this.height + "px";

        this.initMapArray();
        this.shuffle();
        this.regEvent();
    }

    initMapArray() {

        let isVisible,
            left,
            top,
            index = 0;

        for (let i = 0; i < this.rows; i++) {

            for (let j = 0; j < this.cols; j++) {

                isVisible = i < this.rows - 1 || j < this.cols - 1;

                left = Math.ceil(j * this.singleWidth);
                top = Math.floor(i * this.singleHeight);

                this.setSingleMapOptions(left, top, isVisible, index);

                index++;
            }
        }
    }

    setSingleMapOptions(left, top, isVisible, index) {

        const mapOptions = {
            left: left,
            top: top,
            correctLeft: left,
            correctTop: top
        };

        this.mapArray.push(mapOptions);

        const singleMap = this.createSingleMap(left, top, isVisible, mapOptions, index);

        this.dom.appendChild(singleMap);
    }

    createSingleMap(left, top, isVisible, mapOptions, index) {

        let singleMap = document.createElement("div"),
            styles = {
                position: "absolute",
                width: this.singleWidth + "px",
                height: this.singleHeight + "px",
                background: `url("${this.imgUrl}") -${left}px -${top}px`,
                border: "1px solid #fff",
                boxSizing: "border-box",
                cursor: "pointer",
                transition: "0.5s"
            };

        singleMap.dataset.index = index;

        for (let prop in styles) {

            singleMap.style[prop] = styles[prop];
        }

        Puzzle.singleMapShow(singleMap, isVisible, mapOptions);

        return singleMap;
    }

    shuffle() {

        for (let i = 0; i < this.mapArray.length - 1; i++) {

            const j = Puzzle.getRandom(0, this.mapArray.length - 2),
                item = this.mapArray;

            Puzzle.exchange(item[i], item[j], "left", "top");
        }

        this.resRender();
    }

    resRender() {

        const items = this.dom.children,
            props = this.mapArray;

        for (let i = 0; i < items.length; i++) {

            items[i].style.left = props[i].left + "px";
            items[i].style.top = props[i].top + "px";
        }

        this.mapArray = Array.from(this.mapArray);
    }

    regEvent() {

        this.dom.addEventListener("click", (e) => {

            let singleMaps = Array.from(this.dom.children),
                domTargetMap = e.target,
                i = domTargetMap.dataset.index,
                items = this.mapArray,
                target = items[i],
                domEmptyMap,
                emptyItem,
                j;

            for (const item of singleMaps) {

                if (item.style.display === "none") {

                    domEmptyMap = item;
                    j = domEmptyMap.dataset.index;
                    emptyItem = items[j];
                }
            }

            // if (this.isEqual(domTargetMap, domEmptyMap)) {
            //
            //     Puzzle.exchange(target, emptyItem, "left", "top");
            // }

            Puzzle.exchange(target, emptyItem, "left", "top");

            if (this.isWin()) {

                this.resRender();

                return false;
            }

            this.resRender();

        }, false)
    }

    isEqual(target, empty) {

        const condition1 = Math.abs((parseInt(target.style.left) - parseInt(empty.style.left))) === this.singleWidth,
            inRow = (parseInt(target.style.top) === parseInt(empty.style.top)),
            condition2 = Math.abs((parseInt(target.style.top) - parseInt(empty.style.top))) === this.singleHeight,
            inCol = (parseInt(target.style.left) === parseInt(empty.style.left));

        return !!(condition1 && inRow || condition2 && inCol);
    }

    isWin() {

        let result = this.mapArray.filter((value) => {

            return !(value.left === value.correctLeft && value.top === value.correctTop);
        });

        if (result.length === 0) {

            const allMap = this.dom.children;

            for (const singleMap of allMap) {

                singleMap.style.border = "none";

                if (singleMap.style.display === "none") {

                    singleMap.style.display = "block";
                }
            }

            return false;
        }

        return true;
    }

    static singleMapShow(singleMap, isVisible, mapOptions) {

        const show = {
            left: `${mapOptions.left}px`,
            top: `${mapOptions.top}px`
        };

        if (isVisible) {

            for (let prop in show) {

                singleMap.style[prop] = show[prop];
            }

        } else {

            singleMap.style.display = "none";
        }
    }

    static getRandom(min, max) {

        return Math.floor(Math.random() * (max + 1 - min) + min);
    }

    static exchange(current, target, ...props) {

        let temp;

        for (const prop of props) {

            temp = current[prop];
            current[prop] = target[prop];
            target[prop] = temp;
        }
    }
}