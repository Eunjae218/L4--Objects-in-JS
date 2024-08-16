// create a object called student
let student = {
    first_Name:"Eunjae",
    last_Name:"Yu",
    grade:9,
    skill:"Webdev, Python",
}

let stdIntro = `Hi my name is ${student.first_Name} ${student.last_Name}. I'm in grade ${student.grade}.
Learning ${student.skill}`

console.log(stdIntro)


// using inbuilt object like Math
function meth(number){
    console.log(  
    `1.Math absolute ${Math.abs(number)}
    2.Math cos ${Math.acos(number)}
    3.Math sin ${Math.asin(number)}
    4.Math tan ${Math.atan(number)}`  )
}

console.log(meth(-1))
// syntax of method .methodname(agurment) 
