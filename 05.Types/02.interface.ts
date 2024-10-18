interface user {
         readonly dbId :number,
         email:string,
         userId:number,
         googleId? : string 
         //defining a method  in two ways 
         // startail : () => string 
         startail () : string     // must return the string 
         getCoupon (couponName : string  , value : number) : number 

}



const nitin : user = {
         dbId : 22,email : "n@gmail.coom" , userId :222432 ,
         startail : () =>{
                  return " returnning string for user method"
         },
         getCoupon : (name:"bonus" , value: 23 ) => {
                  return 10
         }
         ,githubToken : 12345 // giving value to reopen interface 
}  

//reopening interface and adding value 
interface user{
   githubToken:number
}



// extend


interface users {
         id: number ,     
}
interface dailyUser {
   
         logedIn:boolean  
}

const samir : users  = { id:12 }

interface admin extends users , dailyUser {  // we can extends with many interface 
         role : "admin" | "developer"  | "user"
}       

const chakuli : admin  = {
         id : 123 , logedIn:true ,  role:"admin" // putting three interface value combined 
}