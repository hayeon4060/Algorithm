#공부하자....
def solution(numbers):
    numbers=list(map(str,numbers)) #str형태로 바꾸어 적용
    numbers.sort(key=lambda x:x*3) 
    #문자열은 앞자리를 보고 크기 정렬을 하기에 ex)"3"->"333" 으로 변경후 솔트
    #ex) 999 787878 989898 777  111 ---> 111 777 787878 989898 999 정렬 가능함
    #하지만 numbers에 그렇게 저장되는것이 아님. sort의 키를 그렇게 보고 하는것
    numbers.reverse() #뒤집기!
    return str(int(''.join(numbers))) 
    #str(int())를 하는 이유  --->'0000' 같은 걸 '0'으로 바꾸기 위

#다른사람 풀이1
def solution2(numbers):
    numbers = list(map(str, numbers))
    print("numbers: {}".format(numbers))

    numbers.sort(key=lambda x: x*3, reverse=True)
    print("numbers: {}".format(numbers))

    return str(int(''.join(numbers)))
