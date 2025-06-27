function downloadFile(url) {
    var form = $('<form>');//定义一个form表单
    form.attr("style", "display:none");
    form.attr("target", "");
    form.attr("method", "post");
    form.attr("action", url);
    var input1 = $("<input>");
    input1.attr("type", "hidden");
    input1.attr("name", "exportData");
    input1.attr("value", (new Date()).getMilliseconds());
    $("body").append(form);//将表单放置在web中
    form.append(input1);
    form.submit();
}
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name.toLowerCase() + "=([^&]*)(&|$)");
    var r = window.location.search.toLowerCase().substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
function dateFormat(fmt, date) {
    let ret;
    let opt = {
        "y+": date.getFullYear().toString(),        // 年
        "M+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "m+": date.getMinutes().toString(),         // 分
        "s+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
}
function openwin(biaoti, page, w, h, full = false, reload = null) {
    var index = layer.open({
        type: 2,
        title: biaoti,
        shadeClose: false,
        shade: [0],
        maxmin: false, //开启最大化最小化按钮
        area: [w, h],
        anim: 2,
        content: page,
        zIndex: 5,
        end: function () {
            if (reload) {
                reload();
            }
        }
    });
    if (full) {
        layer.full(index);
    }
}