const input = require("fs").readFileSync("../example.txt").toString().split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let num = Number(input[0])

for(let i=1; i<num+1; i++){


    let stack = []
    let result = "YES"
    for(let k of input[i]){
        // console.log(stack)
        if(k == '('){stack.push('(')}
        else if(k==')'){
            let last = stack.pop()
            
            // console.log(stack, last)
            if(last=='('){continue}
            else{
                result= 'NO'
                break;
            }
        }
    }
    
    console.log(stack.length == 0 ? result: 'NO');

}