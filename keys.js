function code(e) {
    e = e || window.event;
    return(e.keyCode || e.which);
}
window.onload = function(){
    document.onkeypress = function(e){
        var key = e.keyCode;
        // do something with key
        switch (key) {
            case 97:
                console.log("r");
                document.getElementById("player").setAttribute("position", "35 1.764 -35");
                break;
        }
    };
};