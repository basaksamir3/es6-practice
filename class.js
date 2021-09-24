// empty class create
class Student{
  
}
const student1 = new Student();
const student2 = new Student();
console.log(student1,student2);

// class property set and access


class Students{
  constructor(name,id,village){
    this.name = name;
    this.id = id;
    this.village = village;
    this.school = "Pathrail ML high school";
  }
}

const students1 = new Students("supta",001,"pathrail");
const students2 = new Students("samir",002, "Chandy");
const students3 = new Students("Shila",003,"vapki");

console.log(students1.name, students2.name,students3.name);