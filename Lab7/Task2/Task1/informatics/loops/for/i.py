import math

def count_divisors(x):
    # Инициализируем счетчик делителей
    divisors_count = 0
    
    # Находим простые множители числа x
    for i in range(1, int(math.sqrt(x)) + 1):
        if x % i == 0:
            if i * i == x:
                divisors_count += 1
            else:
                divisors_count += 2
                
    return divisors_count

# Ввод числа x
x = int(input())

# Подсчет количества делителей числа x
result = count_divisors(x)

# Вывод результата
print(result)
