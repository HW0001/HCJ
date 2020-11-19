function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.eat = function () {
  console.log("吃饭了");
};

function Student(name, age, school) {
  Person.apply(this, [name, age]);
  this.school = school;
}

function Temp() {}
Temp.prototype = Person.prototype;

Student.prototype = new Temp();

Student.prototype.study = function () {
  console.log("学习了");
};

const student = new Student("小明", 18, "家里蹲");

student.eat();
