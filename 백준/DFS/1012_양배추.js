const input = require("fs").readFileSync("../example.txt").toString().split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const problem_num = Number(input[0])
let now_line = 1


const x_add = [1, 0, -1, 0]
const y_add = [0, 1, 0, -1]

for(let problems = 0; problem_num > problems; problems++){

    let [wd, hei, bugs] = input[now_line].split(" ").map(Number)
    let lst = Array.from({length: hei}, ()=>{return Array.from({length: wd}, ()=>{return 0})})
    for(let i=0; i<bugs; i++){
        const [x,y] = input[i + now_line + 1].split(" ").map(Number) 
        
        lst[y][x] = 1
    }
    now_line += bugs + 1
    let cnt = 0

    for(let i=0; i<hei; i++){
        for(let j = 0; j<wd; j++){
            if(lst[i][j] == 1){

                // 여기서 bfs 진행
                // 1을 2로 올려버려 ㅋ


                let queue = []
                // let result = []
                let queue_point = 0
                queue.push({x: j, y:i})
                lst[i][j] = 2
                while(queue.length >= queue_point + 1){

                    let stand = queue[queue_point]

                    // result.push(stand)
                    for(let addIdx=0; addIdx<4; addIdx++){
                        const idx_x = stand.x + x_add[addIdx]
                        const idx_y = stand.y + y_add[addIdx]

                        if(idx_x <0 || idx_x>=wd || idx_y<0 || idx_y>= hei ||lst[idx_y][idx_x] !=1 ){continue}

                        queue.push({x: idx_x, y:idx_y})
                        lst[idx_y][idx_x] =2
                    }

                    queue_point++
                    


                }

                cnt ++
                

            }
        }
    }

    
    console.log( cnt)
    // console.log("정답", cnt)



}