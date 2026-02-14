const input = require("fs").readFileSync("../example.txt").toString().split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const members= Number(input[0])

const [A, B] = input[1].trim().split(" ").map(Number)

let gr = {}
for(let i=3; i<input.length;i++){
    let [par, kid] = input[i].trim().split(" ").map(Number)

    if(gr[par] == undefined){gr[par] = []}
    gr[par].push(kid)

    
    if(gr[kid] == undefined){gr[kid] = []}
    gr[kid].push(par)



}
// console.log(gr)

let chon = Array.from({length: members+1}, ()=>{return null})
let stack = []
let stack_idx = 0
stack.push(A)
chon[A] = 0

while(stack_idx < stack.length){
    // console.log(stack)

    here = stack[stack_idx++]
    // console.log(here, chon, )
    // if(here == B){break;}

    for(let fr of gr[here]){
        
        if(chon[fr] !=null && stack_idx > chon[fr]){continue}
        
        chon[fr] = chon[here] + 1;
        stack.push(fr)
    }
}
// console.log(chon)
console.log(chon[B] == null ? -1 : chon[B])
 // 1, 4
// 최단 경로 찾으면 될듯>?/

