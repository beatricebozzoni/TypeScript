class Shape {
    heigth: number;
    width: number;

    constructor(heigth: number, width: number) {
        this.heigth = heigth;
        this.width = width;
    }

    getArea() {
        return 0;
    }
}

class Rectangle extends Shape {
    getArea() {
        return this.heigth * this.width; 
    }
}

class Triangle extends Shape {
    getAre() {
        return (this.heigth * this.width) / 2;
    }
}


function calcoloArea() {
    var rectangle = new Rectangle(10, 20);
    var stringa = "Area rettangolo larghezza (" + rectangle.heigth + "," + rectangle.width + ") = " + rectangle.getArea().toString();
    document.getElementById("classe").innerHTML = stringa;
}

