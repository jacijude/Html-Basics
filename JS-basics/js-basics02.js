/* function areaOfTriangle(b,h)
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


function lengthOf(name) {
    return name.length

}
console.log('1. Number of Characters in a string')

console.log(lengthOf('Jacintha'))



function findBiggest(x, y) {
    if (x > y) return x
    else return y
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
console.log('Convert Kgs to Lbs')
console.log(convertKgtoLb(78))



miles = 2000
if (miles > 5000 && miles < 9999) { console.log('True') }
else
    console.log("3. Boolean Flag")
console.log('False')


function isPass(Total) {
    score = Total > 5000 && Total < 9999
    return score
}

console.log(isPass(5000))

/*
function withinRange(miles)
{
    return miles > 5000 && miles < 9999
}
console.log(withinRange(miles)) 
/*
for(j=10; j<15; j++)
{
    console.log('Jude')
}
*/
//for(k=15; k<25; ++k)
//{console.log('Jacintha ' +k)}

function longestOf(Road1, Road2) {
    if (Road1.length > Road2.length)
        return Road1
    else
        return Road2
}
console.log("10. Longest of 2 Strings")
console.log(longestOf('Greenwood', 'Amboy'))

function shortestOf(names) {
    console.log(names)
    console.log(names.length)

    for (i = 0; i <= names.length - 1; i++) {
        console.log(names[i])
        console.log(names[i].length)

    }
    return names

}
let names = ['Jacintha', 'Jude', 'Daphne', 'Gretel', 'Adelyn']
console.log(shortestOf(names))


