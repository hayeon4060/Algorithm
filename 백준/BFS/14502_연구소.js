const input = require("fs").readFileSync("./example.txt").toString().split("\n");
// const input = fs.readFileSync(0, 'utf-8').trim().split(' ').map(Number)
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [h, w] = input[0].split(" ").map(Number)

// console.log(input)
let lst = []
input.forEach((x, idx)=>{
    if(idx != 0 && x.trim()!=''){
        // console.log(x)
        lst.push(x.trim().split(" ").map(Number))
    }
})

let result = 0

for(let A = 0; A < w*h; A++){

    const [ax, ay] = [A % w, parseInt(A/w)]
    if(lst[ay][ax] != 0){continue}
        
    for(let B = A+1; B < w*h; B++){

            
        const [bx, by] = [B % w, parseInt(B/w)]
        if(lst[by][bx] != 0){continue}

        
        for(let C = B+1; C < w*h; C++){

            
            // console.log(lst)
                
            const [cx, cy] = [C % w, parseInt(C/w)]
            if(lst[cy][cx] != 0){continue}
            // console.log(lst)
            // console.log(A, B, C)

            BFS(ax, ay, bx, by, cx, cy)
            // return

                
        }
    }
}


// 안전 영역 갯수 체크 return 안전 영역
function BFS(ax, ay, bx, by, cx, cy){
    
    const add_x = [-1, 0, 0, 1]
    const add_y = [0, -1, 1, 0]


    let safe = w*h // w*h - 바이러스갯수(stack 갯수) - 벽
    // 여기서 bfs 진행
    
    let herelst = JSON.parse(JSON.stringify(lst))
    herelst[ay][ax] = 1
    herelst[by][bx] = 1
    herelst[cy][cx] = 1

    // console.log(herelst)

    let stack = [] // [[h,w]]
    let stackIdx = 0
    for(let i = 0; i<h; i++){
        for(let j=0; j<w; j++){
            
            if(herelst[i][j] == 1){
                safe -= 1 // 벽 갯수 뺐음
            }

            if(herelst[i][j] == 2){
                stack.push([i, j])
            }
        }
    }


    while(stackIdx <= stack.length -1){

        // if(stackIdx >=5){break}
        // console.log(stack, stackIdx)
            
        const [nowh, noww] = stack[stackIdx]  // ==> 바이러스가 있는 위치

        for(let i=0; i<4; i++){
            const calh = nowh + add_y[i]
            const calw = noww + add_x[i]
            if(calh<0 ||calw<0 ||calh>=h ||calw>=w || herelst[calh][calw] !=0 ){
                continue
            }else{ // 리스트 인덱스 문제 없음, 값이 1이면 벽, 0이면 번짐, 2이면 이미 확인 완

                herelst[calh][calw] = 2
                stack.push([calh, calw])
            }
        }

        stackIdx+=1

    }

    safe -= stack.length
    // console.log(herelst, safe)





    if(safe > result){
        result = safe
    }

}

console.log(result)
