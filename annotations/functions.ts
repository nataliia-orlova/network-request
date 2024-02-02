//  always put annotation for what function returns
//  arrow function
const add = (a: number, b: number): number => {
return a+b;
};
//  regular named function
function divide(a: number, b: number): number{
    return a /b;

}
//  anonymous function assigned to a variable
const multiply = function(a: number, b: number): number {
   return a *b
}