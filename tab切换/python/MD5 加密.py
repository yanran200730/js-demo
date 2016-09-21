# -*- coding:utf-8 -*-
import hashlib

hash1 = hashlib.md5()
hash1.update(b'admin')#参数必须是byte类型，否则编码错误

print (hash1.hexdigest())

hash2 = hashlib.md5()
data = '偶肚子饿了！'
hash2.update(data.encode(encoding='utf-8'))#参数若是中文，先对其进行中文编码

print (hash2.hexdigest())