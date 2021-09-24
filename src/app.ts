//------------------------ discriminated type ------------------------//
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving at speed", speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

//------------------------ type casting ------------------------//
const paragraph = document.getElementById("msg-output");
const userInput1 = <HTMLInputElement>document.getElementById("user-input");
// or
const userInput2 = document.getElementById("user-input")! as HTMLInputElement;
userInput2.value = "Hi there";

const userInput3 = document.getElementById("user-input");
if (userInput3) {
  (userInput3 as HTMLInputElement).value = "Hi Hooooo!!"; // this is never return NULL
}

//------------------------ index type ------------------------//
interface ErrorContainer {
  // { email: 'Not a valid email', username: 'Must start with a capital' }
  [props: string]: string; // props: string => name of key in object : have to be type string
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital",
};

//------------------------ function overloads ------------------------//
type Combinable2 = string | number;
type Numberic2 = number | boolean;

type Universal = Combinable2 & Numberic2;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable2, b: Combinable2) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add(1, 5);

//------------------------ Optional chaining ------------------------//
const fetchedUserData = {
  id: "U1",
  name: "IToaw",
  job: {
    title: "CEO",
    description: "In my house",
  },
};

console.log(fetchedUserData?.job?.title);

//------------------------ Nullish coalesion ------------------------//

const userInput = "";

const storedData1 = userInput || "DEFAULT"; // this is in value => " ", Null, undefined

const storedData2 = userInput ?? "DEFAULT"; // this is in value => only Null and undefined

console.log("storedData1", storedData1);
console.log("storedData2", storedData2);
