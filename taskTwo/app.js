const excelToJson = require('convert-excel-to-json');

const result = excelToJson({
    sourceFile: './Appodeal Stack.xlsx'
});

let data = result.Sheet1.slice(2,result.Sheet1.length)

let sum = {}
let check = ['Plane','Train']


data.map(e=> {
    if(check.includes(e.D)){
        if(sum[e.B]){
            sum[e.B] += e.E
        } else {
            sum[e.B] = e.E
        }
    } 
})

console.log(sum)