var util = {
    getId: function (id) {
        return document.getElementById(id);
    },
    ajax: function (url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("get", url, true);
        xhr.send(null);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText);
                callback && callback(data);
            }

        };


    }
};
export default util;