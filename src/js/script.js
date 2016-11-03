$(function () {

    var searchForm = document.querySelector('#searchForm');
    var searchButton = document.querySelector("#searchButton");

    searchForm.addEventListener('keydown', function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            SearchFunc();
        }
    });
    searchButton.addEventListener("click", function (e) {
        e.preventDefault();
        SearchFunc();
    });
});

function SearchFunc() {
    var search = document.querySelector("#searchField").value;
    if (search.length > 0) {
        search = encodeURIComponent(search);
    } else {
        return
    }
    var request = new XMLHttpRequest();

    request.open('GET', 'https://www.googleapis.com/customsearch/v1?key=AIzaSyD_yotJt04CJfQ4Ibc7wG7uMLP5fEy_zfY&cx=016795527241021289695:jljvvlrwqde&q=' + search);

    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
                var data = JSON.parse(request.responseText);
                var html = $("#test").html();
                var content = tmpl(html, {
                    data: data.items
                });
                $('#searchingResults').html('');
                $('#searchingResults').prepend(content);
            }
        }
    };
    request.send();
};