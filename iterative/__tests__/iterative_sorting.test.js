const {selection_sort, bubble_sort, counting_sort} = require('../iterative_sorting')

describe('Iterative Sorting', ()=>{
    let arr1, arr2, arr3, arr4;
    
    beforeEach(() => {
        arr1 = [3, 0, 2, 1];
        arr2 = [1, 5, 8, 4, 2, 9, 6, 0, 3, 7];
        arr3 = []
        arr4 = Array.from({length: 200}, ()=>Math.floor(Math.random() * 50))
    })
    
    describe('selection_sort', ()=>{
        it('sorts an array', ()=>{
            expect(selection_sort(arr1)).toEqual([0, 1, 2, 3])
            expect(selection_sort(arr2)).toEqual([0,1,2,3,4,5,6,7,8,9])
            expect(selection_sort(arr3)).toEqual([])
            expect(selection_sort(arr4)).toEqual(arr4.sort())
        })
    })
    
    describe('bubble_sort', ()=>{
        it('sorts an array', ()=>{
            expect(bubble_sort(arr1)).toEqual([0, 1, 2, 3])
            expect(bubble_sort(arr2)).toEqual([0,1,2,3,4,5,6,7,8,9])
            expect(bubble_sort(arr3)).toEqual([])
            expect(bubble_sort(arr4)).toEqual(arr4.sort())
        })
    })
    
    describe('counting_sort', ()=>{
        it('sorts an array', ()=>{
            expect(counting_sort(arr1)).toEqual([0, 1, 2, 3])
            expect(counting_sort(arr2)).toEqual([0,1,2,3,4,5,6,7,8,9])
            expect(counting_sort(arr3)).toEqual([])
            expect(counting_sort(arr4)).toEqual(arr4.sort((a, b) => a-b))
        })
    })
})