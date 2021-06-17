
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
  corona.position.set(0,1,-3);
  console.log(corona);
  scene.add(corona);
});

let corona2;
corona2 = new THREE.GLTFLoader().load('corona2/corona.gltf',function(gltf){
  corona2 =gltf.scene;
  corona2.scale.set(0.005,0.005,0.005);
  corona2.position.set(3,1,-10);
  console.log(corona2);
  scene.add(corona2);
});

let corona3;
corona3 = new THREE.GLTFLoader().load('corona2/corona.gltf',function(gltf){
  corona3 =gltf.scene;
  corona3.scale.set(0.005,0.005,0.005);
  corona3.position.set(-3,1,-7);
  console.log(corona3);
  scene.add(corona3);
});

let corona4;
corona4 = new THREE.GLTFLoader().load('corona2/corona.gltf',function(gltf){
  corona4 =gltf.scene;
  corona4.scale.set(0.005,0.005,0.005);
  corona4.position.set(0,1,-14);
  console.log(corona4);
  scene.add(corona4);
});

let corona5;
corona5 = new THREE.GLTFLoader().load('corona2/corona.gltf',function(gltf){
  corona5 =gltf.scene;
  corona5.scale.set(0.005,0.005,0.005);
  corona5.position.set(3,1,-18);
  console.log(corona5);
  scene.add(corona5);
});

let corona6;
corona6 = new THREE.GLTFLoader().load('corona2/corona.gltf',function(gltf){
  corona6 =gltf.scene;
  corona6.scale.set(0.005,0.005,0.005);
  corona6.position.set(-3,1,-20);
  console.log(corona6);
  scene.add(corona6);
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

const texturegeo = new THREE.PlaneGeometry( 10, 30,100,100 );
const texturemat = new THREE.MeshBasicMaterial( {map:texture, side: THREE.DoubleSide} );
const mesh = new THREE.Mesh( texturegeo,texturemat );
mesh.rotation.x -=Math.PI/2;
mesh.position.set(0,0,-10);
scene.add(mesh);





const ambient = new THREE.AmbientLight(0xffffff,0.4); 
scene.add( ambient );

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const controls = new THREE.OrbitControls(cam,renderer.domElement);


function draw(){
  requestAnimationFrame(draw);
  corona.position.z +=0.08;
  corona2.position.z +=0.07;
  corona3.position.z +=0.06;
  corona4.position.z +=0.06;
  corona5.position.z +=0.06;
  corona6.position.z +=0.06;

  controls.update();
  renderer.render(scene,cam);
}

draw()