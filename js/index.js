import util from "./util";
console.log(util)
var url = "data/list.json";
var html = "";
var tpl = util.getId('tpl').innerHTML;
var app = util.getId("app");
util.ajax(url, function (data) {
    var list = data.list;
    for (var i = 0, len = list.length; i< len; i++) {
        html += processData(tpl, list[i]);
    }
    app.innerHTML = html;



});

function processData(tpl, data) {
    var regex = /\{(\w+)\}/g;
//     console.log(data);
    return tpl.replace(regex, function (match, $1) {
        return data[$1];

    });
}