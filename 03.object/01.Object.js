"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//creating object  
var user = {
    name: "nitin",
    email: "nitin@gmail.com",
    isActive: true
};
//passing object as argument to the function 
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "hitesh", isPaid: false }); // passing object as a argument
//returning object   
function createCourse() {
    return { name: "reactjs", price: 399 }; // we must have to give value that have to return 
}
//getting error while passing extra parameters
function getUser(_a) {
    var string = _a.name, number = _a.price;
}
//getUser({name:"nitin" , price:23 , email: "n@gmail.com" } ) // it will give error because in  parameter ther is no one handling this value 
//solution for it  but it wrong syntax 
var newUser = { name: "nitin", isPaid: false, email: "h@gmail.com" };
function getUser1(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
getUser1(newUser); // we are able to pass extra values also 
//here we create custome type of called as User  and assign to user 
function createUser1(user) {
    return { name: "", email: "", isActive: true };
}
createUser1({ name: "", email: " ", isActive: true });
var createAnimal = {
    _id: "1322",
    name: "chakuli",
    email: "n@gmail.com",
    isActive: true
};
createAnimal.name = "nitin";
