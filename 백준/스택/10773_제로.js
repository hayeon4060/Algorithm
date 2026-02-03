let input = require("fs").readFileSync("../example.txt").toString().split("\n");
// let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const how_many = input.shift(0) 
// 배열 전체의 인덱스를 한칸씩 땡기는거기 때문에 좋지 않음 O(N) 걸림

// 방법 1.  const [how_many, ...numbers] = input;    
// 방법 2. 또는 how_many = Number(input[0]); 이후 for문 i를 1부터 시작
// 방법 3. lst = input.slice(1); 사용.  1번부터 끝까지 복사. shift보다 빠름 
 
let stack = []

for(let i=0; i<how_many; i++){
    const number = Number(input[i])  // 애초에 입력 받을때부터 number로 받으면 빨라짐
    if(number==0){
        stack.pop()
    }else{

        stack.push(number)
    }
}

const sum = stack.reduce((sum, current)=>{return sum + current }, 0)
console.log(sum)


// const [k, ...nums] = require('fs').readFileSync(0).toString().split(/\s/).map(Number);
// const stack = [];
// nums.forEach(n => n ? stack.push(n) : stack.pop());
// console.log(stack.reduce((a, b) => a + b, 0));
