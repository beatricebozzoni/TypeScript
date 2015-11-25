var Student = (function () {
    //person : Person2;
    //Adding public varName: Type to a constructor automatically adds a typed variable into the class 
    //without having to explicitly write the code as with normal and intersect.
    //constructor(public nome: string, public cognome: string, element: HTMLElement) {
    function Student(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
        this.fullname = nome + " " + cognome;
        //this.element = element;
        //this.element.innerHTML = this.fullname;
    }
    Student.prototype.ShowName = function (student) {
        return student.fullname;
    };
    Student.prototype.createStudent = function (person) {
        return person.nome + " " + person.cognome;
        //return null;
    };
    return Student;
})();
exports.__esModule = true;
exports["default"] = Student;
//function showAlert(message: string = "Hello", description?: string): void {
//    if (description != null) {
//        alert(message + ": " + description);
//    } else {
//        alert(message);
//    }
//}
//function startClasse() {
//    var el = document.getElementById('prova');
//    this.fullname = createStudent(new Student("Mario", "Rossi", el));
//    showAlert(this.message, this.description = "Pippo!");
//}
