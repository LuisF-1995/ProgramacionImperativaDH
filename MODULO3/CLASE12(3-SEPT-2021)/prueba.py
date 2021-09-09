#def max(numbers):
 #   max_num = -1
  #  for i in range(0, len(numbers)):
   #     if numbers[i] > max_num:
    #        max_num = numbers[i]
    #return max_num

#print(max([6,7,0,2,4]))

"""def mistery(lst):
    i=0
    for num in lst:
        lst[i]= lst[i] + num
        i = i + 1
    return lst

print(mistery([1,2,3,4]))
"""

def gcd(a, b):
    if a == 0:
        return b
    return (gcd(b%a, a))

print(gcd(8,12))
