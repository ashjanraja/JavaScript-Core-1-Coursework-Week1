var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function creatGreeting(greet) {
    return `hello ${greet}`;
}
function greeting(name){
    let massage = creatGreeting(name).toUpperCase();
    return massage;
}
console.log(greeting(mentor1));
console.log(greeting(mentor2));
console.log(greeting(mentor3));
console.log(greeting(mentor4));
console.log(greeting(mentor5)); 
