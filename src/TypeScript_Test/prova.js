var Student = (function () {
    //Adding public varName: Type to a constructor automatically adds a typed variable into the class 
    //without having to explicitly write the code as with normal and intersect.
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
function startProva() {
    var el = document.getElementById('prova');
    this.fullname = createStudent(new Student("Mario", "Rossi", el));
    showAlert(this.message, this.description = "Pippo!");
}
//# sourceMappingURL=prova.js.map