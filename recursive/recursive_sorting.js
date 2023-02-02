/**
 * Quicksort - O(n log n)
 * 
 * Divide-and-conquer method
 * 1. Pick a pivot element (pick 1st array element)
 * 2. Paritition the rest of the elements around the 
 * pivot element 
 *     - elements > pivot point will go in right partition
 *     - elements < pivot point will go in left partition 
 * 3. Repeat until all elements are in a parition by themselves
 * 4. Merge all the paritions into one array
 * 
 * Ex.
 * [15, 32, 126, 4, 7, 28, 96, 27, 52]
 * Pivot = 15 
 * 
 * [4, 7,][15][32, 126, 28, 96, 27, 52]
 * [4][7][15] [28, 27][32][126, 96, 52]
 * [4][7][15][27] [28][32] [96, 52][126]
 * [4][7][15][27] [28][32] [52][96][126]
 * [4, 7, 15, 27, 28, 32, 52, 96, 126]
 */


//helper function that does the partition
const partition = arr => {}

const quick_sort = arr => {}

/**
 * Merge Sort - O(n log n)
 * 
 * Divide-and-Conquer method
 * 
 * 1. Breaks array in half 
 * 2. Keep breaking array in half until only 1 element in array
 * 3. Merge arrays -> sorting them as you merge them
 * 
 * Ex.
 * [13, 27, 5, 18, 7, 3, 9, 22, 16, 56]
 * [13, 27, 5, 18, 7][3, 9, 22, 16, 56]
 * [13, 27, 5][18, 7][3, 9, 22][16, 56]
 * [13, 27][5][18][7][3, 9][22][16][56]
 * [13][27][5][18][7][3][9][22][16][56]
 * [13, 27][5, 18][3, 7][9, 22][16, 56]
 * [5, 13, 18, 27][3, 7, 9, 22][16, 56]
 * [3, 5, 7, 9, 13, 18, 22, 27][16, 56]
 * [3, 5, 7, 9, 13, 16, 18, 22, 27, 56]
 */

//helper function to merge 2 sorted arrays
const merge = (arrA, arrB) =>{}

const merge_sort = arr => {}

/**
 * STRETCH: implement the recursive logic for merge 
 * sort in a way that doesn't utilize any extra memory
 * 
 * In other words, your implementation should not 
 * allocate any additional lists or data structures; 
 * it can only re-use the memory it was given as input
 */

const merge_in_place = (arr, start, mid, end) => {}

const merge_sort_in_place = (arr, left, right) => {}

module.exports = {
    quick_sort, 
    merge_sort,
    merge_sort_in_place
}