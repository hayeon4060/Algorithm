const input = require("fs").readFileSync("../example.txt").toString().split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");


let [w,h] = input[0].trim().split(" ").map(Number)
let day = 0
let tomato = []
for(let i=1; i<=h; i++){tomato.push(input[i].trim().split(" ").map(Number))}
// console.log(tomato)


let alx=[-1, 0,0,1]
let aly = [0, -1, 1, 0]



let stack = []
let after = []
let remain = w*h

for(let y=0; y<h; y++){
    for(let x =0; x<w; x++){

        if(tomato[y][x] == 1){
            stack.push({x:x, y:y})
            remain--
        }else if(tomato[y][x] == -1 ){remain--}
    }
}


while(true){
        
    // console.log("==========================================day",day, remain)
    // console.log('stack', stack)

    if(remain ==0){console.log(day); break}
    // let check_num = stack.length

    for(let i=0; i<stack.length; i++){

        for(let al=0; al<4; al++){
            const posx = stack[i].x + alx[al]
            const posy = stack[i].y + aly[al]

            if(posx<0 || posx >=w || posy<0 || posy>=h || tomato[posy][posx] == -1){continue}
            else if(tomato[posy][posx] == 1){continue}
            else{
                
                tomato[posy][posx] = 1
                remain--
                after.push({x:posx, y: posy})
            }

        }
    }

    // console.log('after', after)
    
    if(after.length == 0 ){console.log(-1); break}
    stack = after
    after = []


    // for(let my of stack){
    // }

    day++


}

// 이미 다 익어있음? return 0, 절대 다 익지 못함 return -1