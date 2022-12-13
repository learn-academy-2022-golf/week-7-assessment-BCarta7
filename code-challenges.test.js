// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("objectsToSentence", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    const output = ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

    expect(objectsToSentence(people)).toEqual(output)
  })
})
// test 1:  ReferenceError: objectsToSentence is not defined
// test 2:  Pass


// b) Create the function that makes the test pass.
// create function called "objectsToSentence"
// pass function parameter of "array"
// within function, return the array accessed by the .map higher order function.
// In .map argument, destructure the objects in each element.
// also in argument, create new variable "nameCapped". 
  // nameCapped equals the name variable (from destructuring) first split into an array at the space character using .split built in method, then iterated over by .map higher order function (map within map, what have I done!), then joined back into string at the space character using .join built in method.
    // as argument in new .map, return the value's first letter capitalized using .charAt(0) and .toUpperCase built in methods, PLUS the rest of the characters using .substr(1) built in method.
// Finally, return string interpolation using "nameCapped" and "occupation" variables.

const objectsToSentence = (array) => {
  return array.map(value => {
    let { name, occupation } = value
    let nameCapped = name.split(" ").map(value => {
      return value.charAt(0).toUpperCase() + value.substr(1)
    }).join(" ")
    
    return `${nameCapped} is ${occupation}.`
  })
}

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("remainderFinder", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const output1 = [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    const output2 = [ 2, 1, -1 ]

    expect(remainderFinder(hodgepodge1)).toEqual(output1)
    expect(remainderFinder(hodgepodge2)).toEqual(output2)
  })
})
// test 1: ReferenceError: remainderFinder is not defined
// test 2: Pass


// b) Create the function that makes the test pass.
// create function named "remainderFinder"
// pass function parameter of "array"
// within function return the array iterated over by first .filter, then .map higher order functions.
// in .filter argument, use anonymous function to return only elements that have the primitive data type of "number". Use typeof built in method to determine data type.
// in .map argument, use anonymous function to return the remainder of each element's value when divided by three, using the modulo method.

const remainderFinder = (array) => {
  return array.filter(value => 
    typeof value === "number"
  ).map((value) => 
    value % 3
  )
}


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumCubed", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    const cubeAndSum1 = [2, 3, 4]
    const output1 = 99
    const cubeAndSum2 = [0, 5, 10]
    const output2 = 1125

    expect(sumCubed(cubeAndSum1)).toEqual(output1)
    expect(sumCubed(cubeAndSum2)).toEqual(output2)
  })
})
// test 1:  ReferenceError: sumCubed is not defined
// test 2:  Pass


// b) Create the function that makes the test pass.
// create function called "sumCubed"
// pass function parameter of "array"
// within function, return the array accessed by first the .map higher order function, then the .reduce built in method.
// in .map argument, return each element in array cubed using "** 3" syntax
// in .reduce argument, use "(a,b) => a+b, 0" syntax; this has it add each value to an accumulating sum until all elements are iterated, starting at 0.


const sumCubed = (array) => {
    return array.map(value => value ** 3).reduce((a,b) => a + b, 0)
}
