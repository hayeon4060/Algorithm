const input = require("fs").readFileSync("../example.txt").toString().split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const node_num = Number(input[0])
const line_num = Number(input[1])

let lst = Array.from( {length: node_num+1} , ()=>[]) // 이중배열을 만듦. 참고로 new array는 잘 쓰지 말자 ㅜ
let check = Array.from({length: node_num+1}, ()=>{return false})
let queue = []
let queue_point = 0
let result = []

for(let i=2; i<line_num + 2; i++){
    const [st, ed] = input[i].split(" ").map(Number)

    if( !lst[st].includes(ed) ){ 
        lst[st].push(ed)
    }

    if( !lst[ed].includes(st) ){ 
        lst[ed].push(st)
    }


}
queue.push(1)
check[1] = true;

while(queue.length > queue_point){
    const st_n = queue[queue_point]
    result.push(st_n)
    let adding = lst[st_n].filter(x=>{return check[x] == false})

    queue.push(...adding)
    adding.forEach(x => {check[x] = true;});

    queue_point ++
    
}

console.log(result.length - 1 )
