
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