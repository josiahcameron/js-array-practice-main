// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------

const myFunction = (string, i) => {
   const arr = [];
    
    for (let j = 0; j < i; j++){
    arr.push(string)  
    }
return arr
}

// Alt Solution using arry.from
// function myFunction(str, i)
//     return Array.from({
//         length: i
//     },
// function(){
//     return str;
// }
// }))

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------


const reverse = function(array){
    const spreadArray = [...array]; //The spread (...) lets the array be expanded
    const revArray = spreadArray.reverse(); //.reverse switches the order of the array
    return revArray
}

reverse([4, 6, 7])

//Alt solution
// const reverse = (arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++){
//         result.unshift(arr[i]);
//     }
//     return result;
// }

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------


const noFalsyHere = function(array) {
    const arr = array;
    const arrayFiltered = arr.filter(Boolean); //filter automatically filters out any element with a falsy value
    return arrayFiltered;
} 

noFalsyHere([4, 0, 3])



//Alt
// const noFalsyHere = function(array){
//     const result = [];
//     for (let i = o; i < arr.length; i++){
//         if (!!arr[i]){
//             result.push(arr[i]);
//         }
//     }
// }



// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------

//Each array has two parameters, the first parameter will always be the key for the second
const fourthFunction = function(array1, array2){
    const arr1 = array1
    const arr2 = array2
    const nestArray = [`${arr1}: ${arr2}`]
    return object == [array1[array2]]
    const finalResult = ``
}

//Solution
// const fFunction = () => {
//     const result = {};

//     for(let i = o; i < arr.length; i++){
//         result[arr[i][0]] = arr[i][1];
//     }
//     return result;
// }


// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------

const noDupes = function(array){
    const ogArray = array;
    //New array needs to start out empty
    const newArray = [];  
    //forEach() loops through and checks(iterates) each element of the OG array and runs an if statement to check if any of those elements match anything in the newArray. If false, it pushes the new element into newArray.
    ogArray.forEach((value) => {        
        if(!newArray.includes(value)){
                newArray.push(value);
        }
    })
    return newArray
}

//
// const noDupes = (array) => {
//     const result = [];
//     for(let i = 0; i < arr.length; i++){
//         if(result.indexOf(arr[i]) === -1){
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// //
// const noDupes = (arr) =>{
// return [... new Set(arr)] //new Set() will create a set that automatically won't have duplicates
// }


// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------

const twinCheck = (array1, array2) =>{
    const arr1 = array1;
    const arr2 = array2;
    if (arr1 === arr2) return true;
    if (arr1.length !== arr2.length) return false;
    
    for (i = 0; i < arr1.length; i++){
        if (arr1[i] !== arr2[i]) return false;
    }
    return true
}

twinCheck([1,2,3,4], [1,2,3,4])

//
arr1.sort();
arr2.sort();

for(let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
        return false;
    }
}
return true;
}




// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------

// ---------------------
// Define a function that takes an array and splits it into parts of size i
// ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
// ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------
