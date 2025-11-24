// 1. Find the second largest number in an array 

// let arr = [4 , 24 , 34 ,1 , 35 , 534 , 224 ,2343 , 245 ,534]

// const findSecondLargestNumber = (array) => {
    
//     let sorted_arr = array.sort((a,b) => a-b)
    
//     return sorted_arr[sorted_arr.length - 2]

// }

// console.log(findSecondLargestNumber(arr))

// 2. FizzBuzz (Classic logic test)

// Print numbers 1 to 100:

// multiples of 3 → "Fizz"

// multiples of 5 → "Buzz"

// multiples of both → "FizzBuzz"

// const printFizzBuzz = () => {
//     for (let i = 0 ; i <= 100 ; i++) {

//         if (i % 3 == 0 && i % 5 == 0) {
//                console.log( `FizzBuzz`)
//         }
//         else if (i % 3 == 0) {
//                console.log( `Fizz`)
//         }
//         else if (i % 5 == 0) {
//                console.log( `Buzz`)
//         }

//         else {
//             console.log(i)
//         }

//     }
// }

// printFizzBuzz()

// Count Number of occurences in a sentence using for of loop .

let str = "Apple"

const numberOfOcc = (string) => {
    let case_sensitive_string = string.toLowerCase()

    let occ = {}

    for (let i of case_sensitive_string) {
        if (occ.hasOwnProperty(i)) {
            occ[i] ++
        }
        else {
            occ[i] = 1
        }
    }

    return occ

}

console.log(numberOfOcc(str))