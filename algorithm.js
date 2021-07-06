const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const strToNum = (str) =>
    str.split(' ').map((numStr) => Number(numStr))

let input = []

rl.on("line", function(line){
    input.push(line)
}).on("close", function(){
    let n = input.shift()
    let factors = input.map((str)=>strToNum(str))[0]
    factors.sort((a,b) => a - b)
    console.log(factors.slice(0,1)*factors.slice(-1))
})