//Coding challenge 1
//1

const Mark =  [
    {
        mass: 78,
        height: 1.79,
    },
    {
        mass: 95,
        height: 1.88,
    },
]

const John = [
    {
        mass: 92,
        height: 1.95,
    },
    {
        mass: 85,
        height: 1.76
    },
]

//2

const handleFormula = (a, b) => {
    return bmi = a / (b*b)
}

var markHigherBMI 

//3

if(handleFormula(Mark[0].mass, Mark[0].height) > handleFormula(John[0].mass, John[0].height))
    markHigherBMI = handleFormula(Mark[0].mass, Mark[0].height)
else 
    markHigherBMI = handleFormula(John[0].mass, John[0].height)

if(handleFormula(Mark[1].mass, Mark[1].height) > handleFormula(John[1].mass, John[1].height))
    markHigherBMI = handleFormula(Mark[1].mass, Mark[1].height)
else 
    markHigherBMI = handleFormula(John[1].mass, John[1].height)

// Coding challenge 2
//1
if(handleFormula(Mark[0].mass, Mark[0].height) > handleFormula(John[0].mass, John[0].height))
    console.log("Mark's BMI is higher than John's!")
else 
    console.log("John's BMI is higher than Mark's!")

if(handleFormula(Mark[1].mass, Mark[1].height) > handleFormula(John[1].mass, John[1].height))
    console.log("Mark's BMI is higher than John's!")
else 
    console.log("John's BMI is higher than Mark's!")

//2

if(handleFormula(Mark[0].mass, Mark[0].height) > handleFormula(John[0].mass, John[0].height))
    console.log(`Mark's BMI(${handleFormula(Mark[0].mass, Mark[0].height)}) is higher than John's(${handleFormula(John[0].mass, John[0].height)}) !`)
else 
    console.log(`Mark's BMI(${handleFormula(John[0].mass, John[0].height)}) is higher than John's(${handleFormula(Mark[0].mass, Mark[0].height)}) !`)

if(handleFormula(Mark[1].mass, Mark[1].height) > handleFormula(John[1].mass, John[1].height))
    console.log(`Mark's BMI(${handleFormula(Mark[1].mass, Mark[1].height)}) is higher than John's(${handleFormula(John[1].mass, John[1].height)}) !`)
else 
    console.log(`Mark's BMI(${handleFormula(John[1].mass, John[1].height)}) is higher than John's(${handleFormula(Mark[1].mass, Mark[1].height)}) !`)

