x = int(input())

x_str = str(x)

sum_digits = 0

for digit in x_str:
    sum_digits += int(digit)

print(sum_digits)
