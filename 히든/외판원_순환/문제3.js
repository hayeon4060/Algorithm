const input = require("fs").readFileSync("./example.txt").toString().split("\n");

let num =Number(input.shift())

let cost = input.map(x=>{return x.trim().split("").map(Number)})
console.log(num, cost)
let pp = Array.from({length: num}, ()=>{return -1}) // 산사람 -1: 안산사람 

function dfs(seller, sum_cost, ppcnt, pp){ // pp는 산 사람 
    console.log(seller, sum_cost, ppcnt, pp)


    let rs_cnt = ppcnt

    if(ppcnt>=num){ return rs_cnt } // 이미 끝났음 

    for(let i=1; i<num; i++){ // 0번 사람은 제외 
        if(pp[i] != -1){continue} // i번째 사람은 이미 샀음
        if(cost[seller][i] < pp[seller]){continue}
        // if(cost[seller][i] > 9){continue}



        let check_pp = [...pp]
        check_pp[i] = cost[seller][i]
        let check_cnt = dfs(i, sum_cost+cost[seller][i], ppcnt+1,check_pp )

        console.log("-------------", check_cnt)
        if(rs_cnt < check_cnt) {rs_cnt = check_cnt}
    }
    
    // if(sum_cost)


    // 1. for문 돌리고 팔값+ total >9 ? return
        // 돌릴때 팔값이 < last값이면 return  pp[buy]

    console.log(rs_cnt)
    
    return rs_cnt
}
pp[0] = 0
console.log(dfs(0,0,1, pp))
