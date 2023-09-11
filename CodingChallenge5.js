//Coding challenge 5

const Dolphins = [
    [44, 23, 71],
    [85, 54, 41],
]

const Koalas = [
    [65, 54, 49],
    [23, 34, 27],
]

//2

const avg = ([a, b, c]) => {
    return (a+b+c)/3
}

//3

const checkWinner = (a, b) => {
    if(a > b*2)
        console.log(`Dolphin win ${a}vs${b}`)
    else if (b > a*2)
        console.log(`Koala win ${a}vs${b}`)
    else 
        console.log('No team win')
}

checkWinner(avg(Dolphins[0]), avg(Koalas[0]))
checkWinner(avg(Dolphins[1]), avg(Koalas[1]))