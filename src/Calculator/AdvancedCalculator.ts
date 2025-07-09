//basic calculator functions

// addition 

function add( a: number =0, b:number =0): number {
    return a+b ;
}

// division
function division( a:number, b:number = 1): number |null{
    return b=== 0? null : a/b;
}
// substraction 

function substraction ( a : number = 0, b: number =0): number{
    return a-b;
}

//multiplication

function multiplication( a:number = 1, b:number = 0): number {
    return a * b;
}

// function signatures (overloads) for calculating squares or summing arrqays

function calculate (value: number): number;
function calculate (value: number[]): number;

// Implement the function to handle both signatures // 10,20,30

function calculate (input: number | number[]): number {
if (typeof input === "number") {
return input**2;
} else {
return input.reduce((acc, val) => acc + val ,0); // acc = 0 val = 10 acc+val = 0+10  // acc = 10 val 20 acc+val 30 tec
}
}


//apply user-defined rule to round numbers (high order functions)

 function

