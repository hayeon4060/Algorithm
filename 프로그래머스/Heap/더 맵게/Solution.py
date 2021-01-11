#1차 (부분 통과)
def solution(scoville, K):
    answer = 0
    low=[]
    low=list(filter(lambda x: x<K,scoville))
    i=0
    j=len(low)-1
    while low:
        answer+=1
        tmp=low[i]+low[j]*2
        if j>i:
            if K>tmp:
                low[j]=tmp
                i+=1
            else:
                i+=1
                j-=1
        elif i==j:
            break
        else:
            answer-=1
            break
    return answer

#2차 부분 실패(런타임 에러)
def solution(scoville, K):
    answer = 0
    low=[]
    low=list(filter(lambda x: x<K,scoville))
    
    i=-1
    while low:
        low.sort()
        i+=1
        j=i+1
        if low[i]>=K:
            break
        answer+=1
        low[j]=low[i]+low[j]*2
        
    return answer
