let input = require("fs").readFileSync("../example.txt").toString().split("\n");
// let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const how_many = input.shift(0)
// console.log(input, how_many)

let stack = []

for(let i=0; i<how_many; i++){
    const number = Number(input[i])
    if(number==0){
        stack.pop()
    }else{

        stack.push(number)
    }
}

const sum = stack.reduce((sum, current)=>{return sum + current }, 0)
console.log(sum)
