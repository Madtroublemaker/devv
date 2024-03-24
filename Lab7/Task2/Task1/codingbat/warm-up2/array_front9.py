def array_front9(nums):
  count = 0
  for i in nums:
    if count<4 and i==9:
      return True
    count+=1
  return False
