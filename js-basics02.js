function areaOfTriangle(b, h) {
    return 1 / 2 * b * h
}
console.log('Area of Triangle')
console.log(areaOfTriangle(10, 2))


function addNumbers(a, b) {
    return a + b
}
console.log("Addition")
console.log(addNumbers(252, 952))


function multiplyNumbers(a, b, c, d, e) {
    return a * b * c * d * e
}
console.log("Multiplicaton")
console.log(multiplyNumbers(2, 3, 4, 5, 88))


function lengthOf(name) {
    return name.length
}
console.log('1. Number of Characters in a string')

console.log("Jacintha - ", lengthOf('Jacintha'))
console.log(lengthOf('AbrahamLincoln'))


function findBiggest(x, y) {
    if (x > y)
        return x
    else
        return y
}
console.log('2. Biggest mumber')
console.log(findBiggest(20, 35))


function findSmallest(w, z) {
    if (w < z) return w
    else return z
}
console.log('Smallest number')
console.log(findSmallest(45, 299))

function cubeRoot(yy) {
    return yy * yy * yy
}
console.log('4. Cube root of')
console.log(cubeRoot(50))

function convertToFeet(inches) {
    return inches / 12
}
console.log('5. Convert to Feet')
console.log(convertToFeet(5))

function convertToFarenheit(C) {
    return (C * 9 / 5) + 32
}
console.log('6. Convert Celsius to Farenheit')
console.log(convertToFarenheit(32))


function convertKgtoLb(kg) {
    return kg * 2.2
}
console.log('7.Convert Kgs to Lbs')
console.log(convertKgtoLb(78))


miles = 5252
{
    if (miles > 5000 && miles < 9999)
        console.log('True')
    else
        console.log('False')
}





function resultsOf(Total) {
    isPass = Total > 5000 && Total < 9999

    return isPass
}
console.log("3.Boolean Flag")
console.log(resultsOf(5000))
console.log(resultsOf(4852))
console.log(resultsOf(8525))
console.log(resultsOf(11200))


function rangeOf(miles) {
    withinRange = miles > 5000 && miles < 9999
    return withinRange
}
console.log(rangeOf(12521))


function longestOf(Road1, Road2) {
    if (Road1.length > Road2.length)
        return Road1
    else
        return Road2
}
console.log("10. Longest of 2 Strings")
console.log(longestOf('Greenwood', 'Amboy'))


states = ['Tennessee', 'Massachusetts', 'Florida', 'Pennsylvania', 'Washington', 'California', 'Iowa', 'utah']

console.log(
    states.reduce(function (a, b) {
        return a.length <= b.length ? a : b;
    })
)
/*
mames = ['jude', 'jacintha','daphne', 'Gretel', 'Adelyn']
function reduce(a,b) {
    return a.length <= b.length ? aa:bb; 
        }
        console.log(names.length)let names = ['Jacintha', 'Jude', 'Daphne', 'Gretel', 'Adelyn']
console.log(shortestOf(names))
*/