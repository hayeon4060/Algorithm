const input = require("fs").readFileSync("../example.txt").toString().split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");


// let [posy, posx] = [input[0][0], input[0][2]]
// console.log(input[0])
let [posy, posx] = input[0].split(" ").map(x=>{return Number(x)-1})

let lst = []
let queue = []
for(let idx = 1; idx<input.length; idx++){
    // console.log(idx)
    lst.push(input[idx].trim().split('').map(x=>{return Number(x)}))
}
// console.log(lst)
// console.log("xxxxxxxxxxxxxxxxxx", posy, posx)
let al_w = [0, 0, -1, 1]
let al_h = [-1, 1, 0, 0]


queue.push({x: 0, y:0})
let queue_st = 0

while(true){
    // console.log(queue, queue_st,queue.length )
    if(queue_st == queue.length){break;}
    // if(queue_st >=5){return}

    let [x,y] = [queue[queue_st].x, queue[queue_st].y]
    queue_st++;

    for(let i=0; i<4; i++){
        let calx = x + al_w[i]
        let caly = y + al_h[i]
        if(calx <0 || calx > posx || caly <0 || caly > posy || (calx==0 && caly == 0)){continue}
        else if(lst[caly][calx] == 0 || lst[caly][calx] >=2){continue;}
        else{
            
            // console.log("------------------", caly, calx, lst[caly][calx] < lst[y][x]+1)
            if(lst[caly][calx] < lst[y][x]+1){

                queue.push({x: calx, y: caly})
                lst[caly][calx] = lst[y][x]+1 
            }
            // queue.push({x: calx, y: caly})
            // lst[caly][calx] = lst[y][x]+1 
        }
    }






}

console.log(lst[posy][posx])
