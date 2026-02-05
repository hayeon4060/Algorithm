const input = require("fs").readFileSync("../example.txt").toString().split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let strs = input[0].replaceAll("()", 1).split("")
// let strs = []
let stack = []
let rs = 0

// console.log(strs)

for(let k of strs){
    // console.log("------------------",stack,"----k: ", k,"----rs: ", rs)
    if(k=='('){stack.push(k)}
    else if(!isNaN(Number(k))){  // 숫자인 경우

        if(stack.length <=0){stack.push(Number(k))}
        else{

            let last = stack.pop()
            if(!isNaN(Number(last))){stack.push(Number(last) +Number(k)  )}
            else{stack.push(last, Number(k))}
        }
    } else if(isNaN(Number(k))){ // )인 경우
        // stack.push(')')
        num = stack.pop()
        rs += num +1 
        stack.pop()
        
        
        let last = stack.pop()
        if(!isNaN(Number(last))){stack.push(Number(last) +Number(num)  )}
        else{stack.push(last, Number(num))}




    }
    
}
// console.log(stack)
console.log(rs)

// 1차 메모리 초가 -> 리스트 하나로 풀도록 수정함