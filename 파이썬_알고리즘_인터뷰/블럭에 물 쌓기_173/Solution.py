from typing import *
nums = [2, 7, 11, 15]
target=9

def twoSum( nums : List[int], target: int) -> List[int]:
    nums=[a for a in nums if a < target]
    for i,p in enumerate(nums):
        for j,q in enumerate(nums[:-1]):
            if p==target-q:
                return [i,j]
            


print(twoSum(nums, target))

