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
    
def prime(a):
    if a<=1:
        return False
    elif a==2:
        return True
    for i in range(2, a):
        if a%i==0:
            return False
        else: return True




#2차 시도(성공)
from itertools import permutations
import math
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

def prime(n):
    k = math.sqrt(n)
    if n < 2: 
        return False

    for i in range(2, int(k)+1):
        if n % i == 0:
            return False
    return True


#다른사람 풀이
from itertools import permutations
def solution(n):
    a = set()
    for i in range(len(n)):
        a |= set(map(int, map("".join, permutations(list(n), i + 1))))
    a -= set(range(0, 2))
    for i in range(2, int(max(a) ** 0.5) + 1):
        a -= set(range(i * 2, max(a) + 1, i))
    return len(a)
