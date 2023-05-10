//Reverse digits of a number

let num = 12345;
//output: 54321
let n = num;
let res = 0;
while (n > 0) {
    let rem = n % 10;
    res = res * 10 + rem;
    n = Math.floor(n / 10);
}
console.log(res);

//O(logn)