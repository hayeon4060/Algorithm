const input = require("fs").readFileSync("../example.txt").toString().split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const strs = input[0].split("")
let stack = []

for(let k of strs){
    // console.log(stack, k)

    if(k=='(' || k=='['){
    
        stack.push(k)
    
    }else if(k == ')'){
        let last = stack.pop()
        // console.log(isNaN(Number(last)), last)
        let num = 0
        if(isNaN(Number(last))){ // ( 인경우
            if(last!='('){console.log(0); return}
            num = 2

        }else{ // 숫자인경우

            num = last * 2
            if(stack.length>0){

                const lst = stack.pop()
                if(lst!='('){console.log(0); return}
            }else{console.log(0); return}
        }

        if(stack.length >0){
            let check = stack.pop()
            if(isNaN(check)){stack.push(check, num)}
            else{
                stack.push(check + num)
            }
        }else{stack.push(num)}

    }else if(k == ']'){

        
        let last = stack.pop()
        let num = 0
        if(isNaN(Number(last))){ // [] 인경우

            if(last!='['){console.log(0); return}
            num = 3

        }else{ // 숫자인경우
            num = last * 3
            
            if(stack.length>0){
                
                const lst = stack.pop()
                if(lst!='['){console.log(0); return}
            }else{console.log(0); return}
        }
        if(stack.length >0){
            let check = stack.pop()
            if(isNaN(check)){stack.push(check, num)}
            else{
                stack.push(check + num)
            }
        
        }else{stack.push(num)}


    }
// console.log(stack)
}

let rs = true
let sum = 0
stack.forEach(x=>{
    sum += x; 
    if(isNaN(x)){
        rs = false
        return;
    }
})
console.log(!rs ? 0 :sum)