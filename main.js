let number = prompt("enter a Armstrong number");
let a = number.length;
let b = number;
let calc = 0;

while (b > 0) {
    let sum = b % 10;
    calc += sum ** a;
    b = parseInt(b / 10);
} if (number == calc) {
    document.write("Armstrong Number");
} else {
    document.write("not Armstrong Number")
}