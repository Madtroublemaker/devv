def min(a, b, c, d):
    min_number = a

    if b < min_number:
        min_number = b
    if c < min_number:
        min_number = c
    if d < min_number:
        min_number = d

    return min_number

# Чтение входных данных
a, b, c, d = map(int, input().split())

# Вызов функции и вывод результата
print(min(a, b, c, d))
