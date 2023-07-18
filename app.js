console.log("personalinformation")


class Person{
    constructor  (name ,age,gender){
        this.name= name;
        this.age=age;
        this.gender=gender
    }   
    displayInformation(){
        console.log(` Name: ${this.name}
        Age: ${this.age}
        Gender: ${this.gender}`);
        
    }
}

class Student extends Person{
    constructor(name,age,gender, student_id){
    super(name,age,gender);
    this.student_id= student_id;
    }
   displayInformation(){
    super.displayInformation();
    console.log(`Student ID: ${this.student_id}`);

   }}

   
class Teacher extends Person{
    constructor(name,age,gender,salary){
        super(name,age,gender);
        this.salary=salary;
    }
    
    displayInformation(){
        super.displayInformation();
        console.log(`Salary: ${this.salary}`);
    }
}
        


const person1 = new Person("jamshed", 18,"male");
person1.displayInformation();
// console.log("student")
const student1 = new Student("sana",17 ,"female",21278);
student1.displayInformation();
// console.log("teacher")
const teacher1= new Teacher("Daniel",22,"male", 80000);
teacher1.displayInformation();



class Reactangle{
    constructor(width,height){
    this.width=width;
    this.height=height;
    }
   calculateArea(){
    return this.width*this.height;
   }
}
const rectangle = new Reactangle(10,23);
const area = rectangle.calculateArea();
console.log(`Area of the reactangle: ${area}`);

class Circle{
    constructor(radius){
        this.radius=radius;
    }
    calculateArea(){
        return Math.PI * Math.pow(this.radius, 2)
    }
}
const circle = new Circle(34);
const area2 = circle.calculateArea();
console.log(`Area of the circle: ${area2}`);

class Car{
    constructor(make,model,year){
        this.make=make;
        this.model=model;
        this.year=year;
    }
       displayInformation(){
       console.log (`Car information:
        Make: ${this.make}
        Model: ${this.model}
        Year: ${this.year}`);
        
    }
}

const car1 = new Car("Toyota","Camry" ,2020);
car1.displayInformation();
 
class Animal{
    constructor(species){
        this.species=species;
    }
    displayInformation(){
        console.log(`Animal information:
        Species: ${this.species}`);
    }
}
class Dog extends Animal{
    constructor(species,breed){
        super(species)
        this.breed=breed;
    }

     

}
const animal1 = new Animal("wolly mamooth");
animal1.displayInformation();
const dog1 = new Dog ("Molossus","talbot");
dog1.displayInformation();
            
  class BankAccount{
    get accNumber(){
        return this.accountNumber;
    }
    set accNumber(num){
        this.accountNumber = num;
    }
    get bal(){
        return this.balance;
    }
    set bal(num){
        this.balance = num;
    }
    deposit(amount){
        this.balance += amount;
        console.log(this.balance);
    }
    withdraw(amount){
        this.balance -= amount;
        console.log(this.balance);
    }
}

const account = new BankAccount();
account.bal=5600;
account.accNumber = "00001-bac-00010";
console.log(account.bal);
account.deposit(5000);
account.withdraw(3050);

class Employee{
    constructor(name,salary,hire_date){
        this.name=name;
        this.salary=salary;
        this.hire_date=hire_date;
    }
    displayInformation(){
        console.log(`Employee information:
        name = ${this.name}
        salary = ${this.salary}
         hiredate= ${this.hire_date}`)
    }

}
const Employeeinformation = new Employee('Sir ahdad','400000',1970) 
Employeeinformation.displayInformation();
