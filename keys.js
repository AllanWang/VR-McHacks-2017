function code(e) {
    e = e || window.event;
    return(e.keyCode || e.which);
}
window.onload = function(){
    document.onkeypress = function(e){
        var key = code(e);
        // do something with key
        switch (key) {
            case 114:
                console.log("r");
                document.getElementById("player").setAttribute("position", "10 1.764 0");
                break;
        }
    };
};