const input = require("fs").readFileSync("../example.txt").toString().split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let str = input[0]

// console.log(str)

let stack = []
let giho = []


for(let k of str){
    // console.log(k)
    // console.log("k-----------------", k)

    if(k == '+'){
        gihocheck(k)
    }else if(k== '-'){
        gihocheck(k)

    }else if(k== '*'){
        gihocheck(k)
        
    }else if(k== '/'){
        gihocheck(k)
        
    }else if(k== '('){
        // console.log('(')
        open(k)
        
    }else if(k== ')'){
        // console.log(')')
        close(k)
        
    }else { // 알파벳
        stack.push(k)
    }

    // console.log(stack)
    // console.log(giho)
}
// console.lo/

for(let k of giho.reverse()){
    stack.push(k)
}

stack.forEach(x=>{ process.stdout.write(x)})
function open(){
    // console.log('open')
    giho.push('(')
}
function close(k){
    // console.log('close')
    
    // console.log(stack)
    // console.log(giho)

    while(true){


        if(giho[giho.length -1] == '('){
            giho.pop();
            
            ;break
        }
        else{
            stack.push(giho.pop())
        }

    }
    // giho.push(k)



    //     // const lst = stack.pop()
    //     // if(lst == ('(')){break;}
    // }
    

}
function gihocheck(k){
    
    const giholast = giho[giho.length - 1]
    const giholastlevel = giholevel(giholast)

    if(giholevel(k) > giholastlevel){giho.push(k)}
    else{
        // giho에서 빼야됨   -> 언제까지?
        while(true){
            if(giholevel(giho[giho.length -1])>= giholevel(k) ){
                stack.push(giho.pop())
            }else{break;}

        }
        giho.push(k)
    } 
}

function giholevel(k){ // 높을수록 기호 우선순위
    if(k == null || k == undefined){return 0}
    else if(k == '+' || k == '-'){return 1}
    else if(k == '*' || k == '/'){return 2}
    else if(k == '(' ){return 0}
    else if(k == ')'){return 3}
}