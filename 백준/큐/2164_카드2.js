const input = require("fs").readFileSync("../example.txt").toString().split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let cardN = Number(input[0].trim())
let cardSet = Array.from({length: cardN}, (v,i)=>{return i+1})
let start = 0


while(cardSet.length > start+1){
    start++
    if(cardSet.length > start+1){
        cardSet.push(cardSet[start++])
    }
}
console.log(cardSet[start])
