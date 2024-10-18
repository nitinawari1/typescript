//defineing aray in two way but they are same not diffrent in term of vode efficiency

//first way
  const superHeros : string [] = []

  //second way
  const heroPower : Array <number>  = []

  superHeros.push("spiderman")
  heroPower.push(23)


  //creating array of objects 
  //custom type array

  type User ={
         name: string
         isActive : boolean
  }

  const allUsers:User [] = []

  allUsers.push({name:"nitin" , isActive:true })


  const MLmodels:number [] [] = [   //2-D array of numbers we cannot add others types 
         [255,255,255] , [255,255,255]
  ]



  //Tuple Types
//A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.

let tuser : [string , number , boolean ] = ["nitin" , 123 , true]  // element and type must be in order 

let rgb : [number , number , number] = [255 , 134 , 234]


//using anither type 

type user = [number , string  ]

const newuser : user = [ 123 , "nitin"  ] // we use type user 
//but there is a fault we can overwrite values
newuser[0] = 456;
//and also we can push the values and also use other methods  and this will  break the concept of tuple
//newuser.push(true)  // this not working 
newuser.push(12) // this working 



// multiple choice   
enum seatChoice {
       AISLE,
       MIDDLE,
       WINDOW = 12, // we can assign number to it 
       FOURTH  // it will  13 
}
let mySeat = seatChoice.AISLE //  get number  of this  value 

console.log(seatChoice[mySeat]) // print value 
 


//const enum reduce the line of code  in  compaling time 
const enum seatChoice1 {
       AISLE = "aisle", // we can also assign string but after we have to assign value to all 
       MIDDLE = "middle",
       WINDOW = "window" ,
       FOURTH  = 0
}

let seat = seatChoice1.AISLE
console.log(seat)// output -->aisle
//onsole.log(seatChoice1[seat]) // it give error  //we cannot access value in const enum 