//creating object  
let user ={
         name : "nitin",
         email: "nitin@gmail.com",
         isActive:true

}

//passing object as argument to the function 
function createUser({name:string , isPaid:boolean}){}
createUser({name:"hitesh" , isPaid:false}) // passing object as a argument



//returning object   
function  createCourse():{name:string , price:number}{
         return {name:"reactjs" , price: 399} // we must have to give value that have to return 
}


//getting error while passing extra parameters

function getUser({name:string , price:number}){    
}
//getUser({name:"nitin" , price:23 , email: "n@gmail.com" } ) // it will give error because in  parameter ther is no one handling this value 

//solution for it  but it wrong syntax 

   let newUser = {name :"nitin" , isPaid:false, email:"h@gmail.com" }      
   function getUser1({name:string , isPaid:boolean}){    
}
getUser1(newUser) // we are able to pass extra values also 



// ----------------------------------------------------------------------

//creating custom data type 
type  User = {
         name:string;
         email:string;
         isActive:boolean
}

//here we create custome type of called as User  and assign to user 
function createUser1(user:User):User{
         return {name:"" , email:"" , isActive:true}
}
createUser1({name:"" , email: " " , isActive:true})   
//by  Tpye alises we can reduce code and able to reuse this User object and function to store values and run it thorugh function  we can call createUser1 multiple time and send diffrent data now think if User is hard-coded 

// Type Aliases
// We’ve been using object types and union types by writing them directly in type annotations. This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.

// A type alias is exactly that - a name for any type. The syntax for a type alias is:

// type Point = {
//   x: number;
//   y: number;
// };
 
// // Exactly the same as the earlier example
// function printCoord(pt: Point) {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's y value is " + pt.y);
// }
 
// printCoord({ x: 100, y: 100 });



//readonly
type animal  = {
         readonly _id : string   // this is not editable 
         name:string
         email:string
         isActive:boolean
         creadentials?:number   // set as a optional if user not asssign value to it  still it fine 
}

const createAnimal : animal = {
         _id  : "1322",
         name : "chakuli",
         email: "n@gmail.com",
         isActive:true
}
createAnimal.name = "nitin"
//createAnimal._id = "12213" // we cannot do like that because _id is already set at readonly mode 


type  cardNumber ={
         cardNumber:string
}

type cardDate ={
         cardDate: string 
}


type cardDetails = cardNumber & cardDate &{
         cvv :number 
}

// It looks like you're defining TypeScript types for representing card details. Let me explain:

// cardNumber: This type represents an object with a single property cardNumber, which is a string.
// cardDate: This type represents an object with a single property cardDate, which is also a string.
// cardDetails: This type represents an object that includes properties from both cardNumber and cardDate, as well as an additional property cvv which is a number.
// By using the & operator, you're creating an intersection type, meaning that an object of type cardDetails must satisfy all the properties defined in cardNumber, cardDate, and also include the cvv property.

// Here's how you might use these types:

// typescript
// Copy code
// const myCard: cardDetails = {
//     cardNumber: "1234567890123456",
//     cardDate: "12/25",
//     cvv: 123
// };
// This myCard object satisfies the cardDetails type because it has all the required properties: cardNumber, cardDate, and cvv.







export{}

