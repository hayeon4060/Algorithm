const input = require("fs").readFileSync("./example.txt").toString().split("\n");

let num =Number(input.shift())

let cost = input.map(x=>{return x.trim().split("").map(Number)})

// const num = 20
// let cost = []

// for (let i = 0; i < num; i++) {
//     const tmp = []

//     for (let j = 0; j < num; j++) {
//         tmp.push(Math.floor(Math.random() * 10000) + 1)
//     }
//     cost.push(tmp)
    
// }
// // console.log(cost, num)

const start = process.hrtime.bigint()



let memories = Array.from({length: 2**num}, ()=>{return -1})
function binaryAdd(w_p, addCost){

    let val = parseInt(w_p.map(x=>{return x==-1 ? 0 : 1}).join(''), 2)
    memories[val] = addCost
}

function binaryCheck(w_p){
    let val = parseInt(w_p.map(x=>{return x==-1 ? 0 : 1}).join(''), 2)
    let tmp = memories[val]
    return tmp
}

// function dfs(person, w_p){
//     // w_p  = [-1, -1, -1, -1, 5] // 4번일은 5번사람이 했움
    
//     if(person>=num) {return 0}
//     let rs = binaryCheck(w_p) 
//     if( rs!= -1){return rs}

//     let rs_cost = Infinity

//     for(let work=0; work<num; work++){
//         if(w_p[work] !=-1) {continue}
//         let tmp_w_p = [...w_p]
//         tmp_w_p[work]= person
//         let tmp_cost = dfs(person+1 ,tmp_w_p) + cost[person][work]

//         if(rs_cost > tmp_cost){rs_cost = tmp_cost}
//     }

//     binaryAdd(w_p, rs_cost)
//     return rs_cost
// }


// console.log(dfs(0,Array.from({length: num}, ()=>{return -1}))) // 최소비용


// 비트 마스크 사용해보자고

function dfs(person, bitmask){
    // bitmask = work의 01010 의 10진수임  했움
    
    if(person>=num) {return 0}
    let rs = memories[bitmask]
    if( rs!= -1){return rs}

    let rs_cost = Infinity

    for(let work=0; work<num; work++){
        if(bitmask & 1<<work){continue}
        // if(w_p[work] !=-1) {continue}

        let tmp_cost = dfs(person+1 ,(bitmask | 1<<work)) + cost[person][work]

        if(rs_cost > tmp_cost){rs_cost = tmp_cost}
    }

    memories[bitmask] = rs_cost
    return rs_cost
}

console.log(dfs(0,0)) // 시작사람, 비트마스크()010101 인데, 10진수로 넣을거임 ~


const end = process.hrtime.bigint()


const elapsedMs = Number(end - start) / 1_000_000
console.error(`실행 시간: ${elapsedMs.toFixed(3)}ms`)