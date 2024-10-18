function addTwo(num:number) {
         return num + 2
}
// addTwo("hii") // this is not allowd becuase fn accepting only number 
addTwo(3);



//multiple types 
function signUp( name : string , amount:number , isPaid:boolean){     
}
signUp("nitin" , 1000 , true) // we can use multiple type in function  


//returning a particular type 

let responce : string;
function signUp1( name : string , amount:number , isPaid:boolean ){
        return "success"
}
 responce = signUp1("nitin" , 1000 , true) // we can use multiple type in function  
 console.log(responce);
 

 //default value 
 let loginUser = (name:string , email:string , isPaid:boolean = true)=>{ // ispaid set default value if will not pass vaule as parameter still it can run 
 }
 loginUser("nitin" , "n@gmail.com") // if we not pass any parameter then set it default values in argument 


 //setting up returning type 

 function sum(num:number):number{
         // return "nitin" // we cannot return string as we specify number aas a return type 
         return 2 + num
  }
 let result = sum(2)
 console.log(result)


 //arrow function retuning string
 const getValue =(s:string):string =>{
        return "in"+ String
 } 

 getValue("nit")



 //array context switching
 const heros = ["thor" , "ironman" , "antman" , "hulk"]
//  const heros  = [1,2,3,4]


//this heros are automatically switch between string and number based on array 
heros.map((hero)=>{
        return `hero is ${hero}`
        return 2  // here we return all type of value like string , number ,boolean becuase it not strick typecheck
})

//exceptly defining type 
heros.map((hero : string )=>{ //now this not accept number as argument from array it only need string 
        return `hero is ${hero}`
})

//returning specific type 
heros.map((hero):number=>{
        // return `hero is ${hero}` // it will  give error 
        return 2 // it will  only return number not string 
})


//we explicitly menthoning that function returninng void 
function consoleError (errmsg : string ):void{
        console.log(errmsg);
       
}

function handleError (errmsg:string ): never { // 
 throw new Error(errmsg)
}