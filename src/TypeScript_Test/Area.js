var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Shape = (function () {
    function Shape(heigth, width) {
        this.heigth = heigth;
        this.width = width;
    }
    Shape.prototype.getArea = function () {
        return 0;
    };
    return Shape;
})();
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        _super.apply(this, arguments);
    }
    Rectangle.prototype.getArea = function () {
        return this.heigth * this.width;
    };
    return Rectangle;
})(Shape);
var Triangle = (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        _super.apply(this, arguments);
    }
    Triangle.prototype.getAre = function () {
        return (this.heigth * this.width) / 2;
    };
    return Triangle;
})(Shape);
function calcoloArea() {
    var rectangle = new Rectangle(10, 20);
    var stringa = "Area rettangolo larghezza (" + rectangle.heigth + "," + rectangle.width + ") = " + rectangle.getArea().toString();
    document.getElementById("classe").innerHTML = stringa;
}
//# sourceMappingURL=area.js.map