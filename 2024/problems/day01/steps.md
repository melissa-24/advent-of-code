# Example Input:
## List 1:
- 3,4,2,1,3,3
## List 2:
- 4,3,5,3,9,3

# Part 1:
1. Make 2 lists
2. Sort in order
3. Pair numbers from both lists by sorted order
4. Find difference between pairs and sum the differences

In order list 1 (example input) = 1,2,3,3,3,4 
In order list 2 (example input) - 3,3,3,4,5,9
((1-3) + (2-3) + (3-3) + (3-4) + (3-5) + (4-9))
(2 + 1 + 0 + 1 + 2 + 5)
= 11

# Part 2:
1. Determine how many times each number in 1st list appears in second list
2. Multiply that by the frequency
3. Add those products

Keeping list in order
((3 * (3)) + (4 * (1)) + (2 * (0)) + (1 * (0)) + (3 * (3)) + (3 * (3)))
(9 + 4 + 0 + 0 + 9 + 9)
= 31