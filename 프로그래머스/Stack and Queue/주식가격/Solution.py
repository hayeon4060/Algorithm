def solution(prices):
    answer = []
    
    for i in prices:
        stand=0
        where=i
        for tmp in prices:
            where+=1
            if i>tmp:
                answer.append(where-stand)
                stand+=1
                break
        answer.append(where-stand)
    return answer
