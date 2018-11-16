function Person(fname, lname, age){

    this.firstName = fname;
    this.lastName = lname;
    this.age = age;

}
Person.prototype.color = "Black";
Person.prototype.name = function(){
    return this.firstName + " " + this.lastName;
} 

var father = new Person('Vikash', 'Shaw', 22);

console.log(father.age);
console.log(father.name());
console.log(father.color);
