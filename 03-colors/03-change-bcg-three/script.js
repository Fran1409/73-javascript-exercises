/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {
        function getColorCode() {
            var makeColorCode = '0123456789ABCDEF';
            var code = '#';
            for (var count = 0; count < 6; count++) {
                code =code+ makeColorCode[Math.floor(Math.random() * 16)];
            }
            return code;
        };
        
        document.body.style.backgroundColor = getColorCode();

    });


    

})();
