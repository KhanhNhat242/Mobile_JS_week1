//Codeing challenge 7
//1
//2

const Mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: (a, b) => {
        return bmi = a / (b*b)
    },
}

const John = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: (a, b) => {
        return bmi = a / (b*b)
    },
}

//3

if(Mark.calcBMI(Mark.mass, Mark.height) > John.calcBMI(John.mass, John.height))
    console.log(`Mark's BMI ${Mark.calcBMI(Mark.mass, Mark.height) } is higher than Jogn's ${John.calcBMI(John.mass, John.height)}!`)
else 
    console.log(`John's BMI ${John.calcBMI(John.mass, Mark.height) } is higher than Mark's ${John.calcBMI(Mark.mass, Mark.height)}!`)
