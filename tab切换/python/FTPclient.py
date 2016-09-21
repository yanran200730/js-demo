# -*- coding: utf-8 -*-

import socket

def client(host,port):
	socketObj = socket.socket(socket.AF_INET,socket.SOCL_STREAM)
	socketObj.connect((host,port))
	s.sendall('hello world!')
	data = s.recv(1024)
	s.close()
	print ('Received',data)

client('127.0.0.1',44444)	