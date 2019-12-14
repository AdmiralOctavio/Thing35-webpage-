var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  800
);

var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
scene.add(directionalLight);
var texture = new THREE.TextureLoader().load('kazuma.jpg');
var matText = new THREE.MeshBasicMaterial({map: texture})
var texture2 = new THREE.TextureLoader().load('Akko.jpg');
var matText2 = new THREE.MeshBasicMaterial({map: texture2})
var texture3 = new THREE.TextureLoader().load('rings.png');
var matText3 = new THREE.MeshBasicMaterial({map: texture3})
var mat = new THREE.LineBasicMaterial({
  color: 0x070532,
  linewidth: 10
});
var mat2 = new THREE.LineBasicMaterial({
  color: 0x070532,
  linewidth: 1
});
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//first cube

var geometry = new THREE.BoxGeometry(10, 10, 10);
var cube = new THREE.Mesh(geometry, matText);
scene.add(cube);
var geo = new THREE.EdgesGeometry(cube.geometry);
//First cube wireframe

var wireframe = new THREE.LineSegments(geo, mat2);
cube.add(wireframe);
//***Sphere Code here***

var geometry2 = new THREE.SphereGeometry(9, 10, 10, 0, 6.3, 0, 3.1);
var sphere = new THREE.Mesh(geometry2, matText2);
scene.add(sphere);
var geo2 = new THREE.EdgesGeometry(sphere.geometry);
//second sphere wireframe

var wireframe2 = new THREE.LineSegments(geo2, mat2);
sphere.add(wireframe2);
//ring code

var geometryr = new THREE.RingGeometry(20, 15, 10, 5, 8);
var materialr = new THREE.MeshBasicMaterial({
  color: 0x070532,
  side: THREE.DoubleSide
});
var ring = new THREE.Mesh(geometryr, matText3);
scene.add(ring);
var geor = new THREE.EdgesGeometry(ring.geometry);
var wireframer = new THREE.LineSegments(geor, mat2);
ring.add(wireframer);
//**Second Box Code here***

var geometry3 = new THREE.BoxGeometry(10, 10, 10);
var cube2 = new THREE.Mesh(geometry3, matText);
scene.add(cube2);
//Second box wireframe

var geo3 = new THREE.EdgesGeometry(cube2.geometry);
var mat3 = new THREE.LineBasicMaterial({
  color: 0x070532,
  linewidth: 1
});
var wireframe3 = new THREE.LineSegments(geo3, mat3);
cube2.add(wireframe3);
//ALL CODE FOR H
//H
var geometry4 = new THREE.BoxGeometry(5, 30, 2);
var cube3 = new THREE.Mesh(geometry4, texture);
scene.add(cube3);
//H wireframe
var geo4 = new THREE.EdgesGeometry(cube3.geometry);
var mat4 = new THREE.LineBasicMaterial({
  color: 0xffffff,
  linewidth: 1
});
var wireframe4 = new THREE.LineSegments(geo4, mat4);
cube3.add(wireframe4);

cube3.position.x = -130;
cube3.position.y = 40;

//H
var geometry5 = new THREE.BoxGeometry(5, 30, 2);
var cube4 = new THREE.Mesh(geometry5, texture);
scene.add(cube4);
//H wireframe
var geo5 = new THREE.EdgesGeometry(cube4.geometry);
var mat5 = new THREE.LineBasicMaterial({
  color: 0xffffff,
  linewidth: 1
});
var wireframe4 = new THREE.LineSegments(geo5, mat5);
cube4.add(wireframe4);

cube4.position.x = -115;
cube4.position.y = 40;

//H
var geometry6 = new THREE.BoxGeometry(10, 5, 2);
var cube5 = new THREE.Mesh(geometry6, texture);
scene.add(cube5);
//H wireframe
var geo5 = new THREE.EdgesGeometry(cube5.geometry);
var mat5 = new THREE.LineBasicMaterial({
  color: 0xffffff,
  linewidth: 1
});
var wireframe4 = new THREE.LineSegments(geo5, mat5);
cube5.add(wireframe4);

cube5.position.x = -122.6;
cube5.position.y = 40;
//ALL CODE FOR E
//E
var geometry7 = new THREE.BoxGeometry(5, 30, 2);
var cube6 = new THREE.Mesh(geometry7, texture);
scene.add(cube6);
//E wireframe
var geo6 = new THREE.EdgesGeometry(cube6.geometry);
var mat6 = new THREE.LineBasicMaterial({
  color: 0xffffff,
  linewidth: 1
});
var wireframe6 = new THREE.LineSegments(geo6, mat6);
cube6.add(wireframe6);

cube6.position.x = -100;
cube6.position.y = 40;

//E
var geometry8 = new THREE.BoxGeometry(15, 5, 2);
var cube7 = new THREE.Mesh(geometry8, texture);
scene.add(cube7);
//E wireframe
var geo7 = new THREE.EdgesGeometry(cube7.geometry);
var mat7 = new THREE.LineBasicMaterial({
  color: 0xffffff,
  linewidth: 1
});
var wireframe7 = new THREE.LineSegments(geo7, mat7);
cube7.add(wireframe7);

cube7.position.x = -90;
cube7.position.y = 52.5;

//E
var geometry9 = new THREE.BoxGeometry(15, 5, 2);
var cube8 = new THREE.Mesh(geometry9, texture);
scene.add(cube8);
//E wireframe
var geo8 = new THREE.EdgesGeometry(cube8.geometry);
var mat8 = new THREE.LineBasicMaterial({
  color: 0xffffff,
  linewidth: 1
});
var wireframe8 = new THREE.LineSegments(geo8, mat8);
cube8.add(wireframe8);

cube8.position.x = -90;
cube8.position.y = 40;

//E
var geometry10 = new THREE.BoxGeometry(15, 5, 2);
var cube9 = new THREE.Mesh(geometry10, texture);
scene.add(cube9);
//E wireframe
var geo9 = new THREE.EdgesGeometry(cube9.geometry);
var mat9 = new THREE.LineBasicMaterial({
  color: 0xffffff,
  linewidth: 1
});
var wireframe9 = new THREE.LineSegments(geo9, mat9);
cube9.add(wireframe9);

cube9.position.x = -90;
cube9.position.y = 27.6;
//ALL CODE FOR L
//L
var geometry11 = new THREE.BoxGeometry(5, 30, 2);
var cube10 = new THREE.Mesh(geometry11, texture);
scene.add(cube10);
//L wireframe
var geo10 = new THREE.EdgesGeometry(cube10.geometry);
var mat10 = new THREE.LineBasicMaterial({
  color: 0xffffff,
  linewidth: 1
});
var wireframe10 = new THREE.LineSegments(geo10, mat10);
cube10.add(wireframe10);

cube10.position.x = -70;
cube10.position.y = 40;

//L
var geometry12 = new THREE.BoxGeometry(15, 5, 2);
var cube11 = new THREE.Mesh(geometry12, texture);
scene.add(cube11);
//L wireframe
var geo11 = new THREE.EdgesGeometry(cube11.geometry);
var mat11 = new THREE.LineBasicMaterial({
  color: 0xffffff,
  linewidth: 1
});
var wireframe11 = new THREE.LineSegments(geo11, mat11);
cube11.add(wireframe11);

cube11.position.x = -60;
cube11.position.y = 27.6;
// ALL CODE FOR P
//P
var geometry13 = new THREE.BoxGeometry(5, 30, 2);
var cube12 = new THREE.Mesh(geometry13, texture);
scene.add(cube12);
//P wireframe
var geo12 = new THREE.EdgesGeometry(cube12.geometry);
var mat12 = new THREE.LineBasicMaterial({
  color: 0xffffff,
  linewidth: 1
});
var wireframe12 = new THREE.LineSegments(geo12, mat12);
cube12.add(wireframe12);

cube12.position.x = -40;
cube12.position.y = 40;
//Skip Cube 14 I got bored of having a 1 point difference
//P
var geometry14 = new THREE.BoxGeometry(10, 5, 2);
var cube14 = new THREE.Mesh(geometry14, texture);
scene.add(cube14);
//P wireframe
var geo14 = new THREE.EdgesGeometry(cube14.geometry);
var mat14 = new THREE.LineBasicMaterial({
  color: 0xffffff,
  linewidth: 1
});
var wireframe14 = new THREE.LineSegments(geo14, mat14);
cube14.add(wireframe14);

cube14.position.x = -32.5;
cube14.position.y = 52.5;

//P
var geometry15 = new THREE.BoxGeometry(10, 5, 2);
var cube15 = new THREE.Mesh(geometry15, texture);
scene.add(cube15);
//P wireframe
var geo15 = new THREE.EdgesGeometry(cube15.geometry);
var mat15 = new THREE.LineBasicMaterial({
  color: 0xffffff,
  linewidth: 1
});
var wireframe15 = new THREE.LineSegments(geo15, mat15);
cube15.add(wireframe15);

cube15.position.x = -32.5;
cube15.position.y = 42.5;

//P
var geometry16 = new THREE.BoxGeometry(5, 15, 2);
var cube16 = new THREE.Mesh(geometry16, texture);
scene.add(cube16);
//P wireframe
var geo16 = new THREE.EdgesGeometry(cube16.geometry);
var mat16 = new THREE.LineBasicMaterial({
  color: 0xffffff,
  linewidth: 1
});
var wireframe16 = new THREE.LineSegments(geo16, mat16);
cube16.add(wireframe16);

cube16.position.x = -25;
cube16.position.y = 47.5;

camera.position.z = 100;

var TF = false;
var TF2 = false;
var TF3 = true;
var TF4 = false;
var TF5 = true;
var TF6 = false;
var TF7 = false;
var TF8 = true;
var TF9 = true;
var TF10 = false;
var TF11 = true;
var TF12 = true;

cube.position.x = 30;
cube2.position.x = -20;
sphere.position.x = 5;
ring.position.x = 5;

cube.position.y = 10;
cube2.position.y = -5;
sphere.position.y = -30;
ring.position.y = -30;

cube.position.z = -30;
cube2.position.z = 10;
sphere.position.z = -10;
ring.position.z = -10;

function animate() {
  scene.background = new THREE.Color(0x000080);
  requestAnimationFrame(animate);

  cube.rotation.x -= 0.015;
  cube.rotation.y -= 0.015;
  cube.rotation.z -= 0.015;

  cube2.rotation.x -= 0.015;
  cube2.rotation.y -= 0.015;
  cube2.rotation.z -= 0.015;

  if (TF === false) {
    cube.position.z += 1;
    if (cube.position.z > 100) {
      TF = true;
    }
  }

  if (TF === true) {
    cube.position.z -= 1;
    if (cube.position.z < -140) {
      TF = false;
    }
  }

  if (TF2 === false) {
    cube.position.x += 0.1;
    if (cube.position.x > 100) {
      TF2 = true;
    }
  }

  if (TF2 === true) {
    cube.position.x -= 0.1;
    if (cube.position.x < -100) {
      TF2 = false;
    }
  }

  if (TF3 === false) {
    cube.position.y += 0.1;
    if (cube.position.y > 50) {
      TF3 = true;
    }
  }

  if (TF3 === true) {
    cube.position.y -= 0.1;
    if (cube.position.y < -50) {
      TF3 = false;
    }
  }

  if (TF4 === false) {
    cube2.position.z += 1;
    if (cube2.position.z > 80) {
      TF4 = true;
    }
  }

  if (TF4 === true) {
    cube2.position.z -= 1;
    if (cube2.position.z < -120) {
      TF4 = false;
    }
  }

  if (TF5 === false) {
    cube2.position.x += 0.15;
    if (cube2.position.x > 90) {
      TF5 = true;
    }
  }

  if (TF5 === true) {
    cube2.position.x -= 0.15;
    if (cube2.position.x < -80) {
      TF5 = false;
    }
  }

  if (TF6 === false) {
    cube2.position.y += 0.05;
    if (cube2.position.y > 35) {
      TF6 = true;
    }
  }

  if (TF6 === true) {
    cube2.position.y -= 0.2;
    if (cube2.position.y < -40) {
      TF6 = false;
    }
  }

  if (TF7 === false) {
    sphere.position.z += 1.2;
    if (sphere.position.z > 80) {
      TF7 = true;
    }
  }

  if (TF7 === true) {
    sphere.position.z -= 1.5;
    if (sphere.position.z < -120) {
      TF7 = false;
    }
  }

  if (TF8 === false) {
    sphere.position.x += 0.2;
    if (sphere.position.x > 90) {
      TF8 = true;
    }
  }

  if (TF8 === true) {
    sphere.position.x -= 0.05;
    if (sphere.position.x < -80) {
      TF8 = false;
    }
  }

  if (TF9 === false) {
    sphere.position.y += 0.01;
    if (sphere.position.y > 35) {
      TF9 = true;
    }
  }

  if (TF9 === true) {
    sphere.position.y -= 0.1;
    if (sphere.position.y < -40) {
      TF9 = false;
    }
  }

  if (TF10 === false) {
    ring.position.z += 1.2;
    if (ring.position.z > 80) {
      TF10 = true;
    }
  }

  if (TF10 === true) {
    ring.position.z -= 1.5;
    if (ring.position.z < -120) {
      TF10 = false;
    }
  }

  if (TF11 === false) {
    ring.position.x += 0.2;
    if (ring.position.x > 90) {
      TF11 = true;
    }
  }
  if (TF11 === true) {
    ring.position.x -= 0.05;
    if (ring.position.x < -80) {
      TF11 = false;
    }
  }
  if (TF12 === false) {
    ring.position.y += 0.01;
    if (ring.position.y > 35) {
      TF12 = true;
    }
  }
  if (TF12 === true) {
    ring.position.y -= 0.1;
    if (ring.position.y < -40) {
      TF12 = false;
    }
  }
  sphere.rotation.x += 0.015;
  sphere.rotation.y += 0.015;
  sphere.rotation.z += 0.015;

  ring.rotation.x += 0.015;
  ring.rotation.y += 0.015;
  ring.rotation.z += 0.015;
  scene.rotation.y -= 0.00002;

  renderer.render(scene, camera);
}

animate();
