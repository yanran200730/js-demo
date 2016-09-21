# -*- coding: utf-8 -*-

user = "yanran"
passwd = "xl11012003"
time = 0
user1 = input("请输入用户名：")
while True:
	file = open("text.txt","r")
	str  = file.read()	
	if user1 == user and len(str) >0 :
		print ("用户%s 错误次数过多,暂时锁定！" % file.read(5))
		break			
	elif user1 == user:
		passwd1 = input("请输入密码：")
		if passwd1 == passwd:
			print ("Welcome to my website!")
			break
		elif time<2:
			print("密码错误！")	
		elif time == 2:
			print ("错误次数过多！")
			f = open("text.txt","w")
			f.write(user1)
			f.close()
			break
	else:
		print("用户名错误！")
	time += 1
	file.close()		
			 	
	

