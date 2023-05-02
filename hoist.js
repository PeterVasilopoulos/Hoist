// 1
console.log(hello);                                   
var hello = 'world';                                 
// console.log(hello) // logs undefined
// hello = 'world'

// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// needle = 'haystack'
// needle = 'magnet' 
// console.log(needle) // logs 'magnet'

// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// brendan = 'super cool'
// brendan = 'only okay'
// console.log(brendan) // logs 'super cool'

// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// food = 'chicken'
//console.log(food) // logs 'chicken'
// eat() 
// food = 'half-chicken'
// console.log(food) // logs 'half-chicken'
// food = 'gone'

// 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// mean()
// food = 'chicken' 
// console.log(food) // logs 'chicken
// food = 'fish'
// console.log(food) // logs 'fish'
// console.log(food) // error

// 6 
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// console.log(genre) // logs undefined
// genre = 'disco'
// rewind()
// genre = 'rock'
// console.log(genre) // logs 'rock'
// genre = 'r&b'
// console.log(genre) // logs 'r&b'
// console.log(genre) // logs 'disco'

// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// dojo = 'san jose'
// console.log(dojo) // logs 'san jose'
// learn()
// dojo = 'seattle'
// console.log(dojo) // logs 'seattle'
// dojo = 'burbank'
// console.log(dojo) // logs 'burbank'
// console.log(dojo) // logs 'san jose'

// 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// console.log(makeDojo("Chicago", 65)) // 
    // dojo = {}
    // dojo.name = 'Chicago'
    // dojo.students = 65
    // dojo.hiring = true
    // logs {name: 'Chicago', students: 65, hiring: true}
// console.log(makeDojo("Berkeley", 0)) // 
    // dojo = {}
    // dojo.name = 'Berkeley'
    // error