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
const partition = arr => {
    let pivot = arr[0]
    let sm_arr = []
    let lg_arr = []

    for(let i = 1; i < arr.length; i++){
        if(pivot >= arr[i]){
            sm_arr.unshift(arr[i])
        }
        else if(pivot < arr[i]){
            lg_arr.push(arr[i])
        }
    }

    return [sm_arr, [pivot], lg_arr]
}

const quick_sort = arr => {
    if(arr.length === 0){
        return arr
    }

    let sort_arr = []
    let part_arr = partition(arr)

    for(let i = 0; i < part_arr.length; i++){
        if(part_arr[i].length === 1){
            sort_arr = sort_arr.concat(part_arr[i])
        }

        if(part_arr[i].length > 1){
            sort_arr = sort_arr.concat(quick_sort(part_arr[i]))
        }
    }

    return sort_arr
}

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
const merge = (arrA, arrB) =>{
    let new_arr = []

    while(arrA.length && arrB.length){
        if(arrA[0] >= arrB[0]){
            new_arr.push(arrB.shift())
        }
        else{
            new_arr.push(arrA.shift())
        }
    }

    while(arrA.length){
        new_arr.push(arrA.shift())
    }

    while(arrB.length){
        new_arr.push(arrB.shift())
    }

    return new_arr
}

const merge_sort = arr => {
    let split_arr = []

    if(arr.length === 0){
        return arr
    }
    
    //Splitting the array into individual elements:
    for(let i = 0; i < arr.length; i++){
        if(split_arr.length !== arr.length){
            split_arr.push([arr[i]])
        }
    }

    //Sorting + merging the individual elements:
    while(split_arr.length > 1){
        for(let e = 0; e < split_arr.length; e++){
            if(split_arr[e].length === arr.length){
                return split_arr[e]
            }

            split_arr = split_arr.concat([merge(split_arr[e], split_arr[e+1])])
            split_arr.shift()
        }
    }
}


module.exports = {
    quick_sort, 
    merge_sort
}