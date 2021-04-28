# 팰린드롬연결리스트_201


# que 만들기
# 우선 head에 뭐 들어있는지 확인 없->T
# 있으면 q에 집어넣기 while
# 팰린드롬 팝 앞, 뒤 해서 다름 F
# 마지막 -> t


# Definition for singly-linked list.
import collections
from collections import deque
# from typing import Deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        
        q: deque = deque()
        # q: Deque = collections.deque()
       
        
        
        if not head:
            return True
        print("헤드 존재")
        
        node=head
        
        while node is not None:
            q.append(node.val)
            node=node.next
        
        while len(q)>1:
            if q.popleft() != q.pop():
                return False
            
        return True
            
        
'''처음에는 q를 리스트 형식으로 만듦, 리스트로 만들면 pop(0)을 할때 다시 앞으로
   뒤에있는것들 땡겨와야됨 ->O(n)임 pop(0)
   deque를 하면 그냥 자르면 됨 ->O(1)임 popleft()
'''
