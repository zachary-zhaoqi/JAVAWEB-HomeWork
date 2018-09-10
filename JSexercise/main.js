// window.onload = function () {
//     // 执行代码
//     //动态添加省级菜单
//     // var json_array = [{
//     //         "city": ["西城", "东城", "崇文", "宣武", ],
//     //         "province": "北京市"
//     //     },
//     //     {
//     //         "city": ["青羊", "河东", "河西", "南开", ],
//     //         "province": "天津市"
//     //     }
//     // ];
//     // var province = document.getElementById("addressprovince");
//     // province.add(new Option("请选择省份", 0), null);
//     // var city = document.getElementById("addresscity");
//     // city.add(new Option("请选择城市", 0), null);
//     // for (var i = 0; i < json_array.length; i++) {
//     //     var json_p = json_array[i].province;
//     //     province.add(new Option(json_p, i + 1), null);
//     // }
// }

/**
 *级联改变市级菜单。
 *
 */
function changetCity() {
    var json_array = [{
            "city": ["西城", "东城", "崇文", "宣武", ],
            "province": "北京市"
        },
        {
            "city": ["青羊", "河东", "河西", "南开", ],
            "province": "天津市"
        }
    ];
    var province = document.getElementById("addressprovince");
    var provinceValue = province.options[province.selectedIndex].value;
    var city = document.getElementById("addresscity");
    var optionsValue;

    //清空城市
    city.options.length = 0;
    city.add(new Option("请选择城市", 0), null);
    for (var i = 0; i < json_array.length; i++) {
        var json_p = json_array[provinceValue - 1].city[i];
        city.add(new Option(json_p, i + 1), null);
    }
}

function isNullCheck(a) {
    var text = a.value;
    if (text == null || text.length == 0 || text == "") {
        a.parentNode.parentNode.childNodes[1].childNodes[1].style.color = "red";
        return false;
    } else {
        a.parentNode.parentNode.childNodes[1].childNodes[1].style.color = "green";
        return true;
    }
}

function emailCheck() {
    var text = document.getElementById('email').value;

    var reg = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/; /*定义验证表达式*/

    if (!reg.test(text)) {
        document.getElementById('emailhint').style.color = "red";
        return false;
    } else {
        document.getElementById('emailhint').style.color = "black";
        return true;
    }
}

// function validNOtCheck(objs) {
//     var flage=-1;
//     for(var i=0;i<objs.length;i++){
//         var checkObj=objs[i];
//         if(checkObj.checked==true){
//             flage=1;
//         }
//     }
//     if (flage<0) {
//         objs.parentNode.parentNode.childNodes[1].childNodes[1].style.color = "red";
//         return false;
//     } else {
//         objs.parentNode.parentNode.childNodes[1].childNodes[1].style.color = "green";        
//         return true;
//     }
// }

function allCheck(formObj){
    if(
        isNullCheck(document.getElementById("usernamehint"))
        ||isNullCheck(document.getElementById("userpwd"))
        // ||validNOtCheck(formObj.interest)
    ){
        return true;
    }else{
        return false;
    }

}