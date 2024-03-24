v = int(input())
t = int(input())

s = v*t

if v<0:
    s = 109+s

result = s % 109

print(result)