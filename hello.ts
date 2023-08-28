console.log("Hello world!");

function greet(person, date) {
  console.log(`Hello ${person}, today is ${date}!`);
}

greet("Brendan", "13");

// tsc --target es2015 hello.ts by default  ES3
