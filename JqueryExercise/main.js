function isNullCheck(Obj) {
    var text = Obj.val();
    if (text == null || text.length == 0 || text == "") {
        Obj.parent().parent().find("p").css("color","red");
        return false;
    } else {
        Obj.parent().parent().find("p").css("color","green");
        return true;
    }
}

function emailCheck() {
    var text=$("#email").val();
    var reg=/^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;

    if (!reg.test(text)) {
       $("#emailhint").css("color","red");
        return false;
    } else {
        $("#emailhint").css("color","black");
        return true;
    }
}

function Onlycheck(Obj) {
    var flage=-1;
    for(var i=0;i<Obj.length;i++){
        var checkObj=Obj[i];
        if(checkObj.checked==true){
            flage=1;
        }
    }
    if (flage>0) {
        Obj.parent().parent().find("p").css("color","green");
        return true;
    }else{
        Obj.parent().parent().find("p").css("color","red");
        return false;
    }

}

function allCheck(Obj) {
    var flage=true;
    if(!isNullCheck($("#username"))){
        flage=false;
    }
    if(!isNullCheck($("#userpwd"))){
        flage=false;
    }if(!emailCheck()){
        flage=false;
    }
    if(!Onlycheck($("[name='interest']"))){
        flage=false;
    }
    if(flage==true){
        return true;
    }else{
        return false;
    }
}
$(document).ready(function(){
    var json_array = [{
        "city": ["西城", "东城", "崇文", "宣武", ],
        "province": "北京市"
    },
    {
        "city": ["青羊", "河东", "河西", "南开", ],
        "province": "天津市"
    }
    ];
    
    $("#addressprovince").append(new Option("请选择省份",0),null);
    $("#addresscity").append(new Option("请选择城市",0),null);
    for(var i=0;i<json_array.length;i++){
        $("#addressprovince").append(new Option(json_array[i].province,i+1),null);
    }

    $("#addressprovince").change(function () {
        $("#addresscity").empty();
        $("#addresscity").append(new Option("请选择城市",0),null);
        var json_P=json_array[$("#addressprovince").val()-1].city;
        for (var i = 0; i < json_array.length; i++) {
            $("#addresscity").append(new Option(json_P[i],i+1),null);  
        }
    });
});