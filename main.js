
var scene = new THREE.Scene();
var cam = new THREE.PerspectiveCamera(
  45,window.innerWidth/window.innerHeight,0.1
  ,1000);

var renderer= new THREE.WebGLRenderer({
  antialias:true
});
cam.position.z+=10
cam.position.y+=5;

renderer.shadowMap.enabled =true;
renderer.shadowMap.type =THREE.BasicShadowMap;
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);


scene.background =new THREE.Color(0xfafafa);
const texture = new THREE.TextureLoader().load('floor.jpg');


let player;

player = new THREE.GLTFLoader().load('Player/scene.gltf',function(gltf){
  player =gltf.scene;
  player.scale.set(0.05,0.05,0.05);
  player.position.set(0,0,5);
  player.rotation.y=Math.PI;
  scene.add(player);
  
});

let corona;
corona = new THREE.GLTFLoader().load('corona2/corona.gltf',function(gltf){
  corona =gltf.scene;
  corona.scale.set(0.005,0.005,0.005);
  corona.position.set(0,1,0);
  console.log(corona);
  scene.add(corona);
});

document.addEventListener("keydown", function (ev) {
  if(ev.key=="w"){
  player.position.y+=1  

}
if(ev.key=="a"){
    player.position.x-=1

}
if(ev.key=="d"){
  player.position.x+=1
}
});


/*const loader = new GLTFLoader();
loader.load( 'corona.gltf', function ( gltf ) {
scene.add( gltf.scene );
});*/


const texturegeo = new THREE.PlaneGeometry( 10, 10,100,100 );
const texturemat = new THREE.MeshBasicMaterial( {map:texture, side: THREE.DoubleSide} );
const mesh = new THREE.Mesh( texturegeo,texturemat );
mesh.rotation.x -=Math.PI/2;
mesh.position.set(0,0,0);
scene.add(mesh);





const ambient = new THREE.AmbientLight(0xffffff,0.4); 
scene.add( ambient );

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const controls = new THREE.OrbitControls(cam,renderer.domElement);


function draw(){
  requestAnimationFrame(draw);
  corona.position.z +=0.02;
  controls.update();
  renderer.render(scene,cam);
}

draw()