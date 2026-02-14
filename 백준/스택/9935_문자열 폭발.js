const input = require("fs").readFileSync("../example.txt").toString().split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");


let str = input[0].trim()
let bam = input[1].trim()
let lastk = bam[bam.length-1]



let remain = [] // 
// let stack = [] // c4 넣기

for(let k of str){

    remain.push(k)

    // if(bam.includes(k)){
    //     stack.push(k)
    // }else{
    //     stack.pop()
    // }
    // console.log(remain, stack)

    if(k == lastk ){ // 마지막 글자가 같을때
        let isBam = true
        let checkingBam = []
        
        for(let idx in bam){
            const remainlast = remain.pop()
            checkingBam.push(remainlast)
            if(bam[bam.length -1 -idx] != remainlast){
                isBam = false; break;
            }
        }
        // console.log(checkingBam, isBam, remain)
        if(isBam == false){
            remain.push(...checkingBam.reverse())
        }

    }


    


}

// console.log(remain)
console.log(remain.length> 0 ? remain.join("") : 'FRULA')
