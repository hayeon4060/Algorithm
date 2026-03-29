const input = require("fs").readFileSync("../example.txt").toString().split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let [node, edgeCnt] = input[0].split(" ").map(Number)
let node_st = Number(input[1]) -1


let gr = Array.from({length: node}, ()=>{return []})
for(let i = 0; i<edgeCnt; i++){
    if (!input[i + 2]) continue;
    const [fr, to, w] = input[i+2].split(" ").map(Number)
    gr[fr-1].push([to-1 , w])    
}

let values = Array.from({length: node}, ()=>{return Number.POSITIVE_INFINITY})
let visited = Array.from({length: node}, ()=>{return false})

values[node_st] = 0
let fr = node_st

while(true){
    visited[fr] = true

    const connetced = gr[fr]
    for(let con of connetced){
        let to = con[0]
        let w = con[1]
        
        if(w + values[fr] < values[to]){
            values[to] = w + values[fr]
        }

    }

    let minVal = Infinity
    let minIdx = -1

    let Allvisited = true

    for(let i=0; i<node; i++){
        if(visited[i]){continue} //  이미 방문했다면
        else{Allvisited = false}
        
        if(minVal > values[i]){
            minVal = values[i]
            minIdx = i
        }
    }
    if(Allvisited || minIdx == -1){break}
    fr = minIdx
}
console.log(values.map(x=>{return isFinite(x)? x : 'INF' }).join("\n"))
