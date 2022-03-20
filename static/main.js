import * as THREE from "./three.module.js";

import * as GRID from "./methods.js"


let socket = io("http://" + window.location.hostname + ":" + window.location.port);



function httpGet(Url) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", Url, false); // false for synchronous request
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
}


window.onload = function() {
    let tmp = GRID.init(), scene = tmp[0], renderer = tmp[1], camera = tmp[2], controls = tmp[3];
    let stats = GRID.initStats(Stats);
	
	const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshPhongMaterial({});
	const cube = new THREE.Mesh( geometry, material );

    cube.material.color.setRGB(255, 0, 0)
	cube.name = "poly";

    scene.add( cube );

	
    socket.on("update", function(msg) {
    
	});


    // Main loop
    let GameLoop = function() {
        requestAnimationFrame(GameLoop);
        stats.begin();
        controls.update();


        renderer.render(scene, camera);
        stats.end();
    }
    GameLoop()
};

