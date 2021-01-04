#다른사람 풀이1
def solution2(numbers):
    numbers = list(map(str, numbers))
    print("numbers: {}".format(numbers))

    numbers.sort(key=lambda x: x*3, reverse=True)
    print("numbers: {}".format(numbers))

    return str(int(''.join(numbers)))
