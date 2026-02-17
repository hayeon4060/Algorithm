const input = require("fs").readFileSync("../example.txt").toString().split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n,k] = input[0].trim().split(" ")
let person = Array.from({length: n}, (v,i)=>{return i+1})
// console.log(person)

let killed = []
let start = 0

let k_idx = 1
while(killed.length < n){
    start = start%n
    // console.log(killed, start)
    if(person[start] == 0){start++; continue}
    else if(k_idx==k){
        k_idx = 1
        killed.push(person[start])
        person[start] = 0
    }else {
        k_idx+=1
    }


    start++
}

console.log("<"+killed.join(", ")+">")



//    2       3   
// 1             4 
// N             5 
//    N-1    6   

// let k  // 양수 <=N -> k번째 사람을 제거



//    X      X   
// 1             4 
//              5 
//    7    X   

// 3 6 2 7 ==> k번째 사람을 없애기. 이후 3번째 돌려야지

