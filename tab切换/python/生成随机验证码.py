# -*- coding: utf-8  -*-
import random

_list = []

for i in range(6):
	if i == random.randint(2,5):
		_list.append(str(i))
	else:
		_int = random.randint(65,90)
		_list.append(chr(_int))

print (''.join(_list))