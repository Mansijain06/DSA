//Reverse Array using New Array

let arr = [1, 2, 3, 4];
let finalArr = [];

for (let i = 0; i < arr.length; i++) {
    finalArr[i] = arr[arr.length - 1 - i];
}

console.log(finalArr);