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
    
    
    
#2차 리스트를 만들어, 여벌있는 사람은 +1, 사라진 사람은 -1 하여 2개씩 더함
def solution(n, lost, reserve):

    tmp=[0 for i in range(n+1)]
    for i in reserve:
        tmp[i]=1
    for i in lost:
        tmp[i]=-1
    i=1
    no=0
    print(tmp)
    while i<=n :
        j=i+1
        if i==n:
            if tmp[i]==-1:
                no+=1
            break
        if tmp[i]!=0:
            if tmp[i]+tmp[j]==0:
                i+=2
            elif tmp[i]+tmp[j]<0:
                i+=1
                no+=1
            else:
                i+=1
        else:
            i+=1
    return n-no


#3차 성공 (여벌 가져온 사람이 도둑맞을 수도 있음)
def solution(n, lost, reserve):

    tmp=[0 for i in range(n+1)]
    for i in reserve:
        tmp[i]=1
    for i in lost:
        tmp[i]-=1
    i=1
    no=0
    print(tmp)
    while i<=n :
        j=i+1
        if i==n:
            if tmp[i]==-1:
                no+=1
            break
        if tmp[i]!=0:
            if tmp[i]+tmp[j]==0:
                i+=2
            elif tmp[i]+tmp[j]<0:
                i+=1
                no+=1
            else:
                i+=1
        else:
            i+=1
    return n-no
