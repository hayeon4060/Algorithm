const input = require("fs").readFileSync("../example.txt").toString().split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");


for(let line=0; line<input.length; line++){
    if(input[line] == '.'){break}
    Check(input[line])
}

function Check(line){
    let stack = []
    let result = 'yes'

    for(let x of line){
        if(x == '[' || x == '('){stack.push(x)}
        else if(x == ']'){
            if( stack[stack.length-1] == '['){ stack.pop()}
            else{result = 'no'}
            
        }else if(x == ')'){
            if( stack[stack.length-1] == '('){ stack.pop()}
            else{result = 'no'}
            
        }
    }
    console.log(stack.length == 0 && result=='yes' ? 'yes' : 'no')
}