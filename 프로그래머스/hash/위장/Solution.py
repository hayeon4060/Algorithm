import collections
def solution(clothes):
    answer = 1
    a=[]
    for pos,val in clothes:
        a.append(val)

    a=collections.Counter(a)
    for i in a.values():
        answer*=(i+1)
    return answer-1



#다른 사람 풀이1
def solution(clothes):
    from collections import Counter
    from functools import reduce
    cnt = Counter([kind for name, kind in clothes])
    answer = reduce(lambda x, y: x*(y+1), cnt.values(), 1) - 1
    return answer



#다른 사람 풀이2
import collections
from functools import reduce

def solution(c):
    return reduce(lambda x,y:x*y,[a+1 for a in collections.Counter([x[1] for x in c]).values()])-1



#hash사용
def solution(clothes):
    clothes_type = {}

    for c, t in clothes:
        if t not in clothes_type:
            clothes_type[t] = 2
        else:
            clothes_type[t] += 1

    cnt = 1
    for num in clothes_type.values():
        cnt *= num

    return cnt - 1
