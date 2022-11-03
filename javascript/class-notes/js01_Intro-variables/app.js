var mynumber=5;
console.log(mynumber);

const student = {
firstName:"Erhan",
number:"F1306",
};

const otherStudent =student;
console.log(otherStudent);

otherStudent["number"]="f1453";
otherStudent.firstName="faruk";

console.log(student)