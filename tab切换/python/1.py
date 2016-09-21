# -*- coding: utf-8 -*-

class Person(object):

	def __init__(self,name,age):
		self.name = name
		self.age  = age

class Yanran(Person):

	def __init__(self,name,age,sex):
		Person.__init__(self,name,age)
		self.sex = sex


