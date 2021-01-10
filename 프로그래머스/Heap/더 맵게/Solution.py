#1차 
def solution(scoville, K):
    answer = 0
    low=[]
#    for i in range(0, len(scoville)):
#        if K>scoville[i]:
#            low.append(scoville[i])
#        else:
#            break
    #map(lambda x: low.append(X) if x<k else break, scoville )
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
