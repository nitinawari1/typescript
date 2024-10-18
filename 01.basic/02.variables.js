// declraing variables  - we have execpitaly define a variable type 
//string
var Mystring = "nitin awari";
Mystring.toLowerCase(); //string method 
//number 
var Mynum = 33.523;
Mynum.toPrecision(); // number method
//boolean
var loggedIn = true;
loggedIn.valueOf(); // boolean methods 
//Type inference 
//Type inference in TypeScript refers to the compiler's ability to automatically determine the type of a variable based on its initialization value or how it's used in the code. TypeScript uses the contextual information available in the code to infer the most appropriate type for variables, functions, parameters, and return values. This feature helps reduce the need for explicit type annotations while still providing the benefits of static typing.
//typescript automatically detect that this is a number  and that called type infence 
var value = 23.9;
// value = "nitin"  --> it will  give error because value assign as number 
//any 
//In TypeScript, the any type is a special type that represents a dynamic or untyped value. When a variable is declared with the any type, it essentially tells the TypeScript compiler to suspend type checking for that variable, allowing it to have any value and to be used in any way without type constraints. Here's how any is used and why it should be used judiciously:
//do not
var Hero; // here we not defining special type so it assign any type thats mwwans it can store any value 
function getHero() {
    return "thor"; // this fn can return string
    // return 34  // this fn also can return number  ans alsoother data types 
}
Hero = getHero();
// do
var Hero1;
function getHero1() {
    return "thor";
}
Hero = getHero1(); // it will only return string 
