class Studentt{
    private id:number;
    private name:string;
    constructor( id:number, name:string){
        this.id = id
        this.name = name
    }
    getId():number{
        return this.id;
    }

    getName():string{
        return this.name;
    }
} 
let arrAllStudent:Studentt[] = []
class Classroom{
    students:Studentt[];
    constructor(students:Studentt[]){
        this.students = []
    }
    addStudent(student:Studentt){
        this.students.push(student)       
    }
    showStudents(){
        this.students.forEach((item) =>{
            console.log(`${item.getId()} - ${item.getName()}`)
        })
    }
    addClass(arr:Studentt[],Id:number){
        let index = arr.findIndex(item => item.getId() === Id);
        if (index !== -1) {
            this.addStudent(arr[index]);
            arr.splice(index, 1);
        }
    }
}

let allStudents: Studentt[] = [
    new Studentt(1, "Hưng"),
    new Studentt(2, "Hoa"),
    new Studentt(3, "Tiến"),
    new Studentt(4, "Dũng"),
    new Studentt(5, "Duy"),
    new Studentt(6, "Nam")
];

let class1 = new Classroom([]);
class1.addClass(allStudents,1);
class1.addClass(allStudents,2);
class1.addClass(allStudents,3);
class1.showStudents();
console.log(allStudents)
let class2 = new Classroom([]);
class2.addClass(allStudents, 4);
class2.addClass(allStudents, 5);
class2.addClass(allStudents, 6);