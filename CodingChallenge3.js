//Coding challenge 3

const Dolphins = [
    [96, 108, 89],
    [97, 112, 101],
    [97, 112, 101], 
]
const Koalas = [
    [88, 91, 110],
    [105, 95, 123],
    [105, 95, 106],
]

//1

const avg = ([a, b, c]) => {
    return (a+b+c)/3
}

//2

if(avg(Dolphins[0]) > avg(Koalas[0]))
    console.log('Dolphin win')
else if(avg(Dolphins[0]) < avg(Koalas[0]))
    console.log('Koala win')
else
    console.log('draw')

if(avg(Dolphins[1]) > avg(Koalas[1]))
    console.log('Dolphin win')
else if(avg(Dolphins[1]) < avg(Koalas[1]))
    console.log('Koala win')
else
    console.log('draw')

//3

if((avg(Dolphins[0]) > avg(Koalas[0])) && (avg(Dolphins[0]) >= 100))
    console.log('Dolphin win')
else if((avg(Dolphins[0]) < avg(Koalas[0])) && (avg(Koalas[0]) >= 100))
    console.log('Koala win')
else
    console.log('not has team win')

if((avg(Dolphins[1]) > avg(Koalas[1])) && (avg(Dolphins[1]) >= 100))
    console.log('Dolphin win')
else if((avg(Dolphins[1]) < avg(Koalas[1])) && (avg(Koalas[1]) >= 100))
    console.log('Koala win')
else
    console.log('not has team win')