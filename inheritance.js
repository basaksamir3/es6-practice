class Parents{
    constructor(){
        this.fatherName = "ami tomader baba";
    }
}

class Child extends Parents{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
       return this.name +" "+ this.fatherName;
    }
}
const baby1 = new Child("Tom");
console.log(baby1.getFullName());

const baby2 = new Child("baby2");
console.log(baby2);

