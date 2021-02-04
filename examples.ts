type StringNum = string | number;

let character: string = 'hello';

let inputs = document.querySelectorAll('input');

let isBlackBelt = false;

const circ = (diameter: number) => (diameter * Math.PI);

let names: string[] = ['john', 'jay', 'juli'];
let mixed: (StringNum)[] = [];

let add: Function = (a: number, b: number, c?: StringNum ): number => {
  return a +b;
}

type person = {name: string, age: number};

let logDetails: (obj: {a: number, b: string}) => void;
logDetails = (test ) => {
  console.log(test.a);
}