class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# 두 정렬 리스트 병합
class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        if l1 and l2:
            if l1.val > l2.val:
                l1, l2 = l2, l1

            l1.next = self.mergeTwoLists(l1.next, l2)

        return l1 or l2
    
    def sortList(self, head: ListNode) -> ListNode:
        if not (head and head.next):
            return head
        #런너 기법 활용: 연결리스트 순회 시 2개 포인터 동시에 사용하는 기법
        half, slow, fast = None, head, head
        while fast and fast.next:
            half, slow, fast = slow, slow.next, fast.next.next 
            # slow 한번 움직일떄 fast는 두번-> half는 가운데 노드로 정해짐
        half.next = None # 중앙을 기준으로 끊어버림
        #런너 기법 활용
        l1 = self.sortList(head) # 0 ~ half
        l2 = self.sortList(slow) # slow ~ 끝 (slow는 half.next)

        return self.mergeTwoLists(l1, l2)
    
    
    
