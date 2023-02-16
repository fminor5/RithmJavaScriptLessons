// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Nested Objects

// Theory

// Arrays Within Objects
let instructorData = {
    name: "Tim",
    favoriteHobbies: ["Sailing", "Hiking", "Coding"]
};

// console.log(instructorData.favoriteHobbies[0]);
// How would you add another hobby to the favoriteHobbies array inside of the object?
// instructorData.favoriteHobbies.push('Reading')
// console.log(instructorData);

let instructorData2 = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};

// console.log(instructorData2.additionalData.moreDetails.citiesLivedIn[1]);
// console.log(instructorData2.additionalData.moreDetails.hometown.state);

// Accesing and Setting values in nested objects
let programmingLanguages = {
    java: {
        yearCreated: 1995,
        creator: "James Gosling"
    },
    javaScript: {
        yearCreated: 1995,
        creator: "Brendan Eich"
    }
}

function addProgrammingLanguage(nameOfLanguage, yearLanguageCreated, creatorOfLanguage){
    // how can we access the programming languages object?
    // We can't use dot notation, because we don't know the name of
    // the key until the function is called.
    // Instead we use bracket notation where the key is the
    // nameOfLanguage that is being passed to the function.
    programmingLanguages[nameOfLanguage] = {
        // Creating the object which will be the value of the
        // key.  We can directly assign the yearLanguageCreated
        // and creatorOfLanguage to the appropriate keys here.
        yearCreated: yearLanguageCreated,
        creator: creatorOfLanguage
    }
}

// Usage example: Adding a key of ruby to the programming language object,
// with the value of 1995 for the key "yearCreated" and the value
// "Yukihiro Matsumoto" for creatorOfLanguage
addProgrammingLanguage("ruby", 1995, "Yukihiro Matsumoto");
// console.log(programmingLanguages);

// Writing functions to produce values in a nested data structure.

// Exercises
// 1. Write a function called displayCities that console.logs all the values in the citiesLivedIn array:
function displayCities() {
    let cities = instructorData2.additionalData.moreDetails.citiesLivedIn
    for(let i = 0; i<cities.length; i++) {
        console.log(cities[i]);
    }
}

// console.log(displayCities());

// 2. Write a function called displayHometownData that console.logs all the values inside of the hometown object

function displayHometownData() {
    let homeTownObj = instructorData2.additionalData.moreDetails.hometown
    for(let key in homeTownObj) {
        console.log(homeTownObj[key]);
    }
}

// console.log(displayHometownData());

// 3. Let's write a function called addDetail that accepts two parameters, a key and a value and adds the key and value to the moreDetails object and returns the moreDetails object

function addDetail(key, value) {
    instructorData2.additionalData.moreDetails[key] = value
    return instructorData2.additionalData.moreDetails
}

// console.log(addDetail('isHilarious', true));
// console.log(addDetail('previousApartments', ['Mission', 'North Beach', 'Nob Hill']));

// 4. Finally, let's write a function called removeDetail that removes a key in the moreDetails object and returns the moreDetails object (the new keys added above are not included in these examples).

function removeDetail(itemToRemove) {
    let removedItem = instructorData2.additionalData.moreDetails
    delete removedItem[itemToRemove]
    return removedItem
}

// console.log(removeDetail('citiesLivedIn'));
// console.log(removeDetail('hometown'));
// console.log(removeDetail('favoriteBasketballTeam'));

// **************************************
// Nested Objects Exercises

let nestedData = {
    innerData: {
      order: ["first", "second", "third"],
      snacks: ["chips", "fruit", "crackers"],
      numberData: {
          primeNumbers: [2,3,5,7,11],
          fibonnaci: [1,1,2,3,5,8,13]
      },
      addSnack: function(snack){
          nestedData.innerData.snacks.push(snack);
          return nestedData.innerData.snacks;
      }
    }
  }

// 1. Using a for loop, console.log all of the numbers in the primeNumbers array.

// let primeList = nestedData.innerData.numberData.primeNumbers
// for(let i=0; i<primeList.length; i++) {
//     console.log(primeList[i]);
// }

// 2. Using a for loop, console.log all of the even Fibonnaci numbers.
// ************************************** Try
// let fiboList = nestedData.innerData.numberData.fibonnaci
// for(let i=0; i<fiboList.length; i++) {
//     if(fiboList[i] % 2 == 0) {
//         console.log(fiboList[i]);
//     }
// }

// 3. Console.log the value "second" inside the order array.

let orderArrVal = nestedData.innerData.order[1]
// console.log(orderArrVal);

// 4. Invoke the addSnack function and add the snack "chocolate".

// console.log(nestedData.innerData.addSnack('chocolate'));

// Given the following nested object:

let nestedObject = {
    speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
    data: {
      continents: {
        europe: {
          countries: {
            switzerland: {
              capital: "Bern",
              population: 8000000
            }
          }
        }
      },
      languages: {
        spanish: {
            hello: "Hola"
        },
        french: {
            hello: "Bonjour"
        }
      }
    }
  }

// 5. Write a function addSpeaker to add a speaker to the array of speakers. The speaker you add must be an object with a key of name and a value of whatever you'd like.

function addSpeaker(speakerName) {
    nestedObject.speakers.push({name: speakerName})
    return nestedObject.speakers
}

// addSpeaker('fernando')
// console.log(nestedObject);

// 6. Write a function addLanguage that adds a language to the languages object. The language object you add should have a key with the name of the language and the value of another object with a key of "hello" and a value of however you spell "hello" in the language you add.

function addLanguage(language, word) {
    nestedObject.data.languages[language] = {hello: word}
    return nestedObject.data.languages
}

addLanguage('English', 'Godbye')
// console.log(nestedObject);

// 7. Write a function addCountry that adds a European country to the countries object (inside of the continents object, inside of the countries object). The country you add should be an object with the key as name of the country and the value as an object with the keys of "capital" and "population" and their respective values.

function addCountry(country, capital, population) {
    nestedObject.data.continents.europe.countries[country] = {
        capital: capital,
        population: population
    }
    return nestedObject.data.continents.countries
}

addCountry('Spain', 'Barcelona', 160000)
// console.log(nestedObject);

// **************************************
// Nested Arrays

// Theory
// let nestedArr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9, 10, 11, 12]
//   ];
  
//   for (let i = 0; i < nestedArr.length; i++) {
//     for (let j = 0; j < nestedArr[i].length; j++) {
//       console.log(nestedArr[i][j]);
//     }
//   }

// **************************************
// Exercises

// 1. Given the following array, write a function called printEvens that console.logs all of the even numbers

let nestedArr = [[1, 2, 3], [4, 5, 6], [7, 8], [9, 10, 11, 12]];

function printEvens(arr) {
    for(let i=0; i<arr.length; i++) {
        // console.log(arr[i]);
        for(let j=0; j<arr[i].length; j++) {
            // console.log(arr[i][j]);
            if(arr[i][j] % 2 == 0) {
                console.log(arr[i][j]);
            }
        }
    }
}

// console.log(printEvens(nestedArr));

// 2. Given the following array, write a function called sumTotal returns the sum of all numbers in the array

let nestedArr2 = [[1, 2], [3, 4], [5, 6]];

function sumTotal(nestedArr2) {
    let sum = 0
    for(let i=0; i<nestedArr2.length; i++) {
        for(let j=0; j<nestedArr2[i].length; j++) {
            sum += nestedArr2[i][j]
            // console.log(sum); // It displays each individual addition.
        }
        // console.log(sum); // It displays the addition of each arr
    }
    console.log(sum); // It displays the total addition
}

// console.log(sumTotal(nestedArr2));

// **************************************
// Optional Bonus

// Given the following array, write a function called countVowels, which returns the count of all of the vowels in each string regardless of case. To see if a value is an array, you can not use typeof since that will return 'object', so one way to do this is by using the Array.isArray function.

let nestedArr3 = [
  "Elie",
  ["Matt", ["Tim"]],
  ["Colt", ["Whiskey", ["Janey"], "Tom"]],
  "Lorien"
];

function countVowels(arr) {
}

// countVowels(); // 14
// console.log(countVowels(nestedArr3));

// **************************************
// Nested Arrays Exercises

// 1. Write a function called rotate which takes an array and a number, and moves each element however many spaces the number is to the right. For the value at the end of the array, rotate should move it back to the beginning.



// console.log(rotate([1, 2, 3], 1));
// console.log(rotate([1, 2, 3], 2));
// console.log(rotate([1, 2, 3], 3));

// 2. Write a function called makeXOGrid which takes in two parameters, rows and columns, and returns an array of arrays with the number of values in each subarray equal to the columns parameter and the number of subarrays equal to the rows parameter. The values in the sub-arrays should switch between "X" and "O".



// console.log(makeXOGrid(1, 4));
// console.log(makeXOGrid(3, 2));
// console.log(makeXOGrid(4, 3));