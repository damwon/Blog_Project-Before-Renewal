const readline = require('readline');
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = []

rl.on("line", function(line){
    input.push(line.split(' '))
}).on("close", function(){
    let temp = input.shift()
    let T = parseInt(temp.shift()) 
    let sum = parseInt(temp.shift())
    let cnt = 0
    console.log(coin(T,sum,cnt))
})

function coin(T,sum,cnt) {
    for (let i=T-1; i>=0; i--) {
        if(sum===0) {
            return cnt
        }
        if (parseInt(sum/parseInt(input[i][0])) > 0) {
            cnt += parseInt(sum/parseInt(input[i][0]))
            sum = sum%parseInt(input[i][0])
            console.log(cnt, sum)
        }
    }
}