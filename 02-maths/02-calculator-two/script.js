/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    

    const performOperation = operation => {

        let operatorone = parseFloat(document.getElementById("op-one").value);
        let operatortwo = parseFloat(document.getElementById("op-two").value);

        switch(operation) {
            case 'addition':
                let addition = operatorone + operatortwo;
                alert("The answer is "+addition)
                break;

            case 'substraction':
                let substraction = operatorone - operatortwo;
                alert("The answer is "+substraction)
                break;

            case 'multiplication':
                let multiplication = operatorone * operatortwo;
                alert("The answer is "+multiplication)
                break;

            case 'division':
                let division = operatorone / operatortwo;
                alert("The answer is "+division)
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
