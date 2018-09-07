// 检查姓名
function nameCheck() {
    var text=document.getElementById('name').value;
 
    var reg=/^[\u4E00-\u9FA5]{2,4}$/;   /*定义验证表达式*/

    if (!reg.test(text)) {
        document.getElementById('namehint').innerHTML = "姓名只能为二至四位数中文";
        return false;
    }else{
        document.getElementById('namehint').innerHTML = "";
        return true;
    }
}

function telCheck() {
    var text=document.getElementById('tel').value;
 
    var reg=/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;   /*定义验证表达式*/

    if (!reg.test(text)) {
        document.getElementById('telhint').innerHTML = "电话格式不正确";
        return false;
    }else{
        document.getElementById('telhint').innerHTML = "";
        return true;
    }
}

function emailCheck() {
    var text=document.getElementById('email').value;
 
    var reg=/^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;   /*定义验证表达式*/

    if (!reg.test(text)) {
        document.getElementById('emailhint').innerHTML = "邮件格式不正确";
        return false;
    }else{
        document.getElementById('emailhint').innerHTML = "";
        return true;
    }
}

function emailcodeCheck() {
    var text=document.getElementById('emailcode').value;
 
    var reg=/^[1-9][0-9]{5}$/;   /*定义验证表达式*/

    if (!reg.test(text)) {
        document.getElementById('emailcodehint').innerHTML = "邮编格式不正确";
        return false;
    }else{
        document.getElementById('emailcodehint').innerHTML = "";
        return true;
    }
}

function appealContentCheck() {
    var text=document.getElementById('appealContent').innerHTML;

    if (text==""||text.length==0||text==null) {
        document.getElementById('appealContenthint').innerHTML = "必填，不可为空。";
        return false;
    }else{
        document.getElementById('appealContenthint').innerHTML = "";
        return true;
    }
}

function appealReasonCheck() {
    var text=document.getElementById('appealReason').innerHTML;

    if (text==""||text.length==0||text==null) {
        document.getElementById('appealReasonhint').innerHTML = "必填，不可为空。";
        return false;
    }else{
        document.getElementById('appealReasonhint').innerHTML = "";
        return true;
    }
}

function appealEvidenceCheck() {
    var text=document.getElementById('appealEvidence').innerHTML;

    if (text==""||text.length==0||text==null) {
        document.getElementById('appealEvidencehint').innerHTML = "必填，不可为空。";
        return false;
    }else{
        document.getElementById('appealEvidencehint').innerHTML = "";
        return true;

    }
}

function allCheck() {
    if (nameCheck()&&telCheck()&&emailCheck()&&emailcodeCheck()&&appealContentCheck()&&appealEvidenceCheck()&&appealReasonCheck()) {
    
    } else {
        alert("有必填项不正确！")
        return false;
    }
    
}
