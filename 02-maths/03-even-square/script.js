/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {
        const maxNumber = 21;
        let i = 1;
        let squareNumbers = [];

        while ( i <= maxNumber) {
            let x = Math.pow(i,2);
            squareNumbers += x+" ";
            i++;
        };

        alert("The square numbers are: \n"+squareNumbers)

    });

})();
