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
