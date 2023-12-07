
// const i

// console.log(i)

                            // var         let       const  

/*  MultiDeclaration           Yes         No        No                      
    MultiInitialization        Yes         yes       No
    Hoisting                   Yes         No        No
    Declaration and 
    initialization in same 
    Line compulsory            No          No        Yes
*/                      


/*  Static and Dynamic :
    Like in c c++ you have to tell first the type of datatype before declare a variable
    it is called static But in javascript you can declare a variable and give any type of 
    value to it wether its number, string or any other type.. 

    int i = 10
    var i = 10, var i = "java"

    Hoisting :
    When you declare a variable with var type no matter how much code you write before this
    it always go on the top and run first
 */



// var a = 10
// var b = 11
// a = a+ 1
//  console.log(++a)


// -----------------------------------------------

// let car = {
//         brand: "volvo",
//         model: 2023,
//         price: 5500000,

//         feature: {
//             airBag: true,
//             speed : 200
//         }
// }

// let {brand:company} = car   //Change key name
//  car['model'] = 2022;       // Change key value


//  console.log(company)
//  console.log(car.model)

// -----------------------------------


// let users = [{
//     name:"ankush",
//     frnd:[
//         "ankit","ajay"
//     ]
// },{
//     name:"ankit",
//     frnd:[
//         "ayush","ajay1"
//     ]
// },{
//     name:"ayush",
//     frnd:[
//         "ajay","ajay2"
//     ]
// },{
//     name:"ajay",
//     frnd:[
//         "anjaykit","ajay3"
//     ]
// }]

// console.log(users[1].name)

// let [a,b,c,d] = users

// let {name} = a

// console.log(name)

// for(let i =0;i<4;i++)
// {

//     for(let j=0;j<2;j++)
//     {
//         console.log(users[i].frnd[j])

//     }
// }



// let car = [
//     {model: 2018},
//     {brand:"volvo"},
//     {feature: "All",
//      featureList:["digitalScreen","autoWindow"]},
//     {Price:"$3000"}
// ]


//     for(i=0; i<4; i++)
//     {
//         console.log(car[i]);
//         if(i==2)
//         {
//             console.log(car[i].featureList[0]);
//             console.log(car[i].featureList[1]);
//         }
//     }
//     console.log(car[4]);



// let users = [
//     {
//         name:"ankush",
//         sname:"saxena"
//     },
//     {
//         name:"dheeraj",
//         sname:"jain"
//     }
// ]


// for(let i=0;i<users.length;i++)
// {
//     let dummy = users[i].name.slice(2, users[i].name.length);
//     let dummys = users[i].sname.slice(users[i].sname.length - 2, users[i].sname.length);
    
//     let dummy2 = users[i].name.slice(0,2);
//     let dummys2 = users[i].sname.slice(0, users[i].sname.length - 2);
    
//     let first = dummys + dummy;
//     let second =  dummys2 + dummy2

//     console.log(first)
//     console.log(second)
// }

// ---------------------------------

// users.map((user,i,arr) =>{

//     let dummy = user.name.slice(2,user.name.length);
//     let dummys = user.sname.slice(user.sname.length-2,user.name.length)
    
//     let first = dummys + dummy

//     let dummy2 = user.name.slice(0,2)
//     let dummys2 = user.sname.slice(0,user.sname.length-2)

//     let second = dummys2 + dummy2

//     console.log(first)
//     console.log(second)
// })




// Taking an array of Student object
let students = [
	{ id: 1, name: "Anish", sports: "Cricket" },
	{ id: 2, name: "Smriti", sports: "Basketball" },
	{ id: 3, name: "Rahul", sports: "Cricket" },
	{ id: 4, name: "Bakul", sports: "Basketball" },
	{ id: 5, name: "Nikita", sports: "Hockey" }
]

let GetStdnt = students.filter(function(student) 
{
    return student.sports.toLowerCase() == "Basketball".toLowerCase();
})

console.log(GetStdnt);