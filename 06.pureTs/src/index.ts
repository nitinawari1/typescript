class User {
       public  email:string  // we have to declare variable with type for stroring intances values 
         name: string 
         city: string = " "  // city is initialized in the class definition but not explicitly in the constructor, it defaults to an empty string "" or we set default value .

         // public  - public is a accessible from anywhere 
         //private  - private is only accessible from constructor and not from outside  but we can set it value from outside  

          private readonly contry: string =" india "

         constructor(email:string , name :string ){
                  this.email = email
                  this.name = name 
         }
}

const nitin = new User("h@gmail.com" , "nitin")

console.log(nitin.email) // this give email
console.log(nitin.city); // we can access value that not add in constructor also

nitin.city = "nagpur" // we can set values to user propterties 
// nitin.contry  // we cannot set because it set as a readonly 





// shortcut for writing constructor and classes 
class Admin {
  private readonly contry: string =" india " 


  //this will replaces this. syntax and predefined variables  
  constructor (public name: string   , public email:string ){

  }
}



class customer  {
      private  country: string = "india "
  constructor (public name: string   , public email:string  ){

  }

   protected familyMember : boolean = false  // this accesible from sub class 

  private deleteTokon (){
    console.log("token deleted ");
    
  }
   //for  accesing values from class
    get customerEmail ():string {
        return this.email   // this will give email from class intance 
    }

    //set the value to property coming from user 
    set countryName(yourCountry:string ){ // we cannot return any thing in set method 
        this.country = yourCountry
    }

}


//extended class 

class subUser extends customer {
  // it will have access of all property of user class but dont have access of private class   also it access protected  
    isFamilyMember : boolean = true  
}


const  hc = new customer ("Nitin","n@gmail.com" )
const  hcSub = new subUser ("Nitin","n@gmail.com" )

hc.countryName = "india"

console.log(hc)