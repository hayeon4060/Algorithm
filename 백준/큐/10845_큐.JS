const input = require("fs").readFileSync("../example.txt").toString().split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const line = input[0]

let queue = []
let start = 0
let answer = []

for(let i=1; i<=line; i++){
    let cmd = input[i].trim().split(" ")
    // console.log(queue, cmd[0], cmd[1])

    switch(cmd[0]){
        case 'push':
            queue.push(cmd[1]);
            break;

        case 'pop':
            if(queue.length == start){answer.push(-1)}
            else{answer.push(queue[start++])}
            break;
            
        case 'size':
            answer.push(queue.length - start)
            break;
            
        case 'empty':
            answer.push(queue.length ==start ? 1 : 0)
            break;
            
        case 'front':
            answer.push(queue.length ==start ? -1 : queue[start]);
            break;
            
        case 'back':
            answer.push(queue.length ==start ? -1 : queue[queue.length-1]);
            break;
    }

}
// console.log(answer)
console.log(answer.join("\n"))