
//Interfaces in TypeScript can be used to define the structure that classes must adhere to. This helps in ensuring that classes have certain properties and methods implemented. Here's how you can use interfaces with classes in TypeScript:

interface takePhoto {
         cameraMode: string,
         filter: string,
         burst: number
}
interface story {
         createStory() : void
}


class instagram implements takePhoto { //after implemeting  interface with class then it must to define interface method and variables  in class contructor 
         constructor( 
                  public cameraMode: string,
                  public filter: string,
                  public burst: number , 
         
         ) {

         }
}


class youtube implements takePhoto , story  {
         constructor( 
                  public cameraMode: string,
                  public filter: string,
                  public burst: number , 
                  public short : string
         
         ) {

         }

         createStory(): void {
              
         }
}