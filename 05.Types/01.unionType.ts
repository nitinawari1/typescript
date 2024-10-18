// means we can set multiple data types at a time through |

let score : number | string | boolean = 23
score = "55" 
score = true   
console.log(score);

//use of this type

type User ={
         name : string
         id:number
}
type admin ={
         userName : string
         id:number
}
//we can set them both type         
let nitin  : User | admin ={name:"nitin" , id:123}

nitin = {userName:"akash" , id:123}


function getDbId (id:number | string){
//  getDbId.toLowerCase()  //this is no valid because we donest know number or string comming for this first we check type
         if (typeof id === "string") {
                  id.toLowerCase() // now it confirm that it is a  string because we already check 
         }
}
//both are allwed 
getDbId(23)
getDbId("22")




//array with union data types

//single type 
let data: string[]  = ["a" ,"v" ,"i"];

//either  type  choose one string or number 
let data2 : string[] | number[] = [1,2,3,4,5]

//mixed array 
let data3 : (string | number |boolean)[] =  [1, "1" , true , false , "ki"]       



//strik mode

let pie:3.14 = 3.14  // now we cannot set value other than 3.14
// pie = 2  //wrong 


let seatAllotment  :  "aisle" | "middle" | "window"  // how are we strictly  set values user can set only one of them
seatAllotment = "window" // it allow 
// seatAllotment = "crew" // this not allwod 







export{}







