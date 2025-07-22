// const removeFromArray = function(arr, ...remove) {
//     let indexArray = []
//     for (let i = 0; i < arr.length; i++) {
//         for (const item of remove) {
//             if (arr[i] === item) {
//                 indexArray.push(i);
//             }
//         }
//     }
//     indexArray.reverse();
//     for ( const index of indexArray) {
//         arr.splice(index, 1);
//     }
//     return arr;
// };

const removeFromArray = function(arr, ...remove) {
    return arr.filter(item => !remove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
