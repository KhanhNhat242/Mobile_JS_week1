//Coding challenge 8
//1
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86]

//2
const tips = []
const totals = []

//3
const calcTip = (a) => {
    if(a > 50 && a < 300)
        return 0.15
    else 
        return 0.2
}
 
bills.forEach((b) => {
    tips.push(calcTip(b))
})

for(let i = 0; i<bills.length; i++){
    totals.push(bills[i]*tips[i] + bills[i])
}

//4

const calAverage = (arr) => {
    let sum = 0

    arr.forEach((e) => {
        sum = sum + e
    })

    return sum/arr.length
}