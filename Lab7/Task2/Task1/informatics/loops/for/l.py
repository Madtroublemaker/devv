binary = input()

decimal_number = 0
for i in range(len(binary)):
    if binary[i] == '1':
        decimal_number += 2**(len(binary) - i - 1)

print(decimal_number)