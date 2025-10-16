// const myLength: number = 16;
// const weight: number = 7.5;

// const color: string = "Yellow";
// const lastName: string = "Johnson";

// const x: boolean = true;
// const y: boolean = false;
// console.log(x, y);

export {}; // 👈 Ensures this file is treated as a module (prevents variable redeclare errors)

// program to display text 5 times
const n: number = 5;

// looping from i = 1 to 5
for (let i: number = 1; i <= n; i++) {
  console.log("I love Playwright.");
}

// Loop inside function example
function loopArray(): void {
  let arr: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  for (let i: number = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

loopArray();
