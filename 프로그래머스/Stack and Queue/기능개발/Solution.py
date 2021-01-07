#나의풀이
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


#다른사람 풀이
def solution(progresses, speeds):
    Q=[]
    for p, s in zip(progresses, speeds):
        if len(Q)==0 or Q[-1][0]<-((p-100)//s):
            Q.append([-((p-100)//s),1])
        else:
            Q[-1][1]+=1
    return [q[1] for q in Q]
