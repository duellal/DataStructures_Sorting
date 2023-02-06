const {quick_sort, merge_sort} = require('../recursive_sorting')

describe('Recursive Sorting', ()=>{
    let arr1, arr2, arr3, arr4;
    
    beforeEach(() => {
        arr1 = [3, 0, 2, 1];
        arr2 = [1, 5, 8, 4, 2, 9, 6, 0, 3, 7];
        arr3 = []
        arr4 = Array.from({length: 200}, ()=>Math.floor(Math.random() * 50))
    })
    
    describe('quick_sort', ()=>{
        it('sorts an array', ()=>{
            expect(quick_sort(arr1)).toEqual([0, 1, 2, 3])
            expect(quick_sort(arr2)).toEqual([0,1,2,3,4,5,6,7,8,9])
            expect(quick_sort(arr3)).toEqual([])
            expect(quick_sort(arr4)).toEqual(arr4.sort((a, b)=> a-b))
        })
    })
    
    describe('merge_sort', ()=>{
        it('sorts an array', ()=>{
            expect(merge_sort(arr1)).toEqual([0, 1, 2, 3])
            expect(merge_sort(arr2)).toEqual([0,1,2,3,4,5,6,7,8,9])
            expect(merge_sort(arr3)).toEqual([])
            expect(merge_sort(arr4)).toEqual(arr4.sort((a,b)=> a-b))
        })
    })
})