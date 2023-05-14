
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