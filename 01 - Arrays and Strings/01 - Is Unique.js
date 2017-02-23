/**
 * Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 *
 * Assumptions:
 * - lowercase and uppercase letters are different characters
 */

(function () {
    "use strict";

    // Check str for uniqueness by comparing each character with every following character
    function isUnique(str) {
        for( var i = 0, n = str.length; i < n; i++ ) {
            for( var j = i + 1; j < n; j++ ) {
                if( str.charAt(i) === str.charAt(j) ) {
                    return false;
                }
            }
        }

        return true;
    }

    // Check str for uniqueness by adding each character to a set.
    function isUniqueSet(str) {
        var set = new Set();

        for( var i = 0; i < str.length; i++ ) {
            var char = str.charAt(i);

            if( set.has(char) ) {
                return false;
            }

            set.add(char)
        }

        return true;
    }

    (function main() {
        var tests = [
            '',     // true
            'a',    // true
            'aa',   // false
            'aab',  // false
            'abb',  // false
            'abA',  // true
            'abcdefghijklmnopqrstuvwxyz', // true
        ];

        for( var i = 0; i < tests.length; i++ ) {
            console.log( isUnique(tests[i]) );
        }

        console.log('');

        for( var i = 0; i < tests.length; i++ ) {
            console.log( isUniqueSet(tests[i]) );
        }
    })();

})();
