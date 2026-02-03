const input = require("fs").readFileSync("../example.txt").toString().split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");


const firstLine = input.shift().split(" ");
const node_num = firstLine[0];
const line_num = firstLine[1];
const start_nd = firstLine[2].trim(); 


let nds = {} 


for(let line of input){
    
    const [st, ed] = line.split(" ").map(Number);
    

    if(nds[st] == null){nds[st] = []}
    if(nds[st].includes(ed)){continue}

    nds[st].push(ed)

    
    if(nds[ed] == null){nds[ed] = []}
    nds[ed].push(st)

}

for(let key in nds){
    nds[key].sort((a,b)=>{return a-b})
}

let stack = []

function dfs(st){

    if(stack.includes(st)){return stack}
    stack.push(Number(st))


    if(nds[st] == undefined){return stack}
    for(let from of nds[st]){
        if(!stack.includes(from)){
            dfs(from)
        }
    }
    return stack
}



function bfs(st, node_num){
    
    let queue = []
    let result = []
    let check = new Array(Number(node_num)+1).fill(false)
    let queue_point = 0

    queue.push(Number(st))
    check[st] = true

    while(queue.length > queue_point){
        result.push(queue[queue_point])

        const neighbors = nds[String(queue[queue_point])] || []; // 없으면 빈 방이라도 줘!

        const adding = neighbors.filter(x=>{return check[Number(x)] == false})

        queue.push(...adding)
        adding.map(x=>{check[x] = true})

        queue_point++

        // console.log("queue: ", queue, "  queue_point:", queue_point, "  result: ",result)
    }

    console.log(result.join(" "))
}

console.log(dfs(start_nd).join(" "))
bfs(start_nd, node_num)



// 예외 케이스
// 1. 양방향 가능이라서.. 1-2, 2-1 이런식으로 양쪽으로 줄 이으면..
// 2. 연결된 노드가 하나도 없을 때.