import math
def solution(progresses, speeds):
    answer = []
    stand=0
    now=-1
    
    for pro, speed in zip(progresses, speeds):
        tmp=math.ceil((100-pro)/speed)
        
        if tmp>stand:
            answer.append(1)
            now+=1
            stand=tmp
            
        else:
            answer[now]+=1
            
    return answer
