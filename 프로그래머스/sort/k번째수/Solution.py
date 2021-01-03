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
