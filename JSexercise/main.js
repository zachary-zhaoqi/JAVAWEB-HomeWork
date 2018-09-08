window.onload = function () {
    // 执行代码
    //动态添加省级菜单
    var json_array =[
        { "city": ["西城","东城","崇文","宣武",],"province": "北京市"},
        { "city": ["青羊","河东","河西","南开",],"province": "天津市"}
    ];
    var province=document.getElementById("addressprovince");
    province.add(new Option(json_p,i+1),null);
    for(var i=0;i<json_array.length;i++){
        var json_p=json_array[i].province;
        province.add(new Option(json_p,i+1),null);
    }
}

/**
 *级联改变市级菜单。
 *
 */
function changetCity() {
    var json_array =[
        { "city": ["西城","东城","崇文","宣武",],"province": "北京市"},
        { "city": ["青羊","河东","河西","南开",],"province": "天津市"}
    ];
    var province=document.getElementById("addressprovince");
    var provinceValue=province.options[province.selectedIndex].value;
    var city=document.getElementById("addresscity");
    var optionsValue;

    //清空城市
    city.options.length=0;
    city.add(new Option("请选择城市",0),null);
    for(var i=0;i<json_array.length;i++){
        var json_p=json_array[provinceValue-1].city[i];
        city.add(new Option(json_p,i+1),null);
    }
}