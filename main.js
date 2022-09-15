let scene, camera, renderer, cube;
function init() {
scene = new THREE.Scene();
// let fov = 75, aspect1 = window.innerWidth, aspect2 = window.innerHeight, near = 0.1, far = 1000;
camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const geometry = new THREE.BoxGeometry( 2, 2, 2 );
const texture = new THREE.TextureLoader().load("crate.jpg");
const material = new THREE.MeshBasicMaterial({ map: texture});
cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;
}
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
function onWindowResize() {
    camera.aspect =window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize" , onWindowResize, false);
init();
animate();
console.log("done");