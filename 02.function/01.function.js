function addTwo(num) {
    return num + 2;
}
// addTwo("hii") // this is not allowd becuase fn accepting only number 
addTwo(3);
//multiple types 
function signUp(name, amount, isPaid) {
}
signUp("nitin", 1000, true); // we can use multiple type in function  
//returning a particular type 
var responce;
function signUp1(name, amount, isPaid) {
    return "success";
}
responce = signUp1("nitin", 1000, true); // we can use multiple type in function  
console.log(responce);
//default value 
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
};
loginUser("nitin", "n@gmail.com"); // if we not pass any parameter then set it default values in argument 
//setting up returning type 
function sum(num) {
    // return "nitin" // we cannot return string as we specify number aas a return type 
    return 2 + num;
}
var result = sum(2);
console.log(result);
