const readline = require('readline');
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = []

rl.on("line", function(line){
    input.push(line.split(' '))
}).on("close", function(){
    let T = input.shift()
    let nums = input[0].slice()
    nums.sort((a, b) => a - b)
    let nums1 = []
    nums.forEach((element) => {
        if (!nums1.includes(element)) {
            nums1.push(element);
        }
    })
    let compression = []
    for (i=0; i<T; i++) {
        compression.push(nums1.indexOf(input[0][i]))
    }
    console.log(compression.join(' '))
})