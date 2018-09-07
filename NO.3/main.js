// // 测试三个window对象弹出框的作用。
// var a=prompt("这是prompt");
// var b=confirm(a);
// alert(b);
// if (b) {
//     alert("close");
//     window.open("about:blank","_self").close()    
// } else {
//     alert("open");
//     open();
// }

var myintout;
var mytimeout;
var a=0xffffff;
var flag=-1;
function aa() {
    var x;
    if (a>0x0&&flag<0) {
        a--;
        if (a.length<6) {
            a='0'+a;
        }
        x='#'+a.toString(16);
    }
    if (a==0x0&&flag<0) {
        flag=1;
    }
    if(a<0xffffff&&flag>0){
        a++;
        if (a.length<6) {
            a='0'+a;
        }
        x='#'+a.toString(16);
    }
    if(a==0xffffff&&flag>0){
        flag=-1;
    }
    document.getElementById("no1").style.backgroundColor=x;
}
function a1() {
    myintout=setInterval(aa,1);
}
function a2() {
    clearInterval(myintout);
}
function bb() {
    a=a-1582;
    if (a.length<6) {
        a='0'+a;
    }
    x='#'+a.toString(16);
    document.getElementById("no1").style.backgroundColor=x;
}
function a3() {
    var time=document.getElementById("text1").value;
    mytimeout=setTimeout(bb, time);
}
function a4() {
    clearTimeout(mytimeout);
}