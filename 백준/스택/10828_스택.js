const input = require("fs").readFileSync("../example.txt").toString().split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const num_of_line = input.shift() // shift 지양하라고 ~~!
let stack = []

for( let i=0; i<num_of_line; i++ ){
    My_Stack(input[i].trim().split(" "))
}

function My_Stack(lines){   


    switch (lines[0]) {

        case 'push':
            stack.push(lines[1])
            break;

        case 'pop':
            console.log(stack.length == 0 ? -1 :stack.pop())
            break;

        case 'top':
            console.log(stack.length == 0 ? -1 : stack[stack.length -1]);
            break;

        case 'size':
            console.log(stack.length);
            break;

        case 'empty':
            console.log(stack.length == 0 ? 1 : 0);
            break;

        default:
            console.log(lines[0], "뭐야 default")
            break;
    }
}

