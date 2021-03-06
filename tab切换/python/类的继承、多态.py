# -*- coding: utf-8 -*-

'''
　　1）在Python中，如果父类和子类都重新定义了构造方法__init( )__，在进行子类实例化的时候，子类的构造方法不会自动调用父类的构造方法，必须在子类中显示调用。

　　2）如果需要在子类中调用父类的方法，需要以   父类名.方法  这种方式调用，以这种方式调用的时候，注意要传递self参数过去。

　　对于继承关系，子类继承了父类所有的公有属性和方法，可以在子类中通过父类名来调用，而对于私有的属性和方法，子类是不进行继承的，因此在子类中是无法通过父类名来访问的。

　　对于多重继承，比如

　　class SubClass(SuperClass1,SuperClass2)

　　此时有一个问题就是如果SubClass没有重新定义构造方法，它会自动调用哪个父类的构造方法？这里记住一点：以第一个父类为中心。如果SubClass重新定义了构造方法，
    需要显示去调用父类的构造方法，此时调用哪个父类的构造方法由你自己决定；若SubClass没有重新定义构造方法，则只会执行第一个父类的构造方法。并且若SuperClass1
    和SuperClass2中有同名的方法，通过子类的实例化对象去调用该方法时调用的是第一个父类中的方法。
'''
class UniversityMember(object):

    def __init__(self,name,age):
        self.name = name
        self.age = age

    def getName(self):
        return self.name

    def getAge(self):
        return self.age

class Student(UniversityMember):

    def __init__(self,name,age,sno,mark):
        UniversityMember.__init__(self,name,age)     #注意要显示调用父类构造方法，并传递参数self
        self.sno = sno
        self.mark = mark

    def getSno(self):
        return self.sno

    def getMark(self):
        return self.mark



class Teacher(UniversityMember):

    def __init__(self,name,age,tno,salary):
        UniversityMember.__init__(self,name,age)
        self.tno = tno
        self.salary = salary

    def getTno(self):
        return self.tno

    def getSalary(self):
        return self.salary