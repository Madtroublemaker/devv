def power(a, n):
    result = 1.0

    if n < 0:
        a = 1 / a
        n = -n

    while n > 0:
        if n % 2 == 1:
            result *= a
        a *= a
        n //= 2

    return result

a, n = map(float, input().split())

print(power(a, int(n)))
