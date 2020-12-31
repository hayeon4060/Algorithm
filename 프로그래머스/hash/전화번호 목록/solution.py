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

    for p1, p2 in zip(phoneBook, phoneBook[1:]):
        if p2.startswith(p1):
            return False
    return True
