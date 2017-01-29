function code(e) {
    e = e || window.event;
    return (e.keyCode || e.which);
}
window.onload = function () {
    document.onkeypress = function (e) {
        var key = code(e);
        // do something with key
        if (String.fromCharCode(key) == 'r') {
                document.getElementById("player").setAttribute("position", "35 1.764 -35");
                document.getElementById("platform-start").setAttribute("position", "35 0 -35");
                document.getElementById("platform-start-second").setAttribute("position", "30 0 -35");
        }
    };
};

// see if (keys.KeyW || keys.ArrowUp)    { this.dVelocity.z -= 1; } in aframe-extras