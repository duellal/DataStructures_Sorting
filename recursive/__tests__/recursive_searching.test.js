const {agnostic_binary_search, binary_search} = require('../recursive_searching')

describe('Recursive Searching', ()=>{
    let arr1, arr2;
    
    beforeEach(() => {
        arr1 = [-2, 7, 3, -9, 5, 1, 0, 4, -6]
        arr2 = []
    })
    
    describe('binary_search', ()=>{
        it('returns the index if it finds the target', ()=>{
         expect(binary_search(arr1, -6, 0, arr1.length-1)).toBe(1)
         expect(binary_search(arr1, 0, 0, arr1.length-1)).toBe(3)
        })
        
        it('returns -1 if it does not find the target', ()=>{
         expect(binary_search(arr1, 6, 0, arr1.length-1)).toBe(-1)
         expect(binary_search(arr2, 3, 0, arr1.length-1)).toBe(-1)
        })
     })
     
     describe('agnostic_binary_search', ()=>{
        it('returns the index if it finds the target', ()=>{
         expect(agnostic_binary_search(arr1, -6)).toBe(8)
         expect(agnostic_binary_search(arr1, 0)).toBe(6)
        })
        
        it('returns -1 if it does not find the target', ()=>{
         expect(agnostic_binary_search(arr1, 6)).toBe(-1)
         expect(agnostic_binary_search(arr2, 3)).toBe(-1)
        })
     })
})