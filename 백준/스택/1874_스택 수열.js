let input = require("fs").readFileSync("../example.txt").toString().split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

input = input.map(x=>{return Number(x.trim())})
const big_num = input.shift()
// console.log(input, big_num)

let result = [] // 만들어야 하는 수열
let tmp = [] // 거치는 스택
let giho = []

for(let i=1; i<=big_num; i++){ // 이게 처음 result push for문이니
    
    // 1. push 경우 -> tmp의 마지막 변수가 더 클때, 같을때까지 push 할거~
    if(input[tmp.length] >=i){
        result.push(i)
        giho.push("+")
    }

    while(input[tmp.length ] == result[result.length -1 ] && result.length>0){

        tmp.push(result.pop())
        giho.push("-")
    }
}
// JSON.stringify(input) == JSON.stringify(tmp)
// 이렇게 했을떄.. 답이 틀렸다하네.. 왜? 

if(tmp.length === big_num){ 
    giho.map(x=>{console.log(x)})
}else{
    console.log("NO")
}
