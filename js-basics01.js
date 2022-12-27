let district =
{
    name: 'Asher',
    library: 'Dom Library, Asher library',
    year: 1950,
    attraction: 'Asher lake, Dom Lake, Tinton Falls'
}
console.log("District: ")
console.log(district.name)
console.log("Library: ")
console.log(district.library)
console.log("Built around: ")
console.log(district.year)
console.log("Famous Attractions: ")
console.log(district.attraction)
console.log("Name & Year Built")
console.log(district.name, ":", district.year)


let movie =
{
    name: "Bahubali",
    actor: ['Prabas', 'Anushka', 'Ramya', 'Nazar'],
    year: 2015,
    release: "Worldwide"
}
console.log(movie.name)
console.log(movie.actor[3])
console.log(movie.release, movie.year)


function length(city1, city2) {
    if (city1.length > city2.length)
        return city1
    else
        return city2
}
console.log(length('NewYork', 'Washington'))


function addNumbers(x,y)
{
    return (x+y)
}
console.log("Add Numbers")
console.log(addNumbers(2,3))
console.log(addNumbers(55,75))
console.log(addNumbers(510,75555))


function subtractNumbers(x,y)
{
    return (x-y)
}
console.log("Subtract Numbers")
console.log(subtractNumbers(15,25))
console.log(subtractNumbers(250,250))
console.log(subtractNumbers(85214,55214))


function subtractNumbers1(x,y)
{
    if(x>y) 
    return (x-y)
    else 
    return (y-x)
}
console.log(subtractNumbers1(15,25))



function multiplyNumbers(zz,yy)
{
    return zz*yy
}
console.log("Multiply Numbers")
console.log(multiplyNumbers(20,44))
for(j=10; j<15; j++)
{
    console.log('Jude')
}

for(k=15; k<25; ++k)
{console.log('Jacintha ' +k)}



