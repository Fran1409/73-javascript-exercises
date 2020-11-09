/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    function getInformation() {
        var age = prompt("What's your age?");
        var gender = prompt("What's your gender?");
        var town = prompt("In what town do you live?");

        var check = confirm("Is this information correct? \nYour age is "+age+", your gender is "+gender+" and you live in the town "+town+".");

        if (check == false) {
            alert("Our information is incorrect, let's do it again.");
            getInformation();
        };

    };
    
    getInformation()

})();
