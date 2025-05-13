
// switch statement: explain

// general syntax of switch statement
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month");
}

// when default case is executed?



// switch statement with multiple cases
const day = 5;
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Weekday");
        break;
    case 6:
    case 7:
        console.log("Weekend");
        break;
    default:
        console.log("Invalid day");
}


// switch statement with fall-through
const grade = "B";
switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
    case "C":
        console.log("Good");
        break;
    case "D":
        console.log("Average");
        break;
    case "F":
        console.log("Fail");
        break;
    default:
        console.log("Invalid grade");
}


// switch statement with expression
const x = 10;
const y = 20;
const operator = "+";
switch (operator) {
    case "+":
        console.log(x + y);
        break;
    case "-":
        console.log(x - y);
        break;
    case "*":
        console.log(x * y);
        break;
    case "/":
        console.log(x / y);
        break;
    default:
        console.log("Invalid operator");
}


