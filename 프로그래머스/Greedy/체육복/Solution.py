#1차 
def solution(n, lost, reserve):
    
    answer=[i+1 for i in lost if i+1 in reserve ]
    answer+=list(map(lambda x: x-2, answer))
    answer=list(set(answer))
    answer=[i for i in answer if i in reserve]
    print(answer)
    if len(answer)>len(lost):
        avail=len(lost)
    else:
        avail=len(answer)
    return n-len(lost)+avail
    #return n-len(reserve)+len(answer_set)
