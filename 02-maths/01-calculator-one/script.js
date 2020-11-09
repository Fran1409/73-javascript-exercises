/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        let addition = parseFloat(document.getElementById("op-one").value) + parseFloat(document.getElementById("op-two").value);
        console.log(addition);
        alert("The answer is "+addition)
    });

    document.getElementById("substraction").addEventListener("click", function() {
        let substraction = document.getElementById("op-one").value - document.getElementById("op-two").value;
        console.log(substraction);
        alert("The answer is "+substraction)

    });

    document.getElementById("multiplication").addEventListener("click", function() {
        let multiplication = document.getElementById("op-one").value * document.getElementById("op-two").value;
        console.log(multiplication);    
        alert("The answer is "+multiplication)

    });

    document.getElementById("division").addEventListener("click", function() {
        let division = document.getElementById("op-one").value / document.getElementById("op-two").value;
        console.log(division);
        alert("The answer is "+division)

    });
})();
