const input = require("fs").readFileSync("./example.txt").toString().split("\n");

let num =Number(input.shift())

let spot = input.map(x=>{return x.trim().split(" ").map(Number)})
console.log(spot)
let cost = Array.from({length:num}, ()=>{
        return Array.from({length:num}, ()=>{return 0})
    })

    // console.log(cost)

for(let idx in spot){
    let [x,y] = spot[idx]
    // console.log(idx, "----",x,y)
    
    for(let i = Number(idx)+1; i<num; i++){
        let val = Math.sqrt(Math.abs(spot[i][0] - x)**2 + Math.abs(spot[i][1] - y)** 2)

        cost[idx][i] = val
        cost[i][idx] = val
    }

}
// 4
// 1 1
// 5 3
// 3 1
// 3 3
// 정답: 9.656854249



function dfs(fr, lst){
    console.log(fr, lst)
    
    // lst : {0:1, 1:3} fr:to 
    let vals = Object.values(lst)
    console.log(vals, num)
    
    if(vals.length == num -1) { return cost[fr][0]}

    let now_val = Infinity
    for(let i = 0; i<num; i++){

        if(vals.includes(i)){continue}
        if(i==0){continue}
        if(fr == i) {continue}

        let tmp_lst = JSON.parse(JSON.stringify(lst))
        tmp_lst[fr]=i
        let tmp_rs = dfs(i, tmp_lst)

        if(now_val > tmp_rs+ cost[fr][i]){
            now_val = tmp_rs+ cost[fr][i]
        }
    }
    console.log("------------------")
    console.log(lst, fr, now_val)
    console.log(lst)


    if(tmp_to == -1){return 0}
    return now_val 
}

console.log(dfs(0, {}))