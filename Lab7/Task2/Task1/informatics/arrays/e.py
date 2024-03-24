n = int(input())
array = list(map(int, input().split()))
x = False

for i in range(1, n):
    if array[i]*array[i-1]>0:
        x = True
        break

if x:
    print("YES")
else:
    print("NO")
        