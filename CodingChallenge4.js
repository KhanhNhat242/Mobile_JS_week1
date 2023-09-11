//Coding challenge 4

const bill = [275, 40, 430]

//1
const handleTip = (a) => {
    if(a > 50 && a < 300)
        return 0.15
    else 
        return 0.2
}

//2

console.log(`The bill was ${bill[0]}, the tip was ${handleTip(bill[0])}, and the total value ${bill[0] + bill[0]*handleTip(bill[0])}`)
