/* Ressources consultées
    - https://medium.com/@lelianto.eko/hashmap-in-ja-3a5c03a8febc
    - https://javascript.developpez.com/tutoriels/javascript/linking_hash_map/
*/

const array = [2,7,11,15]

function twoSum(arr, target) {
    for(let iterator = 0; iterator < arr.length; iterator+=1) {
        // console.log(arr[iterator])
        for (let y = iterator+1; y < arr.length; y++) {
            // console.log(array[iterator] + array[y])
            if(array[iterator] + array[y] === target) {
                return console.log(iterator, y)
            }
        }
    }
}

twoSum(array, 9)

function test(arr) {
    arr.forEach(element => {
       return console.log(element + 1) 
    });
}

// test(array)