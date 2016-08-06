// Problem: Given two strings, return true or false depending on if the strings are "isomorphic."
// Isomophic strings contain the same pattern for the characters but not the same characters necessarily

var isIsomorphic = function(s, t) {
    var obj1 = {};
    var obj2 = {};

    if (s.length !== t.length) {
        return false;
    }

    for (var i = 0; i < s.length; i++) {
        if (obj1[s[i]]) {
            if (obj1[s[i]] !== t[i]) {
                return false;
            }
        } else {
            obj1[s[i]] = t[i];
        }

        if (obj2[t[i]]) {
            if (obj2[t[i]] !== s[i]) {
                return false;
            }
        } else {
            obj2[t[i]] = s[i];
        }
    }
    return true;
};

// examples:
//
console.log(isIsomorphic('egg', 'boo')) //true
console.log(isIsomorphic ('abcba', 'zyxyz')) //true
console.log(isIsomorphic('aab', 'bba')) //true
console.log(isIsomorphic('aabcd', 'bbaaa')) //false
