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
    const array = arr.sort((a, b) => a-b)
    let mid_index = Math.floor((start+end)/2)

    while(start <= end){
        if(array[mid_index] === target){
            return mid_index
        }
        else if(array[mid_index] < target){
            return binary_search(array, target, mid_index+1, end)
        }
        else{
            return binary_search(array, target, start, mid_index-1)
        }
    }
    
    return -1
}

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