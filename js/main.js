
// ? Task #1
// ? Alphabet Soup

// function AlphabetSoup(str) {
//     return str.split("").sort().join("")
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let inp1 = document.querySelector(".inp1");
//     let myResult = document.querySelector(".result");
//     myResult.innerHTML = AlphabetSoup(inp1.value);
// }

// ? Task #2
// ? Reverse the Order of a String

// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let inp1 = document.querySelector(".inp1");
//     let myResult = document.querySelector(".result");
//     myResult.innerHTML = reverse(inp1.value);
// }

// ? Task #3
// ? Fix the Error: Vowel Edition

// function removeVowels(str) {
//     return str.replace(/[aeiou]/gi, '')
// }

// let myButton = document.querySelector(".btn");

// myButton.onclick = () => {
//     let myInp = document.querySelector(".first-inp");
//     let myResult = document.querySelector(".result");

//     myResult.innerHTML = removeVowels(myInp.value);
// }

// ? Task #4
// ? The Forbidden Letter
// ! The function() works properly but user gets wrong result in HTML !!!
// todo Check it again!

// function forbiddenLetter(char, arr) {
//     let newStr = arr.toString();
//     return newStr.split(' ').some(elem => elem.includes(char) ? false : true)
// }

// let myButton = document.querySelector(".btn");

// myButton.onclick = () => {
//     let firstInp = document.querySelector(".first-inp");
//     let secondInp = document.querySelector(".second-inp");
//     let myResult = document.querySelector(".result");
//     let myArr = secondInp.value.trim().split(" ");

//     myResult.innerHTML = forbiddenLetter(firstInp.value, myArr);
// }

// ? Task #5
// ? Smaller String Number
// todo Try to solve in another way!

// function smallerNum(n1, n2) {
//     if (+n1 === +n2)
//         return n1;
//     else if (+n1 > +n2)
//         return n2;
//     else
//         return n1;
// }

// let myButton = document.querySelector(".btn");

// myButton.onclick = () => {
//     let firstInp = document.querySelector(".first-inp");
//     let secondInp = document.querySelector(".second-inp");
//     let myResult = document.querySelector(".result");

//     myResult.innerHTML = smallerNum(firstInp.value, secondInp.value);
// }


// ? Task #6
// ? Convert Number to String of Dashes

// function Go(num) {
//     return "-".repeat(num);
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let inp1 = document.querySelector(".inp1");
//     let myResult = document.querySelector(".result");
//     myResult.innerHTML = Go(inp1.value);
// }

// ? Task #7
// ? Reverse and Capitalize

// function reverseCapitalize(str) {
//     return str.split('').reverse().join('').toUpperCase();
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let inp1 = document.querySelector(".inp1");
//     let myResult = document.querySelector(".result");
//     myResult.innerHTML = reverseCapitalize(inp1.value);
// }


// ? Task #8
// ? Check if String Ending Matches Second String

// function checkEnding(str1, str2) {
//     return str1.slice(-str2.length) === str2
// }

// let btn = document.querySelector(".btn");

// btn.onclick = () => {
//     let firstInp = document.querySelector(".inp1");
//     let secondInp = document.querySelector(".inp2");
//     let res = document.querySelector(".res");

//     res.innerHTML = checkEnding(firstInp.value, secondInp.value);
// }

// ? Task #9
// ? Shuffle the Name

// function nameShuffle(str) {
//     return str.split(' ').reverse().join(' ')
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let inp1 = document.querySelector(".inp1");
//     let myResult = document.querySelector(".result");
//     myResult.innerHTML = nameShuffle(inp1.value);
// }

// ? Task #10
// ? Is the String in Order?

// function isInOrder(str) {
//     return str.split('').sort().join('') === str
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let inp1 = document.querySelector(".inp1");
//     let myResult = document.querySelector(".result");
//     myResult.innerHTML = isInOrder(inp1.value);
// }

// ? Task #11
// ? Is the String a Palindrome?

// function checkPalindrome(str) {
//     return str.split('').reverse().join('') === str;
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let inp1 = document.querySelector(".inp1");
//     let myResult = document.querySelector(".result");
//     myResult.innerHTML = checkPalindrome(inp1.value);
// }

// ? Task #12
// ? Strange Pair

// function isStrangePair(str1, str2) {
//     return str1[0] === str2[str2.length - 1] && str1[str1.length - 1] === str2[0]
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let firstInp = document.querySelector(".inp1");
//     let secondInp = document.querySelector(".inp2");
//     let myRes = document.querySelector(".result");

//     myRes.innerHTML = isStrangePair(firstInp.value, secondInp.value)
// }

// ? Task #13
// ? Edaaaaabit

// function howManyTimes(num) {
//     let startStr = 'Ed';
//     let endStr = 'bit';
//     let myStr = 'a';
//     let arr = [];
//     for (let i = 1; i <= num; i++) {
//         arr.push(myStr);
//     }
//     return `${startStr}${arr.join('')}${endStr}`;
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let firstInp = document.querySelector(".inp1");
//     let myRes = document.querySelector(".result");

//     myRes.innerHTML = howManyTimes(firstInp.value)
// }

// ? Task #14
// ? Repeating Letters N Times

// function repeat(str, n) {
//     let arr = [];
//     arr = str.split('').map(elem => elem.repeat(n));
//     return arr.join('');
// }

// let btn = document.querySelector(".btn");

// btn.onclick = () => {
//     let inp1 = document.querySelector(".inp1");
//     let inp2 = document.querySelector(".inp2");
//     let res = document.querySelector(".result");

//     res.innerHTML = repeat(inp1.value, inp2.value);
// }

// ? Task #15
// ? The Full Length of a Google

// function googlify(n) {
//     let str = "o";
//     if (n > 1)
//         return `G${str.repeat(n)}gle`;
//     return "invalid";
// }

// let btn = document.querySelector(".btn");

// btn.onclick = () => {
//     let inp1 = document.querySelector(".inp1");
//     let res = document.querySelector(".result");

//     res.innerHTML = googlify(inp1.value);
// }

// ? Task #16
// ? Check if a String Contains only Identical Characters

// function isIdentical(s) {
//     return s.split('').reverse().join('') === s;
// }

// let btn = document.querySelector(".btn");

// btn.onclick = () => {
//     let inp1 = document.querySelector(".inp1");
//     let res = document.querySelector(".result");

//     res.innerHTML = isIdentical(inp1.value);
// }

// ? Task #17
// ? Letters Only

// function lettersOnly(str) {
//     let a = /[A-Z]/gi;
//     return str.match(a).join('');
// }

// let btn = document.querySelector(".btn");

// btn.onclick = () => {
//     let inp1 = document.querySelector(".inp1");
//     let res = document.querySelector(".result");

//     res.innerHTML = lettersOnly(inp1.value);
// }

// ? Task #18
// ? Recursion: Reverse a String
// ! Try to solve in Recursion !!!

// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// let btn = document.querySelector(".btn");

// btn.onclick = () => {
//     let inp1 = document.querySelector(".inp1");
//     let res = document.querySelector(".result");

//     res.innerHTML = reverse(inp1.value);
// }

// ? Task #19
// ? Total Number of Unique Characters

// function countUnique(s1, s2) {
//     let arr = [];
//     let cnt = 0;
//     let b = s1.concat(s2);
//     arr = b.split('').sort();
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] != arr[i + 1])
//             cnt++;
//     }
//     return cnt;
// }

// let btn = document.querySelector(".btn");

// btn.onclick = () => {
//     let inp1 = document.querySelector(".inp1");
//     let inp2 = document.querySelector(".inp2");
//     let res = document.querySelector(".result");

//     res.innerHTML = countUnique(inp1.value, inp2.value);
// }

// ? Task #20
// ? Lexicographically First and Last

// function firstAndLast(s) {
//     let sort = s.split('').sort().join('');
//     let reverse = s.split('').sort().reverse().join('');
//     return [sort, reverse];
// }

// let myButton = document.querySelector(".btn");

// myButton.onclick = () => {
//     let myInput = document.querySelector(".inp1");
//     let myResult = document.querySelector(".result");

//     myResult.innerHTML = firstAndLast(myInput.value);
// }

// ? Task #21
// ? Re-Form the Word

// function getWord(left, right) {
//     let con = left.concat(right)
//     return con.toUpperCase()[0] + con.substring(1, con.length);
// }

// let myButton = document.querySelector(".btn");

// myButton.onclick = () => {
//     let myFirstInput = document.querySelector(".inp1");
//     let mySecondInput = document.querySelector(".inp2");
//     let myResult = document.querySelector(".result");

//     myResult.innerHTML = getWord(myFirstInput.value, mySecondInput.value);
// }

// ? Task #22
// ? What's Hiding Amongst the Crowd?

// function detectWord(str) {
//     let regex = /[a-z]/g;
//     return str.match(regex).join('');
// }

// let myButton = document.querySelector(".btn");

// myButton.onclick = () => {
//     let myFirstInput = document.querySelector(".inp1");
//     let myResult = document.querySelector(".result");

//     myResult.innerHTML = detectWord(myFirstInput.value);
// }

// ? Task #23
// ? Count Instances of a Character in a String

// function charCount(myChar, str) {
//     let arr = [];
//     arr = str.split('').filter(elem => elem === myChar);
//     return arr.length;
// }

// let btn = document.querySelector(".btn");

// btn.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let secondInp = document.querySelector('.inp2');
//     let res = document.querySelector('.result');

//     res.innerHTML = charCount(firstInp.value, secondInp.value);
// }

// ? Task #24
// ? Incorrect Import Statement
// ! Is there another way to solve this task ?!

// function fixImport(s) {
//     let [first, second, third, fourth] = s.split(" ")
//     return `${third} ${fourth} ${first} ${second}`
// }

// let btn = document.querySelector(".btn");

// btn.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let res = document.querySelector('.result');

//     res.innerHTML = fixImport(firstInp.value);
// }

// ? Task #25
// ? Error Messages

// function error(n) {
//     let obj = {
//         1: "Check the fan: e1",
//         2: "Emergency stop: e2",
//         3: "Pump Error: e3",
//         4: "c: e4",
//         5: "Temperature Sensor Error: e5",
//     }
//     if (n != 1 && n != 2 && n != 3 && n != 4 && n != 5)
//         return 101;
//     return `${obj[n]}`;
// }

// let btn = document.querySelector(".btn");

// btn.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let res = document.querySelector('.result');

//     res.innerHTML = error(firstInp.value);
// }
