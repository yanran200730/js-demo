# -*- coding: utf-8 -*-

import time,sys

#用户信息
user_infor = {
	"card_number": "yanran200830",
	"password"   : "xl11012003"
}

#延时退出程序
def login_out(times):
	time.sleep(times)
	sys.exit(1)

#登录函数
def login_verify():
	username = input("Pls enter card_number: ")
	time = 0
	login_result = False
	string = 'password'
	while True:
		if username == user_infor["card_number"]:
			passwd = input("Pls enter the %s: " % string)
			if passwd == user_infor["password" ]:
				print ("User%sLogin Success !" % username)
				login_result = True
				return login_result
			else:
				string = 'password aggin'
				time += 1
				if time == 3:
					login_log = open("login_log.txt","w")
					login_log.write(username)
					login_log.close()
					print ('Amounts of login, account is locked')
					login_out(3)
				print ("Password input error! ")	
		else:
			username = input("Please type in the code again: ")

login_verify()

