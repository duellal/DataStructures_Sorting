/**
 * Binary search
 * 
 * 1. Find the midpoint element
 *     -round down if even elements
 * 2. Compare the target agains the midpoint element
 * 3. If the target matches the midpoint element return the index
 * 4. Otherwise, determine which direction the binary search needs to go in
 */

const binary_search = (arr, target, start, end) => {

}
// // Did the below code in iterative but realized it was most recursive:
// const binary_search = (arr, target) => {
//     let array = arr.sort((a, b) => a-b)

//     const bst = (target, start, end) => {
//         let mid_index = Math.floor((start + end)/2)

//         while(start <= end){
//             if(array[mid_index] === target){
//                 return mid_index
//             }
//             else if(target < array[mid_index]){
//                 return bst(target, start, mid_index-1)
//             }
//             else if(target > array[mid_index]){
//                 return bst(target, mid_index+1, end)
//             }
//         }
//         return -1
//     }
//     return bst(target, 0, array.length-1)
// }

/**
 * STRETCH
 * 
 * implement an order-agnostic binary search
 * This version of binary search should correctly 
 * find the target regardless of whether the input 
 * array is sorted in ascending order or in 
 * descending order. You can implement this function 
 * either recursively or iteratively
 */
const agnostic_binary_search = (arr, target) => {}

module.exports = {binary_search, agnostic_binary_search}