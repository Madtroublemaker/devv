n = int(input())
array = list(map(int, input().split()))

reversed_array = array[::-1]

for i in reversed_array:
    print(i, end=" ")