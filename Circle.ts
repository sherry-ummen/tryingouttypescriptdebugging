/// <reference path = "IShape.ts" /> 
namespace Drawing { 
   export class Circle implements IShape { 
       constructor(){
           
       }
      public draw() { 
         console.log("Circle is drawn"); 
      }
   } 
}