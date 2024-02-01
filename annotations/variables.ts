//  type annotation
const apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

//  build in objs

let now: Date = new Date();

//  array
//  says we are going to have an array of strings
let colors: string[] = ['red', 'green', 'blue']

let myNumbers: number[] = [1,2,3,4]

//  classes 
class Car {

}
//  refering to the type of class Car
//  capital - refers to the type
//  lower case - refers to the instance of a Car - which is new Car()
let car: Car = new Car()

//  object literal
//  create an object and add type annotation to it
let point: {x: number; y: number;} = {
    x: 10,
    y: 20
}

//  functions
const logNumber:(i: number) => void = (i: number)=> {
    console.log(i)
}
//  define what type of data goes into function as arguments 
//  and after => say what this function is going to return

//  when to use annotations
//  1) function that returns any type
const json = '{"x":10, "y": 20}';
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates)
