const input = require("fs").readFileSync("../example.txt").toString().split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n,m] = input[0].trim().split(" ").map(x=>{return Number(x)})
let visited = Array.from({length:n+1},()=>{ return false})
// 저번에 이중 배열 쓰라고 했었던듯.

let lst = Array.from({length: n+1}, ()=>{return []},)

for(let i=1; i<input.length; i++){
    const [v, u] = input[i].trim().split(" ").map(x=>{return Number(x)})
    lst[u].push(v)
    lst[v].push(u)
}
let num = 0

for(let i=1; i<n+1; i++){
    if(visited[i]){continue;}

    let stack = [i]
    let stack_st=0
    num++
    visited[i] = true

    while(stack.length > stack_st){       


        let st = stack[stack_st]

        stack_st++

        
        for(let to of lst[st]){
            if(!visited[to] ){ // 방문 이미 했으면 넘기셈 
                stack.push(to)
                visited[to] = true
            }
        }
    
    }
}

console.log(num)