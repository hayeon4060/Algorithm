def solution(bridge_length, weight, truck_weights):
    answer = 0
    did=[]
    doing=[]
    length=[]
    while truck_weights or doing:
        
        answer+=1
        
        if length:
            if length[0]>=bridge_length:
                did.append(doing.pop(0))
                length.pop(0)
            list(map(lambda x: x+1, length))
        if truck_weights and (not doing or sum(doing)+truck_weights[0]<=weight) : 
            doing.append(truck_weights.pop(0))
            length.append(1)
        if not (doing or truck_weights): break
        
            
    return answer
