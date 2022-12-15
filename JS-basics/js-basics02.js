 function areaOfTriangle(b,h)
{
    return 1/2*b*h
}
console.log('Area of Triangle')
console.log(areaOfTriangle(10,2))

/*
function addNumbers(a,b)
{
return a+b
}
console.log(addNumbers(2,9))
function multiplyNumbers(a,b,c)
{
return a*b*c
}
console.log(multiplyNumbers(2,3,4))

*/

function lengthOf(name)
{
return name.length

}
console.log('1. Number of Characters in a string')

console.log(lengthOf('Jacintha'))




function findBiggest(x,y)
{
    if (x>y) return x
    else return y
}
console.log('2. Biggest mumber')
console.log(findBiggest(20, 35))

function findSmallest(w,z)
{
    if (w<z) return w 
    else return z 
}
console.log('Smallest number')
console.log(findSmallest(45,299))

function cubeRoot(yy)
{
    return yy*yy*yy
}
console.log('4. Cube root of')
console.log(cubeRoot(50))

function convertToFeet(inches)
{
    return inches/12
}
console.log('5. Convert to Feet')
console.log(convertToFeet(5))

function convertToFarenheit(C)
{
    return (C * 9/5) + 32
}
console.log('6. Convert Celsius to Farenheit')
console.log(convertToFarenheit(32))


function convertKgtoLb(kg)
{
    return kg * 2.2
}
console.log('Convert Kgs to Lbs')
console.log(convertKgtoLb(78))

function length(city1, city2)
{  if (city1.length > city2.length)
        return city1

}
console.log(length('Washington', 'NewYork'))

function addNumbers(x,y)
{
    return (x+y)
}
console.log(addNumber(2,3))