
let number1 = 0 
let number2 = 1
let number3

for ( var i = 1; i <= 20; i++ ) {
    console.log( number1 )
    number3 = number1 + number2
    number1 = number2
    number2 = number3
}