
// Creating a Scene, Camera, Renderer
let i;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
var renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x000000);
renderer.setSize(window.innerWidth,window.innerHeight);
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);



// Adding a Cube
// var geometry = new THREE.BoxGeometry();
// var material = new THREE.MeshLambertMaterial({color:0xff4c68});
// var cube = new THREE.Mesh(geometry,material);
// scene.add(cube);
// // cube.castShadow = true;
// // cube.receiveShadow = false;
// cube.position.y=1;
// cube.position.y=cube.geometry.parameters.height/2;

// Adding Stars
var vertices = [];

for ( i = 0; i < 10000; i ++ ) {


	var x = THREE.MathUtils.randFloatSpread( 2000 );
	var y = THREE.MathUtils.randFloatSpread( 2000 );
	var z = THREE.MathUtils.randFloatSpread( 2000 );

	vertices.push( x, y, z );

}



var geometry = new THREE.BufferGeometry();
geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

var material = new THREE.PointsMaterial( { color: 0xFFFFFF , size:0.8} );

var points = new THREE.Points( geometry, material );
// points.velocity=0;
// points.acceleration=0.02;

scene.add( points );



// Adding a Plane
// var geometry = new THREE.PlaneGeometry(20,10);
// var material = new THREE.MeshPhongMaterial({color:0x2BB2BB,side: THREE.DoubleSide});
// var plane = new THREE.Mesh(geometry,material);
// // plane.name="p1"; Naming Concept
// scene.add(plane);
// plane.receiveShadow = true;
// plane.rotation.x=Math.PI/2;

// Positining the Camera

camera.position.y=2;
camera.position.z=5;
camera.lookAt(new THREE.Vector3(0,0,0));





// // Adding a PointLight
// var light = new THREE.PointLight(0xFFFFFF,2,500);
// light.position.set(0,10,0);
// light.castShadow = true;
// scene.add(light);


// // Adding a PointLight
// var light = new THREE.PointLight(0xFFFFFF,1,500);
// light.position.set(-10,5,0);
// scene.add(light);

window.addEventListener('resize',()=>{
  renderer.setSize(window.innerWidth,window.innerHeight);
  camera.aspect=window.innerWidth/window.innerHeight;
  // camera.updateProjectMatrix();
})


function animate(){




  requestAnimationFrame(animate);
  points.rotation.x+=0.001;


   points.position.x+=0.01;
    points.position.y+=0.01;
     points.position.z+=1;



  // cube.rotation.x+=0.01;
  // cube.rotation.y+=0.01;
  // cube.rotation.z-=0.01;
   //Naming Concept
    // var plane = scene.getObjectByName("p1");
   // plane.rotation.z+=0.01;
   // plane.rotation.x+=0.01;
  renderer.render(scene,camera);
}

animate();
