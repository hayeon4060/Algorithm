const input = require("fs").readFileSync("../example.txt").toString().split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");


let idx = 0
while(true){
    let [w, h] = input[idx++].split(" ").map(Number);

    if(w === 0 && h === 0) break;

    let lst = [];

    for(let i=0; i<h; i++){
        lst.push(input[idx++].split(" ").map(Number));
    }

    bfs(w, h, lst);
}

function bfs (w,h,lst){
    // console.log(w, h, lst)
    
    let alpha_x = [-1,-1,-1,0,0,1,1,1]
    let alpha_y = [-1,0,1,-1,1,-1,0,1]

    // console.log(w, h, lst)
    let num = 0
    for(let y =0; y<h; y++){
            
        for(let x =0; x<w; x++){


            if(lst[y][x] !=1){continue}
            // console.log("---------------------------------------")
            // console.log(y, x, num)
            // console.log(lst)
            let stack = [{x: x, y:y}]
            let st_idx = 0
            num++
            while(stack.length > st_idx){
                // console.log(stack,stack.length, st_idx)

                const st = stack[st_idx];
                lst[st.y][st.x] = 2
                st_idx++ 


                for(let alpha in alpha_x){
                    const tox = st.x + alpha_x[alpha]
                    const toy = st.y + alpha_y[alpha]
                    // console.log("check___________", toy, tox)


                    if(tox <0 || tox >= w || toy < 0 || toy >=h){continue}
                    else if(lst[toy][tox] !=1 ){continue}

                    stack.push({x: tox, y:toy})
                    lst[toy][tox] = 2;



                }
            }









        }
    }
    console.log(num)
}