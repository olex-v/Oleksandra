window.addEventListener("load", function () {
    var maps = document.getElementsByClassName("maps");
    for (var i = 0; i < maps.length; i++) {
        maps[i].addEventListener("click", function () {

            var darkLayer = document.createElement("div");
            darkLayer.id = "shadow";
            document.body.appendChild(darkLayer);
            var modalWin = document.getElementsByClassName("modalwin");
            var divblock = this.id;
            var j;
            switch (divblock) {
                case "map1": j = 0; break;
                case "map2": j = 1; break;
                case "map3": j = 2; break;
                case "map4": j = 3; break;
                case "map5": j = 4; break;
                case "map6": j = 5; break;
            }
            modalWin[j].style.display = "block";

            document.getElementsByClassName("xclose")[j].onclick = close;
            darkLayer.onclick = close;

            function close() {
                darkLayer.parentNode.removeChild(darkLayer);
                modalWin[j].style.display = "none";
                return false;
            };
        })
    }
})