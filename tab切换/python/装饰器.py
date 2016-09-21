# -*- coding: utf-8 -*-

def foo(func):
	def doo(string):
		print ('start')
		result = func(string)
		print ('stop')
		return result 
	return doo

@foo
def func(string):
	print (string+'肚子饿了')
	return 'finish'
'''
func()执行完声明之后，
func() = def doo():
				print ('start')
				func()
				print ('stop')
			return doo
'''

result = func('yanran的')

print (result)