let name = prompt("What's your name?");
alert("Nice to meet you, " + name + "!");

let age = prompt("How old will you be turning this year?");
let year = 2026 - age;
alert("That means that you were born in " + year);

let temp = prompt("What is the current temperature in celsius?");
let temp1 = Number(temp);
let kelvin = 273.15 + temp1;
alert("Did you know " + temp1 + " degrees celsius is " + kelvin + " degrees in kelvin?");

let int1 = prompt("Give me your favorite integer value:");
let num1 = Number(int1);
let int2 = prompt("Now give me your second favorite integer value:");
let num2 = Number(int2);
alert("Let me show you all the fun things I can do with " + num1 + " and " + num2 + "!");

let sum = num1 + num2;
let diff = num1 - num2;
let prod = num1 * num2;
let div = num1 / num2;
let rem = num1 % num2;
alert(num1 + " + " + num2 + " = " + sum);
alert(num1 + " - " + num2 + " = " + diff);
alert(num1 + " * " + num2 + " = " + prod);
alert(num1 + " / " + num2 + " = " + div);
alert(num1 + " % " + num2 + " = " + rem);
alert("The max of " + num1 + " and " + num2 + " is " + Math.max(num1, num2));
alert("The min of " + num1 + " and " + num2 + " is " + Math.min(num1, num2));
if (num1 % 2 == 0){
  alert(num1 + " is an even number");
} else {
  alert(num1 + " is an odd number");
}
if (num2 % 2 == 0){
  alert(num2 + " is an even number");
} else {
  alert(num2 + " is an odd number");
}
if (num1 > num2){
  alert(num1 + " is greater than " + num2);
} else {
  alert(num2 + " is greater than " + num1);
}

let deci = prompt("Please enter a value with a decimal part:");
let deci1 = Number(deci);
alert("Let me show you what I can do with the number " + deci1 + "!");

let neg = -deci1;
alert("The negative of " + deci1 + " is " + neg);
alert("The sine of " + deci1 + " radians is " + Math.sin(deci1));
alert("The cosine of " + deci1 + " radians is " + Math.cos(deci1));
alert(deci1 + "^10 = " + Math.pow(deci1, 10));
alert("The square root of " + deci1 + " = " + Math.sqrt(deci1));
alert("Rounded " + deci1 + " = " + Math.round(deci1));
let rnd = prompt("How many decimals should I round to?");
alert(deci1 + " rounded to " + rnd + " decimals = " + deci1.toFixed(Number(rnd)));

alert("Floor of " + deci1 + " = " + Math.floor(deci1));
alert("Ceiling of " + deci1 + " = " + Math.ceil(deci1));
alert("Absolute value of " + deci1 + " = " + Math.abs(deci1));

let fav = prompt("What's your favorite number?");
let fav1 = Number(fav);
alert("Fun fact: " + fav + " squared is " + Math.pow(fav1, 2) + " and cubed is " + Math.pow(fav1, 3) + "!");
alert("Thanks for chatting with me, " + name + "! Have a great day!");


