def solution(array, commands):
    answer = []

    for i in commands:
        first = i[0]
        end=i[1]
        tmp=[]

        for count in range(first-1, end):
            tmp.append(array[count])
        tmp.sort()
        answer.append(tmp[i[2]-1])
    return answer


#다른사람 풀이1
def solution(array, commands):
    return list(map(lambda x:sorted(array[x[0]-1:x[1]])[x[2]-1], commands))


#다른사람 풀이2
def solution(array, commands):
    answer = []
    for command in commands:
        i,j,k = command
        answer.append(list(sorted(array[i-1:j]))[k-1])
    return answer
