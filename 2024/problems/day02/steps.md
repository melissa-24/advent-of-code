# Part 1

## Thoughts:
Take each line check if the following are BOTH are true:
- All numbers in line are increasing or decreating not both
- Adjacent numbers can only differ by max of 3

## Steps:
- Set initial direction - if in loop last direction was different auto fail, if same keep going
- Find difference between adjacent numbers if more than 3 auto fail, if not keep going
- If reached end of loop increase pass or safe count and move to next row