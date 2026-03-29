const input = require("fs").readFileSync("./example.txt").toString().split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let lst = []
let RGlst = []
input.slice(1).forEach(x=>{ if(x.trim()!=''){
    lst.push(x.trim().split("") ); 
    RGlst.push(x.trim().split("") )
}})
// console.log(RGlst)
const [w,h] = [lst[0].length, lst.length]

let ori_result = 0
let RG_result = 0

for(let i = 0; i<h; i++){
    for(let j=0; j<w; j++){
        if(lst[i][j] != '0'){
            BFS(i,j)
            ori_result+=1
        }
    }
}
// console.log()


for(let i = 0; i<h; i++){
    for(let j=0; j<w; j++){
        if(RGlst[i][j] != '0'){
            RGBFS(i,j)
            RG_result+=1
        }
    }
}
console.log(ori_result, RG_result)

    

function BFS(i, j){

        
    const add_x = [-1, 0, 0, 1]
    const add_y = [0, -1, 1, 0]
    let cur_cor = lst[i][j]

    let stack = []
    stackIdx = 0
    stack.push([i, j])

    while(stack.length -1 >= stackIdx){    

        const [curh,curw] = stack[stackIdx]
        // const cur_color = lst[curh][curw]

        for(let i=0; i<4; i++){
            const [calh, calw] = [curh + add_y[i], curw + add_x[i]]

            if(calh<0 || calw<0 || calh>=h || calw >= w){continue} // 인덱싱 에러
            else if(cur_cor == lst[calh][calw]){
                stack.push([calh, calw])
                lst[calh][calw] = '0'
            }
        }
        stackIdx++
        
    }


}



function RGBFS(i, j){

        
    const add_x = [-1, 0, 0, 1]
    const add_y = [0, -1, 1, 0]
    let cur_cor = RGlst[i][j]

    let stack = []
    stackIdx = 0
    stack.push([i, j])

    while(stack.length -1 >= stackIdx){    

        const [curh,curw] = stack[stackIdx]

        for(let i=0; i<4; i++){
            const [calh, calw] = [curh + add_y[i], curw + add_x[i]]

            if(calh<0 || calw<0 || calh>=h || calw >= w){continue} // 인덱싱 에러
            else if(cur_cor == RGlst[calh][calw]){
                stack.push([calh, calw])
                RGlst[calh][calw] = '0'
            }else if((cur_cor == 'R' && RGlst[calh][calw] == 'G') ||  cur_cor == 'G' && RGlst[calh][calw] == 'R'){
                stack.push([calh, calw])
                RGlst[calh][calw] = '0'
            }
        }
        stackIdx++
        
    }


}