const input = require("fs").readFileSync("../example.txt").toString().split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const line = input[0]

let queue = []
let start = 0
let last = 0

for(let i=1; i<=line; i++){
    let cmd = input[i].trim().split(" ")

    switch(cmd[0]){
        case 'push':
            queue.push(cmd[1]);
            last++
            break;

        case 'pop':
            if(start > last)
            queue.push(cmd[1]);
            break;
            
        case 'size':
            console.log(last-start)
            break;
            
        case 'empty':
            queue.push(cmd[1]);
            break;
            
        case 'front':
            queue.push(cmd[1]);
            break;
            
        case 'back':
            queue.push(cmd[1]);
            break;
    }

}