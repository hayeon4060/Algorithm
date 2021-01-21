#1차 number가 배열이 아니였음..
def solution(number, k):
    answer = ''
    tmp=[]
    tmp.append(0)
    k+=1
    j=0
    for i in range(len(number)):
        if number[i]>tmp[j] and k>0:
            tmp[j]=number[i]
            k-=1
        elif number[i]<=tmp[j]:
            tmp.append(number[i])
            j+=1
        if k==0:
            for a in range(i, len(number)):
                tmp.append(number[a])
            break
            
    print(tmp)
    
    return answer
#2차 테스트 3번에서 
def solution(number, k):
    answer = ''
    number=list(map(lambda x: int(x), list(number)))
    tmp=[]
    tmp.append(0)
    k+=1
    j=0
    for i in range(len(number)):
        print(i)
        if number[i]>tmp[j] and k>0:
            tmp[j]=number[i]
            k-=1
        elif number[i]<=tmp[j]:
            tmp.append(number[i])
            j+=1
        elif k==0 and i<len(number):
            for a in range(i, len(number)):
                tmp.append(number[a])
            break
        print(tmp, k, i)

    
    return answer
