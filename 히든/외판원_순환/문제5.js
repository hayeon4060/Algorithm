const input = require("fs").readFileSync("./example.txt").toString().split("\n");

let num =Number(input.shift())
let p = Number(input.pop())
let now_normal = 0
let factory_status = input.pop().trim().split('').map(x=>{
    if(x == 'Y'){
        now_normal+=1
        return 1
    }
    return 0
}).reverse().join('')

if(now_normal == 0 && p >0){console.log(-1); return}


let cost = input.map(x=>{return x.trim().split(" ").map(Number)})

const start = process.hrtime.bigint()
let memory =  Array.from({length: 2**num}, ()=>{return -1})
// console.log(memory)


function dfs(bitmask, cnt){
//    console.log(cnt, memory[cnt], bitmask)
    
    if(cnt >= p){return 0}

    let memoryrs = memory[bitmask]
    if(memoryrs != -1){return memoryrs}


    
    let real_cost = Infinity


    for(let normal_f=0; normal_f<num; normal_f++){
        if(bitmask & 1<<normal_f){ // y인 경우


            let rs_cost = Infinity

            for(let warning_f=0; warning_f<num; warning_f++){ // 가능인원들

                if((bitmask & 1<<warning_f) == 0){ // n인 경우
                
                    let tmp_cost = cost[normal_f][warning_f] + dfs(bitmask| 1<<warning_f, cnt+1)
                    if(rs_cost > tmp_cost){rs_cost = tmp_cost}
                
                }
            }

            if(real_cost > rs_cost){real_cost = rs_cost}
        }
    }

    memory[bitmask] = real_cost
    return real_cost

}

let rs = dfs(parseInt(parseInt(factory_status, 2), 10), now_normal  )


console.log(rs == Infinity ? -1 : rs)










const end = process.hrtime.bigint()


const elapsedMs = Number(end - start) / 1_000_000
console.error(`실행 시간: ${elapsedMs.toFixed(3)}ms  답: 14`)