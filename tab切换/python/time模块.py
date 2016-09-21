# -*- coding: utf-8 -*-

import time 

print (time.time()) #时间戳，从1970.1.1算起
print (time.gmtime())
print (time.strftime("%Y-%m-%d %X",time.localtime()))