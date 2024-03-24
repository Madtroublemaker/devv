def pos_neg(a, b, negative):
  if (negative and a<0 and b<0) or (a*b<0 and not negative):
    return True
  return False
  