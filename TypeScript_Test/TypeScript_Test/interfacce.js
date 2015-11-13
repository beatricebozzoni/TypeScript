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
function showAlert(message, description) {
    if (message === void 0) { message = "Hello"; }
    if (description != null) {
        alert(message + ": " + description);
    }
    else {
        alert(message);
    }
}
window.onload = function () {
    var el = document.getElementById('prova');
    _this.fullname = createStudent(new Student("Mario", "Rossi", el));
    showAlert(_this.message, _this.description = "Pippo!");
};
//# sourceMappingURL=interfacce.js.map