let age=14;

if (age>=21){
    console.log("You can enter the bar.");
    //age: 34
} else if (age>=18){
    console.log("You can enter the bar, but you can't drink.");
    //age: 19
} else {
    console.log("You can't enter the bar.");
    //age: 3
}
console.log();

const message = age>=21 ? "You can enter the bar." : "You can't enter the bar.";
console.log(message);
console.log();

const message2 =  age>=21 ? "You can enter the bar." : (age>=18) ? "You can enter the bar, but you can't drink." : "You can't enter the bar.";
console.log(message2);