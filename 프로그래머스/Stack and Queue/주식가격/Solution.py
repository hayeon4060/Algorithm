#1차(시간초과)
def solution(prices):
    answer = []
    stand=-1    
    for i in prices:
        stand+=1
        ok=0
        where=stand
        for tmp in prices[stand+1:]:
            where+=1
            if i>tmp:
                answer.append(where-stand)
                ok=1
                break
        if ok==0:
            answer.append(where-stand)
            
    return answer



#2차 
def solution(prices):
    answer = [] 
    for i in range(0,len(prices)):
        do=0
        for j in range(i+1,len(prices)):
            if prices[i]>prices[j]:
                answer.append(j-i)
                do=1
                break
        if do==0:
            answer.append(j-i)
    return answer


#queue사용
from collections import deque
def solution(prices):
    answer = []
    prices = deque(prices)
    while prices:
        c = prices.popleft()

        count = 0
        for i in prices:
            if c > i:
                count += 1
                break
            count += 1

        answer.append(count)

    return answer

#다른사람 풀이
def solution(prices):
    answer = [0] * len(prices)
    for i in range(len(prices)):
        for j in range(i+1, len(prices)):
            if prices[i] <= prices[j]:
                answer[i] += 1
            else:
                answer[i] += 1
                break
    return answer
