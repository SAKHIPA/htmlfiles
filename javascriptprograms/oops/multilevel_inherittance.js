class Parant{
    m1(){
    console.log("parent");
    }
}
class Child extends Parant{
    m2(){
        console.log("child");
    }
}
class SubChild extends Child{
    m3(){
        console.log("subchild");
    }
}

var sub=new SubChild()
sub.m1()
sub.m2()
sub.m3()


