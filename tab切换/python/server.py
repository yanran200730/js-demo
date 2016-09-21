# -*- coding: utf-8 -*-

''' socket FTP '''

import socket 

host = '127.0.0.1'#服务器主机地址
port = 44444 #服务器端口号
socketObj = socket.socket(socket.AF_INET, socket.SOCK_STREAM) #创建socket对象
socketObj.bind((host,port))#bind 方法参数为一个元组
socketObj.listen(1)#监听socket端口
conn,addr = socketObj.accept()#返回一个客户机 socket（带有客户机端的地址信息）

while True:
	data = conn.recv(1024)
	if not data:
		break
	connn.sendall(data)
conn.close()		




