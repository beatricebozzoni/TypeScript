export default class Student {
    fullname: string;
    element: HTMLElement;
    //person : Person2;

    //Adding public varName: Type to a constructor automatically adds a typed variable into the class 
    //without having to explicitly write the code as with normal and intersect.
    //constructor(public nome: string, public cognome: string, element: HTMLElement) {
    constructor(public nome: string, public cognome: string) { 
        this.fullname = nome + " " + cognome;
        //this.element = element;
        //this.element.innerHTML = this.fullname;
    }

    ShowName(student : Student) : String{
    	return student.fullname;
    }

	createStudent(person : Person2) : String{
		return person.nome + " " + person.cognome;
		//return null;
    }
}

export interface Person2 {
    nome: string;
    cognome: string;
}

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


