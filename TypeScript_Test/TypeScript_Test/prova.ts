class Student {
    fullname: string;
    element: HTMLElement;

    constructor(public nome, public cognome, element: HTMLElement) {
        this.fullname = nome + " " + cognome;
        this.element = element;
        this.element.innerHTML = this.fullname;
    }
}

interface Person {
    nome: string;
    cognome: string;
}

function createStudent(person: Person) {
    return person.nome + " " + person.cognome;
}

window.onload = () => {
    var el = document.getElementById('prova');
    this.fullname = createStudent(new Student("Mario", "Rossi", el));
};