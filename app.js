/* Input: "The quick brown fox jumped under the nearby tree. What the fox did next surprised the crowd. The silence was followed by the applause. Applause that lasted for minutes. The fox blushed under the tree."
 * Output:
 *   the: 8
 *   fox: 3
 *   under: 2
 *   tree: 2
 *   applause: 2
 *
 * Write the Java code and Unit Tests to solve this requirement
 */

function repeatedwords(input) {
    input = input.replace(/\./g, '');

    let inputArray = input.split(' ');

    let wordset = new Set();

    for(let word of inputArray) {
        wordset.add(word.toLowerCase());
    }

    wordset.forEach(word => {
        let arr = inputArray.filter(itm => itm.toLowerCase() == word);
        if(arr.length > 1) {
            console.log(word + ': ' + arr.length);
        }
    });
}


const INPUT = 'The quick brown fox jumped under the nearby tree. What the fox did next suprised the crowd. The silence was followed by the applause. Applause that lasted for minutes. The fox blushed under the tree.';


// repeatedwords(INPUT);

/* Given a string s, find the length of the longest substring without repeating characters. */

function lengthOfLongestSubstring(s) {
    let indice = [];
    let subStr = [];
    for(let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        let theRest = s.substring(i + 1);
        let fromI = s.substring(i);
        let index = theRest.indexOf(char);
        let addToStr = fromI.substr(0, index + 1)
        subStr.push(addToStr);
        indice.push(index + 1);
    }
    let max = Math.max(...indice);
    let theStr = subStr.find(s => s.length == max);
    return theStr;
};

let s = "abcabcbb";
// s = "bbbbb";
// s = "pwwkew";
// console.log('lengthOfLongestSubstring(s): ', lengthOfLongestSubstring(s));

/* Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)). */

function findMedianSortedArrays(nums1, nums2) {
    let set = new Set([...nums1, ...nums2]);
    let array = Array.from(set).sort((x, y) => { return x - y; });
    let len = array.length
    let median
    if(len % 2 == 0) {
        median = (array[len / 2 - 1] + array[len / 2]) / 2;
    } else {
        median = array[Math.floor(len / 2)];
    }
    return median.toFixed(5);
};

let nums1 = [1, 3, 8], nums2 = [2, 5, 7];

// console.log('findMedianSortedArrays(nums1, nums2): ', findMedianSortedArrays(nums1, nums2));


/*Given a string s, return the longest palindromic substring in s. */
function longestPalindrome(s) {
    let subStrArr = new Set();
    let obj = {};
    let lens = [];
    for(let i = 0; i < s.length - 1; i++) {
        for(let j = i + 1; j <= s.length; j++) {
            let subStr = s.slice(i, j)
            let len = subStr.length;
            let half1;
            let half2;
            if(len >= 2) {
                half1 = subStr.slice(0, len / 2);
                if(len % 2 == 0) {
                    half2 = subStr.slice(len / 2);
                } else {
                    half2 = subStr.slice(len / 2 + 1);
                }

                let reversedHalf1 = half1.split('').reverse().join('')

                if(reversedHalf1 == half2) {
                    subStrArr.add(subStr);
                }
            }
        }
    }
    for(let str of subStrArr) {
        obj[str] = str.length
        lens.push(str.length);
    }
    let maxlen = Math.max(...lens);
    let longestStr;
    for(const [key, value] of Object.entries(obj)) {
        if(value == maxlen) {
            longestStr = key;
            break;
        }
    }
    return longestStr;
};

s = "babad";
// s = "cbbd";
s = "babab";
// console.log('longestPalindrome(s): ', longestPalindrome(s));

/*Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).*/
function reverse(x) {
    let str = '' + x;
    let reverStr;
    if(str.indexOf('-') == 0) {
        str = str.slice(1);
        reverStr = '-' + str.split('').reverse().join('');
    } else {
        reverStr = str.split('').reverse().join('');
    }
    return parseInt(reverStr);
};

// console.log('reverse(123): ', reverse(-123));

/**Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function). */
function myAtoi(s) {
    let str;
    s = '' + s;
    if(s.indexOf('-') == 0) {
        str = s.slice(1);
    } else {
        str = s;
    }
    let biArr = []

    let num = parseInt(str);

    while(num / 2 != 0) {
        let b = num % 2;
        num = Math.floor(num / 2);
        biArr.push(b);
    }
    biArr = biArr.reverse().join('');
    if(s.indexOf('-') == 0) {
        biArr = '-' + biArr;
    }
    return biArr;
};

// myAtoi(-13);


function myAtoi2(s) {
    let subStr = '';
    s = s.trim();

    if(s.charAt(0) == '-' || s.charAt(0) == '+') {
        subStr = s.slice(1);
    } else {
        subStr = s;
    }

    let reg1 = /[1-9]/;
    for(let i = 0; i < subStr.length; i++) {
        if(reg1.test(subStr.charAt(i))) {
            subStr = subStr.slice(i)
            break;
        }
    }
    let reg2 = /[0-9]/;
    for(let i = 0; i < subStr.length; i++) {
        if(!reg2.test(subStr.charAt(i))) {
            subStr = subStr.slice(0, i)
            break;
        }
    }

    if(s.charAt(0) == '-') {
        subStr = '-' + subStr;
    }
    return parseInt(subStr);
};

// console.log('myAtoi2( + 00042000 babab    ): ', myAtoi2(' + 00042000 babab    '));
// console.log('myAtoi2(00042000babab): ', myAtoi2('00042000babab'));

/**Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. */

function isPalindrome(x) {
    let str = '' + x;
    let reverStr;
    if(str.indexOf('-') == 0) {
        str = str.slice(1);
    }
    reverStr = str.split('').reverse().join('');
    if(reverStr == str && x >= 0)
        return true;
    return false;
}

// console.log('isPalindrome(121): ', isPalindrome(-121));

/**Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

 */
function isMatch(s, p) {
    if(s.length == p.length) {
        let num = 0;
        for(let i = 0; i < s.length; i++) {
            if(s.charAt(i) == p.charAt(i)) {
                num++;
            }
        }
        if(num == s.length) {
            return true;
        }

        let num2 = 0;
        for(let i = 0; i < p.length; i++) {
            if(p.charAt(i) == '.') {
                num2++;
            }
        }
        if(num2 == s.length) {
            return true;
        }
    }

    let num3 = 0;
    for(let i = 0; i < s.length; i++) {
        if(s.charAt(0) == s.charAt(i)) {
            num3++;
        }
    }
    if(num3 == s.length && p.length == 2 && p.charAt(0) == '.' && p.charAt(1) == '*') {
        return true;
    }

    return false;
}


// console.log('a' == '.');
// console.log('isMatch(): ', isMatch('ab', '..'));

/** Container With Most Water */
function maxArea(height) {
    let capacities = [];
    for(let i = 0; i < height.length - 1; i++) {
        for(let j = i + 1; j < height.length; j++) {
            if(height[i] > height[j]) {
                capacities.push(height[j] * (j - i));
            } else {
                capacities.push(height[i] * (j - i));
            }
        }
    }

    let max = Math.max(...capacities);
    return max;
}

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// console.log('maxArea(height): ', maxArea(height));

/**Integer to Roman */
function intToRoman(num) {
    num = '' + num;
    let final = [];
    for(let i = num.length - 1; i >= 0; i--) {
        if(i == num.length - 1) {
            let n = parseInt(num.charAt(i));
            switch(n) {
                case 1:
                    final.push('I');
                    break;
                case 2:
                    final.push('II');
                    break;
                case 3:
                    final.push('III');
                    break;
                case 4:
                    final.push('IV');
                    break;
                case 5:
                    final.push('V');
                    break;
                case 6:
                    final.push('VI');
                    break;
                case 7:
                    final.push('VII');
                    break;
                case 8:
                    final.push('VIII');
                    break;
                case 9:
                    final.push('IX');
                    break;
            }
        }
        if(i == num.length - 2) {
            let n = parseInt(num.charAt(i));
            switch(n) {
                case 1:
                    final.push('X');
                    break;
                case 2:
                    final.push('XX');
                    break;
                case 3:
                    final.push('XXX');
                    break;
                case 4:
                    final.push('XL');
                    break;
                case 5:
                    final.push('L');
                    break;
                case 6:
                    final.push('LX');
                    break;
                case 7:
                    final.push('LXX');
                    break;
                case 8:
                    final.push('LXXX');
                    break;
                case 9:
                    final.push('XC');
                    break;
            }
        }
        if(i == num.length - 3) {
            let n = parseInt(num.charAt(i));
            switch(n) {
                case 1:
                    final.push('C');
                    break;
                case 2:
                    final.push('CC');
                    break;
                case 3:
                    final.push('CCC');
                    break;
                case 4:
                    final.push('CD');
                    break;
                case 5:
                    final.push('D');
                    break;
                case 6:
                    final.push('DC');
                    break;
                case 7:
                    final.push('DCC');
                    break;
                case 8:
                    final.push('DCCC');
                    break;
                case 9:
                    final.push('CM');
                    break;
            }
        }
        if(i == num.length - 4) {
            let n = parseInt(num.charAt(i));
            switch(n) {
                case 1:
                    final.push('M');
                    break;
                case 2:
                    final.push('MM');
                    break;
                case 3:
                    final.push('MMM');
                    break;
            }
        }

    }
    return final.reverse().join('');
}

let num = 58;
// intToRoman(num);

function romanToInt(s) {
    let num = 0;
    let length = s.length;
    if(s.slice(length - 2, length) == 'IX') {
        num = 9;
        s = s.slice(0, length - 2);
    } else if(s.slice(length - 4, length) == 'VIII') {
        num = 8;
        s = s.slice(0, length - 4);
    } else if(s.slice(length - 3, length) == 'III') {
        num = 3;
        s = s.slice(0, length - 3);
    } else if(s.slice(length - 3, length) == 'VII') {
        num = 7;
        s = s.slice(0, length - 3);
    } else if(s.slice(length - 2, length) == 'II') {
        num = 2;
        s = s.slice(0, length - 2);
    } else if(s.slice(length - 2, length) == 'VI') {
        num = 6;
        s = s.slice(0, length - 2);
    } else if(s.slice(length - 1, length) == 'I') {
        num = 1;
        s = s.slice(0, length - 1);
    } else if(s.slice(length - 2, length) == 'IV') {
        num = 4;
        s = s.slice(0, length - 2);
    } else if(s.slice(length - 1, length) == 'V') {
        num = 5;
        s = s.slice(0, length - 2);
    }

    length = s.length;
    if(s.slice(length - 2, length) == 'XC') {
        num += 90;
        s = s.slice(0, length - 2);
    } else if(s.slice(length - 4, length) == 'LXXX') {
        num += 80;
        s = s.slice(0, length - 4);
    } else if(s.slice(length - 3, length) == 'LXX') {
        num += 70;
        s = s.slice(0, length - 3);
    } else if(s.slice(length - 2, length) == 'LX') {
        num += 60;
        s = s.slice(0, length - 2);
    } else if(s.slice(length - 2, length) == 'XL') {
        num += 40;
        s = s.slice(0, length - 2);
    } else if(s.slice(length - 1, length) == 'L') {
        num += 50;
        s = s.slice(0, length - 1);
    } else if(s.slice(length - 3, length) == 'XXX') {
        num += 30;
        s = s.slice(0, length - 3);
    } else if(s.slice(length - 2, length) == 'XX') {
        num += 20;
        s = s.slice(0, length - 2);
    } else if(s.slice(length - 1, length) == 'X') {
        num += 10;
        s = s.slice(0, length - 1);
    }

    length = s.length;
    if(s.slice(length - 2, length) == 'CM') {
        num += 900;
        s = s.slice(0, length - 2);
    } else if(s.slice(length - 4, length) == 'DCCC') {
        num += 800;
        s = s.slice(0, length - 4);
    } else if(s.slice(length - 3, length) == 'DCC') {
        num += 700;
        s = s.slice(0, length - 3);
    } else if(s.slice(length - 2, length) == 'DC') {
        num += 600;
        s = s.slice(0, length - 2);
    } else if(s.slice(length - 2, length) == 'CD') {
        num += 400;
        s = s.slice(0, length - 2);
    } else if(s.slice(length - 1, length) == 'D') {
        num += 500;
        s = s.slice(0, length - 1);
    } else if(s.slice(length - 3, length) == 'CCC') {
        num += 300;
        s = s.slice(0, length - 3);
    } else if(s.slice(length - 2, length) == 'CC') {
        num += 200;
        s = s.slice(0, length - 2);
    } else if(s.slice(length - 1, length) == 'C') {
        num += 100;
        s = s.slice(0, length - 1);
    }

    length = s.length;
    if(s.slice(length - 3, length) == 'MMM') {
        num += 3000;
        s = s.slice(0, length - 3);
    } else if(s.slice(length - 2, length) == 'MM') {
        num += 2000;
        s = s.slice(0, length - 2);
    } else if(s.slice(length - 1, length) == 'M') {
        num += 1000;
        s = s.slice(0, length - 1);
    }
    return num;
}

// romanToInt('CMXCIV');

/**Longest Common Prefix */
function longestCommonPrefix(strs) {
    let lens = [];
    let pres = [];
    let size = strs.length;
    for(let str of strs) {
        lens.push(str.length);
    }
    let shortest = Math.min(...lens);
    let num = 0;
    for(let i = 0; i < shortest; i++) {
        let pre = strs[0].slice(0, i);
        num = 0;
        for(let j = 0; j < size; j++) {
            if(strs[j].slice(0, i) == pre) {
                num++;
            }
        }
        if(num == size) {
            pres.push(strs[0].slice(0, i));
        }
    }

    console.log('pres: ', pres[pres.length - 1]);
    return pres[pres.length - 1];
}

let strs = ["flower", "flow", "flight"];
// strs = ["dog", "racecar", "car"];
// longestCommonPrefix(strs);


//3Sum
function threeSum(nums) {
    let triplets = [];
    for(let i = 0; i < nums.length - 2; i++) {
        for(let j = i + 1; j < nums.length - 1; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                if(nums[i] + nums[j] + nums[k] == 0) {
                    triplets.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }
    for(let i = 0; i < triplets.length - 1; i++) {
        for(let j = i + 1; j < triplets.length; j++) {
            if(triplets[i].sort().toString() == triplets[j].sort().toString()) {
                const index = triplets.indexOf(triplets[j]);
                triplets.splice(index, 1);
            };

        }
    }
    return triplets;
}

let nums = [-1, 0, 1, 2, -1, -4];
// threeSum(nums);

//3Sum Closest
function threeSumClosest(nums, target) {
    let triplets = [];
    let sums = [];
    for(let i = 0; i < nums.length - 2; i++) {
        for(let j = i + 1; j < nums.length - 1; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                sums.push(nums[i] + nums[j] + nums[k]);
                triplets.push([nums[i], nums[j], nums[k]]);
            }
        }
    }
    let diffs = [];
    for(let i = 0; i < sums.length; i++) {
        diffs.push(Math.abs(sums[i] - target));
    }
    let min = Math.min(...diffs);
    let index = diffs.indexOf(min);
    if(index < 0) {
        index = diffs.indexOf(-min);
    }
    return sums[index];
}
nums = [-1, 2, 1, -4], target = 1;
// threeSumClosest(nums, target);

//Letter Combinations of a Phone Number
function letterCombinations(digits) {
    let digLetters = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };

    let digarr = digits.split('');
    if(digarr.length == 1) {
        return digLetters[digarr];
    }
    let result = [];
    if(digarr.length == 2) {
        for(let i = 0; i < digLetters[digarr['0']].length; i++) {
            for(let j = 0; j < digLetters[digarr['1']].length; j++) {
                result.push(digLetters[digarr['0']][i] + digLetters[digarr['1']][j]);
                result.push(digLetters[digarr['1']][j] + digLetters[digarr['0']][i]);
            }
        }
        return result;
    }
    let result2 = [];
    if(digarr.length == 3) {
        for(let i = 0; i < digLetters[digarr['0']].length; i++) {
            for(let j = 0; j < digLetters[digarr['1']].length; j++) {
                result.push(digLetters[digarr['0']][i] + digLetters[digarr['1']][j]);
                result.push(digLetters[digarr['1']][j] + digLetters[digarr['0']][i]);
            }
        }
        for(let k = 0; k < result.length; k++) {
            for(let h = 0; h < digLetters[digarr['2']].length; h++) {
                result2.push(digLetters[digarr['2']][h] + result[k]);
                result2.push(result[k] + digLetters[digarr['2']][h]);
            }
        }
        return result2;
    }

    let result3 = [];
    if(digarr.length == 4) {
        for(let i = 0; i < digLetters[digarr['0']].length; i++) {
            for(let j = 0; j < digLetters[digarr['1']].length; j++) {
                result.push(digLetters[digarr['0']][i] + digLetters[digarr['1']][j]);
                result.push(digLetters[digarr['1']][j] + digLetters[digarr['0']][i]);
            }
        }
        for(let k = 0; k < result.length; k++) {
            for(let h = 0; h < digLetters[digarr['2']].length; h++) {
                result2.push(digLetters[digarr['2']][h] + result[k]);
                result2.push(result[k] + digLetters[digarr['2']][h]);
            }
        }
        for(let l = 0; l < digLetters[digarr['3']].length; l++) {
            for(let m = 0; m < result2.length; m++) {
                result3.push(digLetters[digarr['3']][l] + result2[m]);
                result3.push(result2[m] + digLetters[digarr['3']][l]);
            }
        }
        return result3;
    }
}

let digits = "25";
// console.log('letterCombinations(digits): ', letterCombinations(digits).sort());

//4Sum
function fourSum(nums, target) {
    let result = [];
    for(let i = 0; i < nums.length - 3; i++) {
        for(let h = i + 1; h < nums.length - 2; h++) {
            for(let j = h + 1; j < nums.length - 1; j++) {
                for(let k = j + 1; k < nums.length; k++) {
                    if(nums[i] + nums[h] + nums[j] + nums[k] == target) {
                        result.push([nums[i], nums[h], nums[j], nums[k]]);
                    }
                }
            }
        }
    }
    console.log('result: ', result);
    return result;
}

nums = [1, 0, -1, 0, -2, 2];
target = 0;
// fourSum(nums, target);

//Valid Parentheses
function isValid(s) {
    if(s.length % 2 != 0) {
        return false;
    }

    for(let i = 0; i < s.length; i++) {
        if((s.charAt(i) == '(' && s.charAt(i + 1) == ')') ||
            (s.charAt(i) == '[' && s.charAt(i + 1) == ']') ||
            (s.charAt(i) == '{' && s.charAt(i + 1) == '}')) {
            return true;
        }
    }
    return false;
}
s = '()[]{'
// console.log('isValid(s): ', isValid(s));

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    // insert last node
    insertLast(data) {
        let node = new Node(data);
        let current;
        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    // insert at index
    insertAt(data, index) {
        if(index > 0 && index > this.size) {
            return;
        }

    }

    // remove at index

    // clear list

    // print list data
    printListData() {
        let current = this.head;
        while(current) {
            console.log('current.data: ', current.data);
            current = current.next;
        }
    }

}

const ll = new LinkedList();

// ll.insertFirst(100);
// ll.insertFirst(200);
// ll.insertFirst(300);
// ll.insertLast(400);
// ll.printListData();

//Generate Parentheses
function generateParenthesis(n) {
    let result = [];
    backtrack(result, '', 0, 0, n);
    return result;
}

function backtrack(result, currentString, open, close, max) {
    if(currentString.length == max * 2) {
        result.push(currentString);
        return;
    }

    if(open < max) {
        backtrack(result, currentString + '(', open + 1, close, max);
    }

    if(close < open) {
        backtrack(result, currentString + ')', open, close + 1, max);
    }
};

// console.log('generateParenthesis(n): ', generateParenthesis(3));

//Remove Duplicates from Sorted Array
function removeDuplicates(nums) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] == nums[j]) {
                nums.splice(i, 1);
            }
        }
    }
    return nums;
}

nums = [1, 1, 2];
// console.log('removeDuplicates(nums): ', removeDuplicates(nums));