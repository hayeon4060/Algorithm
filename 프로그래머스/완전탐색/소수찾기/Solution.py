#1차시도 
from itertools import permutations
def solution(numbers):
    answer = 0
    lst=[]
    for i in range(1, len(numbers)+1):
        lst+=list(permutations(list(numbers),i))
    for i in range(len(lst)):
        lst[i]=int("".join(lst[i]))
    lst=list(set(lst))
    for i in lst:
        if prime(i):
            answer+=1
    return answer
    
def prime(a): #
    if a<=1:
        return False
    for i in range(2, a):
        if a%i==0:
            return False
        else: return True
