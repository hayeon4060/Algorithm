#나의 풀이
def solution(number, k):
    answer = ''
    number=list(map(lambda x: int(x), list(number)))
    tmp=[]
    tmp.append(0)
    k+=1
    j=0
    for i in range(len(number)):
        if number[i]>tmp[j] and k>0:
            tmp[j]=number[i]
            k-=1
            while number[i]>tmp[j-1] and k>0:
                j-=1
                tmp[j]=number[i]
                k-=1
                tmp.pop()
        elif number[i]<=tmp[j]:
            tmp.append(number[i])
            j+=1
        elif k==0 and i<len(number):
            for a in range(i, len(number)):
                tmp.append(number[a])
            break
    while k>0: #111119 일때 k=3 ==> 
        tmp.pop()
        k-=1
    return "".join(map(str, tmp))



#다른 사람 풀이1
def solution(number, k):
    st = []
    for i in range(len(number)):
        while st and k > 0 and st[-1] < number[i]:     #st[-1]은 마지막 값을 제거하지 않고 가져오기만 함
            st.pop()
            k -= 1
        st.append(number[i])
    return ''.join(st[:len(st) - k])



#다른 사람 풀이2
def solution(number, k):
    stack = [number[0]]
    for num in number[1:]:
        while len(stack) > 0 and stack[-1] < num and k > 0:
            k -= 1
            stack.pop()
        stack.append(num)
    if k != 0:
        stack = stack[:-k]
    return ''.join(stack)
