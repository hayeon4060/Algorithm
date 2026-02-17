const input = require("fs").readFileSync("../example.txt").toString().split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const caseN = Number(input[0])
let start = 0
// console.log(caseN)
for(let case_idx =0; case_idx<caseN; case_idx++){

    // N은 갯수, M은 타겟
    let [N, M] = input[case_idx*2+1].trim().split(" ").map(Number)

    let card_set = input[case_idx*2+2].trim().split(" ").map(Number).map((im,idx)=>{{ return {im: im,m:idx } }})
    let card_start = 0
    let max_im = input[case_idx*2+2].trim().split(" ").map(Number).sort((a,b)=>{return a-b})// 1,2,3,4  // 1,1,1,1,9

    // console.log(N, M)
    // console.log(card_set, max_im )
    let time = 1


    while(card_set.length>card_start){
        // if(card_start == 10){break}
        // console.log(card_set,card_set.length, card_start)

        const curr_max = max_im[max_im.length-1] // 제일 큰 가중치

        if(card_set[card_start].im < curr_max ){
            
            card_set.push(card_set[card_start])
        }else if(card_set[card_start].m == M){
            // 이거 빠질건데, 
            max_im.pop()
            console.log( time)
            break;

        }else{
            max_im.pop()
            time++
        }

        card_start++


    }





}