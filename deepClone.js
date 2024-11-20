// // const anotherPerson={...person}
// const anotherPerson=new person()
// Object.assign(anotherPerson,person)
// // const anotherPerson=JSON.parse(JSON.stringify(person))
// anotherPerson.name='Shivam'
// anotherPerson.educationDetail.yearOfPassOut=2025
// console.log(person[0].value)
// console.log(anotherPerson)

// anotherPerson.__proto__ = person;
// const anotherPerson={}
// for(let key in person){
//     anotherPerson[key]=person[key]
// }
// anotherPerson.name='Shivam'
// anotherPerson.educationDetail.yearOfPassOut=2025 
// console.log(anotherPerson)
// console.log(person)
// console.log(person.name.length)
// console.log(typeof 45)

const person={
    name:"Rohit",
    yearOfBirth:1995,

    
    educationDetail:{
        lastDegree:"B.tech",
        collegeDetail:  {
            name:"Krishna Engineering College",
            Address:"Mohan Nagar Ghaziabad Uttar Pradesh , Near Hindon Airbase"
        },
        universityName:"Dr. A.P.J Abdul kalam Technical University",
        yearOfPassOut:2024
    },
    skills:["Java","DBMS","SQL","React","Data Structures"]
}
const anotherPerson={}
function deepClone(obj , anotherObject){
    for(let keys in obj){
        if(Array.isArray(obj[keys])){
            // anotherObject[keys]=[...obj[keys]]
            anotherObject[keys]=[]
            deepClone(obj[keys],anotherObject[keys])
        }
        else if(typeof obj[keys] != 'object'){
            anotherObject[keys]=obj[keys]
            // console.log(keys)
        }
        else{
            // anotherObject[keys]={...obj[keys]}
            anotherObject[keys]={}
            deepClone(obj[keys],anotherObject[keys])
        }
    }
}
deepClone(person,anotherPerson)
anotherPerson.name='Shivam'
anotherPerson.educationDetail.yearOfPassOut=2025 
anotherPerson.educationDetail.collegeDetail.Address="Delhi"
console.log(anotherPerson)
console.log(person)
