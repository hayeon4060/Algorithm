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

// result가 no이면 for문 굳이 다 안돌아도 됨. break로 나오면 더 좋아짐 ~


// const lines = require('fs').readFileSync(0).toString().split('\n');
// lines.forEach(line => {
//     if (line === '.') return;
//     const stack = [];
//     let ok = true;
//     for (const c of line) {
//         if (c === '(' || c === '[') stack.push(c);
//         else if (c === ')') { if (stack.pop() !== '(') { ok = false; break; } }
//         else if (c === ']') { if (stack.pop() !== '[') { ok = false; break; } }
//     }
//     console.log(ok && !stack.length ? 'yes' : 'no');
// });
