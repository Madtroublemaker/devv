x = int(input())
d = int(input())

x_str = str(x)

count = 0

for digit in x_str:
    if int(digit) == d:
        count += 1

# Выводим результат
print(count)
