# -*- coding: utf-8 -*-

'''
	python  序列化
'''
import pickle 

li = ['javascript','python3','django',8,'calvin','萨比']

dumpsed = pickle.dumps(li)#返回bytes 对象
loadsed = pickle.loads(dumpsed)#反序列化
print (dumpsed)
print (loadsed)

file  = open('text.txt','wb')
pickle.dump(li,file)
file = open('text.txt','rb')
result = pickle.load(file)#读取
print (result)
file.close()