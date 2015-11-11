var _this = this;
var Student = (function () {
    function Student(nome, cognome, element) {
        this.nome = nome;
        this.cognome = cognome;
        this.fullname = nome + " " + cognome;
        this.element = element;
        this.element.innerHTML = this.fullname;
    }
    return Student;
})();
function createStudent(person) {
    return person.nome + " " + person.cognome;
}
window.onload = function () {
    var el = document.getElementById('prova');
    _this.fullname = createStudent(new Student("Mario", "Rossi", el));
};
//# sourceMappingURL=prova.js.map