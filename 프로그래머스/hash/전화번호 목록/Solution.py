def solution(phone_book):
    answer = True
    phone_book.sort()
    for i in range(0,len(phone_book)):
        for j in range(i+1,len(phone_book)):
            if phone_book[j].find(phone_book[i])==0:
                return False
    
    return answer



#다른사람 풀이
def solution(phoneBook):
    phoneBook = sorted(phoneBook)
#zip 함수를 통해 for 문을 2개 쓴 효과를 낼 수 있다.
# startwith 함수를 통해 접두어 관련 일치 여부 확인 가능하다. 
# 정렬 및 일방 비교를 하는것이 쌍방비교보다 빠름
    for p1, p2 in zip(phoneBook, phoneBook[1:]): 
        if p2.startswith(p1):
            return False
    return True


#hash사용
def solution(phone_book):
    answer = True
    hash_map = {}
    for phone_number in phone_book:
        hash_map[phone_number] = 1
    for phone_number in phone_book:
        temp = ""
        for number in phone_number:
            temp += number
            if temp in hash_map and temp != phone_number:
                answer = False
    return answer
