const input = require("fs").readFileSync("./example.txt").toString().split("\n");

let num =Number(input.shift(0))

let spot = input.map(x=>{return x.trim().split(" ").map(Number)})
console.log(spot)
let cost = Array.from({length:num}, ()=>{
        return Array.from({length:num}, ()=>{return 0})
    })

    console.log(cost)

for(let idx in spot){
    let [x,y] = spot[idx]
    console.log(idx, "----",x,y)
    
    for(let i = Number(idx)+1; i<num; i++){
        console.log(i, spot[i])
        let val = Math.sqrt(Math.abs(spot[i][0] - x)^2 +Math.abs(spot[i][1] - y)^2 )
        console.log(val)

        cost[idx][i] = val
        cost[i][idx] = val
    }

}
// 4
// 1 1
// 5 3
// 3 1
// 3 3
console.log(cost)
// 정답: 9.656854249



function dp(fr, lst){
    // lst : {0:1, 1:3} fr:to 
    let vals = Object.values(lst)
    let rs = Infinity
    
    if(fr == 0){continue}
    if(vals.length == num) { continue}



    return rs 
}

console.log(dp(0, {}))