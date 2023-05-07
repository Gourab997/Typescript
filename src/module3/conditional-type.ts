type a1 = string;
type a2 = a1 extends string ? string : number;

//nested ternary
type a3 = undefined
type a4 = a3 extends string ? string : a3 extends number ? number : boolean;