# DataStructures_Sorting

## Iterative Sorting 

### Bubble Sort

In **Bubble Sort**, we make a series of swaps between adjacent elements, gradually moving larger elements towards the end of the array (or _bubbling_ larger elements up).

#### Algorithm

1. Loop through your array
    - Compare each element to its neighbor
    - If elements in wrong position (relative to each other, swap them)
2. If no swaps performed, stop. Else, go back to the element at index 0 and repeat step 1.

#### Real-World Applications

***Bubble Sort*** is not ideal for many real-world applications. If a small element that _should_ be at the beginning of our array is originally located near the end, it will take a long time to move it into its correct position.

However, it should be noted that if you perform **Bubble Sort** on an array that's already sorted, it will only require a single pass through the array, making its best-case performance linear. It's also very simple to implement.

### Selection Sort

***Selection Sort*** is an algorithm that many of you have probably used before when sorting things in your everyday lives. Imagine that you have several books you want to arrange on a shelf from shortest to tallest. You start off by looking for the shortest book, and when you find it, put it on the far left side of the shelf. Then, you look for the second shortest book and insert it directly to the right of the first book. You repeat this process, selecting the next shortest book and moving it next to the most recently placed book, until you have moved all books into the correct place. This is ***Selection Sort***.  

An example of this algorithm being applied to an array with 10 numerical elements can be seen in the video below.

[(VIDEO) Select-sort with Gypsy folk dance](https://www.youtube.com/watch?v=Ns4TPTC8whw)

[![(VIDEO) Select-sort with Gypsy folk dance](https://i.ytimg.com/vi/Ns4TPTC8whw/hqdefault.jpg)](https://www.youtube.com/watch?v=Ns4TPTC8whw)

#### Algorithm

1. Start with current index = 0

2. For all indices EXCEPT the last index:

    a. Loop through elements on right-hand-side 
    of current index and find the smallest element

    b. Swap the element at current index with the
    smallest element found in above loop

#### Real-World Applications

While ***Selection Sort*** is one of the easier sorting algorithms to understand and implement, it has one major drawback - its efficiency.

Recall that the runtime complexity of an algorithm, often expressed using *Big O notation*, tells us how the amount of operations our algorithm requires will grow as the size of our input grows. ***Selection Sort*** has  a runtime of O(n²), making it impractical to use with many large, real-world data sets.

<hr/>

## Linear vs. Binary Search
There are two common searching algorithms that developers are often introduced to when they are writing some of their first apps: **linear search** and **binary search**. Let's walk through the differences between them.

### Linear (Sequential) Search

Sometimes referred to as sequential search, this algorithm is fairly straightforward. Given a set of data, traverse the dataset one item at a time until either you find the item you are looking for OR check every item in the set and verify the item you are looking for is not there.

### Binary Search

The process of performing a binary search has a couple of extra steps. First, there is a *precondition* that the set of data you are searching is ***already sorted*** (alphabetically, numerically, etc). Then, the steps to search are:

1. Compare the item in the middle of the data set to the item we are searching for.
    - If it is the same, stop. We found it and are done!
    - Else, if the item we are searching for is LESS than the item in the middle:
        - Eliminate the RHS of list. Repeat step 1 with only the LHS of list.
    - Else, the item we are searching for is GREATER than the item in the middle:
        - Eliminate the LHS of list. Repeat step 1 with only the RHS of the list.


A visualization comparing these two algorithms is shown below.
![binary v sequential](https://www.mathwarehouse.com/programming/images/binary-vs-linear-search/binary-and-linear-search-animations.gif "Binary v Sequential Search")

### Your Task 
- Complete all of the functions in the `searching.py` file.

### Runtimes

These two searching strategies have very different runtimes.

**Linear Search:** O(n)  
**Binary Search:** O(log(n))

Looking at the above runtimes, it is clear that we should be using binary search over linear search. 
***However, we cannot perform binary search if our data isn't ALREADY SORTED!***

While the justification for *WHY* we want to sort our data is pretty clear, a harder question to answer is *HOW* do we want to sort our data. Over the next few days, we will explore several different sorting algorithms, examining the pros and cons of each.

[Just for fun...(VIDEO) 15 Sorting Algorithms in 6 Minutes  ![alt text](https://i.ytimg.com/vi/kPRA0W1kECg/maxresdefault.jpg)](https://www.youtube.com/watch?v=kPRA0W1kECg)

<hr/>

## Recursive Sorting 

## MergeSort

Merge Sort - O(n log n)
Divide-and-Conquer method
1. Breaks array in half 
2. Keep breaking array in half until only 1 element in array
3. Merge arrays -> sorting them as you merge them

Ex.

```
[13, 27, 5, 18, 7, 3, 9, 22, 16, 56]

[13, 27, 5, 18, 7] [3, 9, 22, 16, 56]

[13, 27, 5] [18, 7] [3, 9, 22] [16, 56]

[13, 27] [5] [18] [7] [3, 9] [22] [16] [56]

[13] [27] [5] [18] [7] [3] [9] [22] [16] [56]

[13, 27] [5, 18] [3, 7] [9, 22] [16, 56]

[5, 13, 18, 27] [3, 7, 9, 22] [16, 56]

[3, 5, 7, 9, 13, 18, 22, 27] [16, 56]

[3, 5, 7, 9, 13, 16, 18, 22, 27, 56]
```

## QuickSort

Quicksort - O(n log n)
Divide-and-conquer method
1. Pick a pivot element (pick 1st array element)
2. Paritition the rest of the elements around the pivot element 
    - elements > pivot point will go in right partition
    - elements < pivot point will go in left partition 
3. Repeat until all elements are in a parition by themselves
4. Merge all the paritions into one array
Ex.

```
[15, 32, 126, 4, 7, 28, 96, 27, 52]
Pivot = 15 

[4, 7,][15][32, 126, 28, 96, 27, 52]

[4][7][15] [28, 27][32][126, 96, 52]

[4][7][15][27] [28][32] [96, 52][126]

[4][7][15][27] [28][32] [52][96][126]

[4, 7, 15, 27, 28, 32, 52, 96, 126]
```

## FAQs

### How do you assess space complexity?

Generally speaking, at work and in interviews, people are more interested in
time complexity. That said, _space complexity_, or how much additional space is
required to process _n_ elements of data, is also very important.

Space complexity does _not_ include the space required to hold the data you are
going to process. It only includes the _additional_ space requirements of your
algorithm.

Here's an example with `O(1)` space requirements:

```python
def alg(data):
    result = 0

    for v in data:
        result += v

    return result
```

Clearly the _time_ complexity is `O(n)`. As list `data` grows, the time it takes
to complete the algorithm grows proportionately.

But the _space_ complexity is `O(1)`. The additional space required to complete
the algorithm was:

- `result`: `O(1)`
- `v`: `O(1)`

And neither of those change in size regardless of how big list `data` is. `data`
could have a zillion elements, and the algorithm would still only require space
for `result` and `v`.

What about this:

```python
def alg(data):
    new_data = data.copy()   # <-- Added this line

    result = 0

    for v in new_data:
        result += v

    return result
```

Here we have more space allocated.

- `result`: `O(1)`
- `v`: `O(1)`
- `new_data`: `O(n)`

`new_data` gets bigger as `data` gets bigger, so it's `O(n)`. So we have:

`O(1) + O(1) + O(n)` space requirements. `O(n)` dominates, so the final result
is `O(n)`.

Where things get really tricky is when you have a recursive call. Each call to
the function allocates space for all the local variables.

And it gets doubly tricky if you're making a copy of the data each call, like
with a slice.

Here's the same algorithm as before that adds all the elements in a list, except
this one does it recursively. Recall that the initial iterative version was
`O(1)` space complexity.

```python
def alg(data):
    if data == []:
        return 0

    first_val = data[0]

    return first_val + alg(data[1:])
```

Every time we make a call into `alg()`, we get new space for local variables. So
any local variable that was `O(1)` on its own, now gets _n_ copies and becomes
`O(1*n)` or `O(n)`.

But that's not all. When we slice `data` on the recursive call, we get a new
list. So that means every call we're getting another copy of the list, and each
copy is `O(n)` space as well. And we're making _n_ recursive calls, so we need
_n_ copies of `O(n)` space, which comes to `O(n*n)` or `O(n^2)` space.

> Sure, it's not a _complete_ copy of the list. It's missing the first element.
> So each call has a shorter and shorter list, like:
>
> ```python
> [ 1, 2, 3, 4 ]
> [ 2, 3, 4 ]
> [ 3, 4 ]
> [ 4 ]
> [ ]
> ```
>
> So that means the first call wasn't really `O(n)`, but was more like
> `O(0.8*n)`, and the second was `O(0.6*n)`, and so on.
>
> But recall that we drop constants with Big-O, so those still just become
> `O(n)`.

So we have _n_ recursive calls.

`first_val` on its own is `O(1)`. But we recurse _n_ times, so it becomes
`O(1*n)` or just `O(n)`.

Each slice of `data` on its own is `O(n)`. But we recurse _n_ times, so it
becomes `O(n*n)` or `O(n^2)`.

So the total space complexity for this algorithm is:

`O(n) + O(n^2)`. The `O(n^2)` dominates, so the final space complexity is just
`O(n^2)`.

Again, compare to the `O(1)` space complexity of the initial iterative solution.

In some languages, notably
[Lisp](https://en.wikipedia.org/wiki/Lisp_(programming_language)) and other
[functional programming
languages](https://en.wikipedia.org/wiki/Functional_programming), you can write
recursive solutions with `O(1)` space complexity. These languages take advantage
of a feature known as [_tail call
optimization_](https://en.wikipedia.org/wiki/Tail_call) to make this possible.
By coding things correctly, the language can automatically convert your
recursive solution into an iterative solution. Stock C and Python do not support
tail call optimization.

### Should we use a language's built-in functionality as much as possible?

Yes.

Generally the built-in functionality is better tested and better optimized than
something you could write.

That said, there might be times you want to write your own versions. Maybe the
built-in doesn't do exactly what you need. Or maybe you want to rewrite the
built-in as a learning exercise, for example.

### What are the tradeoffs with in-place versus non-in-place sorting solutions?

Memory: in-place typically takes less memory since you're reusing the original
storage for the list to hold the finally sorted list. If you allocate more lists
to hold the result, that takes more memory.

Code clarity: in-place sometimes has more complex code making the algorithm
harder to understand.

As an example, here's a non-in-place Quicksort, which seems to be generally
clearer than the in-place variant, but uses far more memory:

```python
def partition(data):
    left = []
    pivot = data[0]
    right = []

    for v in data[1:]:
        if v <= pivot:
            left.append(v)
        else:
            right.append(v)

    return left, pivot, right

def quicksort(data):
    if data == []:
        return data

    left, pivot, right = partition(data)

    return quicksort(left) + [pivot] + quicksort(right)
```