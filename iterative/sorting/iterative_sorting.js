/**
 * Selection sort - O(n^2)
 * 
 * 1. Current boundary start at 0
 * 2. Find the smallest element in the array and move it to the front 
 * 3. Swap the element to where we know it's supposed to go
 * 4. Increment current boundry to 1 and repeat 
 * 5. When current boundry > length(arr) - 1 return  the sorted array
 * 
 * Runtime Complexity:
 *     walking the boundry from one end to the other: O(n)
 *     finding the smallest element: O(n)
 *     total = O(n) * O(n) 
 *           = O(n^2)
 */

const selection_sort = arr => {}

/** 
 * Bubble Sort - O(n^2)
 * 
 * 1. Compare elements that are next to one another
 * 2. If right element is less than left element swap elements 
 * 3. Keep swapping until you go through array and don't need to swap any elements 
 * 4. Return the sorted array
*/

const bubble_sort = arr => {}

/**
 * STRETCH
 * Counting Sort - O(n + m)
 * 
 * Counting sort is a sorting algorithm that works on a set of data where
 * we specifically know the maximum value that can exist in that set of
 * data. The idea behind this algorithm then is that we can create "buckets" from 
 * 0 up to the max value. This is most easily done by initializing an array of 0s 
 * whose length is the max value + 1 (why do we need this "+ 1"?).
 * 
 * Each buckets[i] then is responsible for keeping track of how many times  we've 
 * seen `i` in the input set of data as we iterate through it. Once we know 
 * exactly how many times each piece of data in the input set showed up, we can 
 * construct a sorted set of the input data from the buckets. 
 * 
 * 
 * What is the time and space complexity of the counting sort algorithm?
 * If given array and maximum:
 *     time complexity:
 *         counting each occurance in array -> O(n)
 *         going from 0 to max range -> O(n-max range + 1) -> O(m)
 *         total -> O(n) + O(m) -> O(n + m)
 * 
 *     space complexity:
 *         have 2 arrays of length n and max range + 1 -> n, m
 *         total -> O(n + m)
 *         
 * If given array without maximum:
 *     time complexity:
 *         finding maximum value in array -> O(n)
 *         counting each occurance in array -> O(n)
 *         going from 0 to max range -> O(n-max range + 1) -> O(m)        
 *              total -> O(n) + O(n) + O(m) -> O(2n + m) -> O(n + m)
 * 
 *     space complexity:
 *         same as prev: O(n + m)
 */

const counting_sort = (arr, maximum=null) => {}

module.exports = {selection_sort, bubble_sort, counting_sort}