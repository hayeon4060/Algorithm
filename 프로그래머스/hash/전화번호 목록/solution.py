def solution(phone_book):
    answer = True
    phone_book.sort()
    for i in range(len(phone_book)):
        for j in range(len(phone_book)-1-i):
            if phone_book[i].find(phone_book[j+1+i])==0:
                return False
    
    return answer
