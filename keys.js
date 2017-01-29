function code(e) {
    e = e || window.event;
    return (e.keyCode || e.which);
}

function reset() {
    document.getElementById("player").setAttribute("position", "35 1.764 -35");
    document.getElementById("platform-start").setAttribute("position", "35 0 -35");
    document.getElementById("platform-start-second").setAttribute("position", "30 0 -35");
}

window.onload = function () {
    document.onkeypress = function (e) {
        var key = code(e);
        // do something with key

        if (String.fromCharCode(key) == 'r') {
                reset();
        }
    };
};

setInterval(function() { 
        var cameraEl = document.querySelector('#player');
        var worldPos = new THREE.Vector3();
        worldPos.setFromMatrixPosition(cameraEl.object3D.matrixWorld);
        minHeight = document.getElementById("player").getAttribute("minHeight");
        if (worldPos.y < minHeight) {
                reset();
        }
    }, 3000);

// see if (keys.KeyW || keys.ArrowUp)    { this.dVelocity.z -= 1; } in aframe-extras