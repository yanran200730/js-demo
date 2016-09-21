#-*- coding:utf-8 -*-


import json

d = dict(name='Bob', age=20, score=88)
jsonObj = json.dumps(d)#json 序列化字典
_dict = json.loads(jsonObj)#反序列化

print (_dict)#反序列化为字典对象
print (type(_dict))
