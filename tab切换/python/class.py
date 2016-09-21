# -*- coding: utf-8 -*-

"""
	想要修改类属性，必须通过类对象去修改，使用实例对象只会添加同名实例属性，
	并且同名的属性，实力对象去引用该属性时，会被强制屏蔽雷属性，即引用实例属性。

	类方法：是类对象所拥有的方法，需要用修饰器@classmethod来标识其为类方法。
	私有方法：是类对象所拥有的方法，需要用修饰器@staticmethod来标识其为类方法。


"""
class Province(object):
	"""docstring for Province"""

	memo = '中国的23个省之一' #静态字段  类
	__Name = '北方' #私有属性
	def __init__(self, name,capital,leader):#对象
		#super(Province, self).__init__()
		#动态字段
		self.name = name
		self.capital = capital
		self.leader = leader 

	def sports_meet(self):
		print (self.name + '正在开运动会')	

	@staticmethod #静态方法 属于类
	def Foo():
		print ('每个省要带头反腐')

    @classmethod #类方法，引用类对象里面的属性
    def getCountry(cls):
        return cls.memo		

	@property#特性
	def bar(self):
	    return self.name

	def getName(self):
		return self.__Name #获取私有属性    

hb = Province('河北','石家庄','小名')	
sd = Province('山东','济南','小虎')			

print (hb.capital)
print (sd.memo)#实例化对象可以访问静态字段

sd.sports_meet()

print (Province.memo)
Province.Foo()

sd.Foo()

print (sd.bar)#特性


print (hb.getName())#先实例化再获取私有属性