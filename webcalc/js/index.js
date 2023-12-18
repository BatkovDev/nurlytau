import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js'
import { OrbitControls } from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js'

const scene = new THREE.Scene();
const canvas = document.querySelector('.canvas');

// Камера
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 5;
camera.position.x = 5;

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

scene.add(camera);

const gridHelper = new THREE.GridHelper(5, 20);
scene.add(gridHelper);
// Объект

let Ax=-2;
let Ay=1;
let Az=0;
let Bx=2;
let By=1;
let Bz=0;
let Cx=2;
let Cy=-1;
let Cz=0;
let Dx=-2;
let Dy=-1;
let Dz=0;
let Ax1=-2;
let Ay1=1;
let Az1=1;
let Bx1=2;
let By1=1;
let Bz1=1;
let Cx1=2;
let Cy1=-1;
let Cz1=1;
let Dx1=-2;
let Dy1=-1;
let Dz1=1;
let Px=-2;
let Py=0;
let Pz=2;
let Px1=2;
let Py1=0;
let Pz1=2;

const geometry = new THREE.BufferGeometry();
const material = new THREE.MeshBasicMaterial({
    color: 'yellow',
    side: THREE.DoubleSide
});

const vertices = new Float32Array( [
    Ax, Az,  Ay, // v0 x, z, y
    Bx, Bz,  By, // v1
    Bx1, Bz1,  By1, // v2

    Bx1, Bz1,  By1, // v3
	Ax1, Az1,  Ay1, // v4
	Ax, Az,  Ay,  // v5
] );
geometry.setAttribute('position', new THREE.BufferAttribute( vertices, 3 ));
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const geometry2 = new THREE.BufferGeometry();
const material2 = new THREE.MeshBasicMaterial({
    color: 'yellow',
    side: THREE.DoubleSide
});
const vertices2 = new Float32Array( [
    Bx, Bz,  By, // v0 x, z, y
    Cx, Cz,  Cy, // v1
    Cx1, Cz1,  Cy1, // v2

	Cx1, Cz1,  Cy1,  // v5
    Bx1, Bz1,  By1, // v3
	Bx, Bz,  By // v4
] );
geometry2.setAttribute('position', new THREE.BufferAttribute( vertices2, 3 ));
const mesh2 = new THREE.Mesh(geometry2, material2);
scene.add(mesh2);


const geometry3 = new THREE.BufferGeometry();
const material3 = new THREE.MeshBasicMaterial({
    color: 'yellow',
    side: THREE.DoubleSide
});
const vertices3 = new Float32Array( [
    Cx, Cz,  Cy, // v0 x, z, y
    Dx, Dz,  Dy, // v1
    Cx1, Cz1,  Cy1, // v2

    Cx1, Cz1,  Cy1, // v3
	Dx1, Dz1,  Dy1, // v4
	Dx, Dz,  Dy  // v5
] );
geometry3.setAttribute('position', new THREE.BufferAttribute( vertices3, 3 ));
const mesh3 = new THREE.Mesh(geometry3, material3);
scene.add(mesh3);

const geometry4 = new THREE.BufferGeometry();
const material4 = new THREE.MeshBasicMaterial({
    color: 'yellow',
    side: THREE.DoubleSide
});
const vertices4 = new Float32Array( [
    Dx, Dz, Dy, // v0 x, z, y
    Ax, Az, Ay, // v1
    Ax1, Az1, Ay1, // v2

    Ax1, Az1,  Ay1, // v3
	Dx1, Dz1,  Dy1, // v4
	Dx, Dz,  Dy  // v5
] );
geometry4.setAttribute('position', new THREE.BufferAttribute( vertices4, 3 ));
const mesh4 = new THREE.Mesh(geometry4, material4);
scene.add(mesh4);


const geometry5 = new THREE.BufferGeometry();
const material5 = new THREE.MeshBasicMaterial({
    color: 'yellow',
    side: THREE.DoubleSide
});
const vertices5 = new Float32Array( [
    Ax1, Az1, Ay1, // v0 x, z, y
    Bx1, Bz1, By1, // v1
    Px1, Pz1, Py1, // v2

    Px1, Pz1, Py1, // v3
    Px, Pz, Py, // v5
    Ax1, Az1, Ay1  // v5
] );
geometry5.setAttribute('position', new THREE.BufferAttribute( vertices5, 3 ));
const mesh5 = new THREE.Mesh(geometry5, material5);
scene.add(mesh5);


const geometry6 = new THREE.BufferGeometry();
const material6 = new THREE.MeshBasicMaterial({
    color: 'yellow',
    side: THREE.DoubleSide
});
const vertices6 = new Float32Array( [
    Cx1, Cz1, Cy1, // v0 x, z, y
    Dx1, Dz1,  Dy1, // v1
    Px, Pz, Py, // v2

    Px, Pz, Py, // v3
    Px1, Pz1, Py1, // v6
    Cx1, Cz1, Cy1,  // v6
] );
geometry6.setAttribute('position', new THREE.BufferAttribute( vertices6, 3 ));
const mesh6 = new THREE.Mesh(geometry6, material6);
scene.add(mesh6);

const geometry7 = new THREE.BufferGeometry();
const material7 = new THREE.MeshBasicMaterial({
    color: 'red',
    side: THREE.DoubleSide
});
const vertices7 = new Float32Array( [
    Bx1, Bz1, By1, // v0 x, z, y
    Cx1, Cz1, Cy1, // v1
    Px1, Pz1, Py1, // v2
] );
geometry7.setAttribute('position', new THREE.BufferAttribute( vertices7, 3 ));
const mesh7 = new THREE.Mesh(geometry7, material7);
scene.add(mesh7);


const geometry8 = new THREE.BufferGeometry();
const material8 = new THREE.MeshBasicMaterial({
    color: 'red',
    side: THREE.DoubleSide
});
const vertices8 = new Float32Array( [
    Ax1, Az1, Ay1, // v0 x, z, y
    Dx1, Dz1, Dy1, // v1
    Px, Pz, Py, // v2
] );
geometry8.setAttribute('position', new THREE.BufferAttribute( vertices8, 3 ));
const mesh8 = new THREE.Mesh(geometry8, material8);
scene.add(mesh8);








const renderer = new THREE.WebGLRenderer({ 
    canvas,
    antialias: true
    });

renderer.setClearColor ('white');
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

const tick = () => {
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
}
tick();

window.addEventListener('resize', () =>{
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width/sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.render(scene, camera);



})


//вычисление
let x=1;
const selectElement = document.querySelector(".width");

selectElement.addEventListener("change", (event) => {
    let width = document.querySelector('.width').value.replace(/,/,'.');
    let w = width/2;
    Ay=w;
    By=w;
    By1=w;
    Ay1=w;
    Cy=-w;
    Dy=-w;
    Cy1=-w;
    Dy1=-w;

    const vertices = new Float32Array( [
        Ax, Az,  Ay, // v0 x, z, y
        Bx, Bz,  By, // v1
        Bx1, Bz1,  By1, // v2

        Bx1, Bz1,  By1, // v3
        Ax1, Az1,  Ay1, // v4
        Ax, Az,  Ay,  // v5
    ] );
    geometry.setAttribute('position', new THREE.BufferAttribute( vertices, 3 ));
    mesh.aspect = new THREE.Mesh(geometry, material);
    
    const vertices2 = new Float32Array( [
        Bx, Bz,  By, // v0 x, z, y
        Cx, Cz,  Cy, // v1
        Cx1, Cz1,  Cy1, // v2

        Cx1, Cz1,  Cy1,  // v5
        Bx1, Bz1,  By1, // v3
        Bx, Bz,  By // v4
    ] );
    geometry2.setAttribute('position', new THREE.BufferAttribute( vertices2, 3 ));
    mesh2.aspect = new THREE.Mesh(geometry2, material2);

    const vertices3 = new Float32Array( [
        Cx, Cz,  Cy, // v0 x, z, y
        Dx, Dz,  Dy, // v1
        Cx1, Cz1,  Cy1, // v2

        Cx1, Cz1,  Cy1, // v3
        Dx1, Dz1,  Dy1, // v4
        Dx, Dz,  Dy  // v5
    ] );
    geometry3.setAttribute('position', new THREE.BufferAttribute( vertices3, 3 ));
    mesh3.aspect = new THREE.Mesh(geometry3, material3);

    const vertices4 = new Float32Array( [
        Dx, Dz, Dy, // v0 x, z, y
        Ax, Az, Ay, // v1
        Ax1, Az1, Ay1, // v2

        Ax1, Az1,  Ay1, // v3
        Dx1, Dz1,  Dy1, // v4
        Dx, Dz,  Dy  // v5
    ] );
    geometry4.setAttribute('position', new THREE.BufferAttribute( vertices4, 3 ));
    mesh4.aspect = new THREE.Mesh(geometry4, material4);

    const vertices5 = new Float32Array( [
        Ax1, Az1, Ay1, // v0 x, z, y
        Bx1, Bz1, By1, // v1
        Px1, Pz1, Py1, // v2

        Px1, Pz1, Py1, // v3
        Px, Pz, Py, // v5
        Ax1, Az1, Ay1  // v5
    ] );
    geometry5.setAttribute('position', new THREE.BufferAttribute( vertices5, 3 ));
    mesh5.aspect = new THREE.Mesh(geometry5, material5);

    const vertices6 = new Float32Array( [
        Cx1, Cz1, Cy1, // v0 x, z, y
        Dx1, Dz1,  Dy1, // v1
        Px, Pz, Py, // v2

        Px, Pz, Py, // v3
        Px1, Pz1, Py1, // v6
        Cx1, Cz1, Cy1,  // v6
    ] );
    geometry6.setAttribute('position', new THREE.BufferAttribute( vertices6, 3 ));
    mesh6.aspect = new THREE.Mesh(geometry6, material6);

    const vertices7 = new Float32Array( [
        Bx1, Bz1, By1, // v0 x, z, y
        Cx1, Cz1, Cy1, // v1
        Px1, Pz1, Py1, // v2
    ] );
    geometry7.setAttribute('position', new THREE.BufferAttribute( vertices7, 3 ));
    mesh7.aspect = new THREE.Mesh(geometry7, material7);

    const vertices8 = new Float32Array( [
        Ax1, Az1, Ay1, // v0 x, z, y
        Dx1, Dz1, Dy1, // v1
        Px, Pz, Py, // v2
    ] );
    geometry8.setAttribute('position', new THREE.BufferAttribute( vertices8, 3 ));
    mesh8.aspect = new THREE.Mesh(geometry8, material8);
  
});









const selectElement2 = document.querySelector('.length');

selectElement2.addEventListener("change", (event) => {
    let length = document.querySelector('.length').value.replace(/,/,'.');
    let l = length/2;
    Bx=l;
    Bx1=l;
    Px1=l;
    Cx1=l;
    Cx=l;

    Ax=-l;
    Ax1=-l;
    Px=-l;
    Dx1=-l;
    Dx=-l;

    const vertices = new Float32Array( [
        Ax, Az,  Ay, // v0 x, z, y
        Bx, Bz,  By, // v1
        Bx1, Bz1,  By1, // v2

        Bx1, Bz1,  By1, // v3
        Ax1, Az1,  Ay1, // v4
        Ax, Az,  Ay,  // v5
    ] );
    geometry.setAttribute('position', new THREE.BufferAttribute( vertices, 3 ));
    mesh.aspect = new THREE.Mesh(geometry, material);
    
    const vertices2 = new Float32Array( [
        Bx, Bz,  By, // v0 x, z, y
        Cx, Cz,  Cy, // v1
        Cx1, Cz1,  Cy1, // v2

        Cx1, Cz1,  Cy1,  // v5
        Bx1, Bz1,  By1, // v3
        Bx, Bz,  By // v4
    ] );
    geometry2.setAttribute('position', new THREE.BufferAttribute( vertices2, 3 ));
    mesh2.aspect = new THREE.Mesh(geometry2, material2);

    const vertices3 = new Float32Array( [
        Cx, Cz,  Cy, // v0 x, z, y
        Dx, Dz,  Dy, // v1
        Cx1, Cz1,  Cy1, // v2

        Cx1, Cz1,  Cy1, // v3
        Dx1, Dz1,  Dy1, // v4
        Dx, Dz,  Dy  // v5
    ] );
    geometry3.setAttribute('position', new THREE.BufferAttribute( vertices3, 3 ));
    mesh3.aspect = new THREE.Mesh(geometry3, material3);

    const vertices4 = new Float32Array( [
        Dx, Dz, Dy, // v0 x, z, y
        Ax, Az, Ay, // v1
        Ax1, Az1, Ay1, // v2

        Ax1, Az1,  Ay1, // v3
        Dx1, Dz1,  Dy1, // v4
        Dx, Dz,  Dy  // v5
    ] );
    geometry4.setAttribute('position', new THREE.BufferAttribute( vertices4, 3 ));
    mesh4.aspect = new THREE.Mesh(geometry4, material4);

    const vertices5 = new Float32Array( [
        Ax1, Az1, Ay1, // v0 x, z, y
        Bx1, Bz1, By1, // v1
        Px1, Pz1, Py1, // v2

        Px1, Pz1, Py1, // v3
        Px, Pz, Py, // v5
        Ax1, Az1, Ay1  // v5
    ] );
    geometry5.setAttribute('position', new THREE.BufferAttribute( vertices5, 3 ));
    mesh5.aspect = new THREE.Mesh(geometry5, material5);

    const vertices6 = new Float32Array( [
        Cx1, Cz1, Cy1, // v0 x, z, y
        Dx1, Dz1,  Dy1, // v1
        Px, Pz, Py, // v2

        Px, Pz, Py, // v3
        Px1, Pz1, Py1, // v6
        Cx1, Cz1, Cy1,  // v6
    ] );
    geometry6.setAttribute('position', new THREE.BufferAttribute( vertices6, 3 ));
    mesh6.aspect = new THREE.Mesh(geometry6, material6);

    const vertices7 = new Float32Array( [
        Bx1, Bz1, By1, // v0 x, z, y
        Cx1, Cz1, Cy1, // v1
        Px1, Pz1, Py1, // v2
    ] );
    geometry7.setAttribute('position', new THREE.BufferAttribute( vertices7, 3 ));
    mesh7.aspect = new THREE.Mesh(geometry7, material7);

    const vertices8 = new Float32Array( [
        Ax1, Az1, Ay1, // v0 x, z, y
        Dx1, Dz1, Dy1, // v1
        Px, Pz, Py, // v2
    ] );
    geometry8.setAttribute('position', new THREE.BufferAttribute( vertices8, 3 ));
    mesh8.aspect = new THREE.Mesh(geometry8, material8);
  
});











const selectElement3 = document.querySelector(".height");



selectElement3.addEventListener("change", (event) => {
    let height = document.querySelector('.height').value.replace(/,/,'.');
    let h = height*1;
    Az1=h;
    Bz1=h;
    Cz1=h;
    Dz1=h;

    Pz=h+1;
    Pz1=h+1;

    const vertices = new Float32Array( [
        Ax, Az,  Ay, // v0 x, z, y
        Bx, Bz,  By, // v1
        Bx1, Bz1,  By1, // v2

        Bx1, Bz1,  By1, // v3
        Ax1, Az1,  Ay1, // v4
        Ax, Az,  Ay,  // v5
    ] );
    geometry.setAttribute('position', new THREE.BufferAttribute( vertices, 3 ));
    mesh.aspect = new THREE.Mesh(geometry, material);
    
    const vertices2 = new Float32Array( [
        Bx, Bz,  By, // v0 x, z, y
        Cx, Cz,  Cy, // v1
        Cx1, Cz1,  Cy1, // v2

        Cx1, Cz1,  Cy1,  // v5
        Bx1, Bz1,  By1, // v3
        Bx, Bz,  By // v4
    ] );
    geometry2.setAttribute('position', new THREE.BufferAttribute( vertices2, 3 ));
    mesh2.aspect = new THREE.Mesh(geometry2, material2);

    const vertices3 = new Float32Array( [
        Cx, Cz,  Cy, // v0 x, z, y
        Dx, Dz,  Dy, // v1
        Cx1, Cz1,  Cy1, // v2

        Cx1, Cz1,  Cy1, // v3
        Dx1, Dz1,  Dy1, // v4
        Dx, Dz,  Dy  // v5
    ] );
    geometry3.setAttribute('position', new THREE.BufferAttribute( vertices3, 3 ));
    mesh3.aspect = new THREE.Mesh(geometry3, material3);

    const vertices4 = new Float32Array( [
        Dx, Dz, Dy, // v0 x, z, y
        Ax, Az, Ay, // v1
        Ax1, Az1, Ay1, // v2

        Ax1, Az1,  Ay1, // v3
        Dx1, Dz1,  Dy1, // v4
        Dx, Dz,  Dy  // v5
    ] );
    geometry4.setAttribute('position', new THREE.BufferAttribute( vertices4, 3 ));
    mesh4.aspect = new THREE.Mesh(geometry4, material4);

    const vertices5 = new Float32Array( [
        Ax1, Az1, Ay1, // v0 x, z, y
        Bx1, Bz1, By1, // v1
        Px1, Pz1, Py1, // v2

        Px1, Pz1, Py1, // v3
        Px, Pz, Py, // v5
        Ax1, Az1, Ay1  // v5
    ] );
    geometry5.setAttribute('position', new THREE.BufferAttribute( vertices5, 3 ));
    mesh5.aspect = new THREE.Mesh(geometry5, material5);

    const vertices6 = new Float32Array( [
        Cx1, Cz1, Cy1, // v0 x, z, y
        Dx1, Dz1,  Dy1, // v1
        Px, Pz, Py, // v2

        Px, Pz, Py, // v3
        Px1, Pz1, Py1, // v6
        Cx1, Cz1, Cy1,  // v6
    ] );
    geometry6.setAttribute('position', new THREE.BufferAttribute( vertices6, 3 ));
    mesh6.aspect = new THREE.Mesh(geometry6, material6);

    const vertices7 = new Float32Array( [
        Bx1, Bz1, By1, // v0 x, z, y
        Cx1, Cz1, Cy1, // v1
        Px1, Pz1, Py1, // v2
    ] );
    geometry7.setAttribute('position', new THREE.BufferAttribute( vertices7, 3 ));
    mesh7.aspect = new THREE.Mesh(geometry7, material7);

    const vertices8 = new Float32Array( [
        Ax1, Az1, Ay1, // v0 x, z, y
        Dx1, Dz1, Dy1, // v1
        Px, Pz, Py, // v2
    ] );
    geometry8.setAttribute('position', new THREE.BufferAttribute( vertices8, 3 ));
    mesh8.aspect = new THREE.Mesh(geometry8, material8);
  
});






























const selectElement4 = document.querySelector(".corner");







selectElement4.addEventListener("change", (event) => {
    let height = document.querySelector('.height').value.replace(/,/,'.');
    let width = document.querySelector('.width').value.replace(/,/,'.');
    
    let corner = document.querySelector('.corner').value;
    
    corner=corner/2;
    let bottom=2*Math.tan((corner*Math.PI)/180);
    x = width*width/(2*bottom);
    let h = height*1;
    document.querySelector('.heightkonke').value=x.toFixed(3);
    
    
    
    

    Az1=h;
    Bz1=h;
    Cz1=h;
    Dz1=h;

    Pz=h+x;
    Pz1=h+x;


    const vertices = new Float32Array( [
        Ax, Az,  Ay, // v0 x, z, y
        Bx, Bz,  By, // v1
        Bx1, Bz1,  By1, // v2

        Bx1, Bz1,  By1, // v3
        Ax1, Az1,  Ay1, // v4
        Ax, Az,  Ay,  // v5
    ] );
    geometry.setAttribute('position', new THREE.BufferAttribute( vertices, 3 ));
    mesh.aspect = new THREE.Mesh(geometry, material);
    
    const vertices2 = new Float32Array( [
        Bx, Bz,  By, // v0 x, z, y
        Cx, Cz,  Cy, // v1
        Cx1, Cz1,  Cy1, // v2

        Cx1, Cz1,  Cy1,  // v5
        Bx1, Bz1,  By1, // v3
        Bx, Bz,  By // v4
    ] );
    geometry2.setAttribute('position', new THREE.BufferAttribute( vertices2, 3 ));
    mesh2.aspect = new THREE.Mesh(geometry2, material2);

    const vertices3 = new Float32Array( [
        Cx, Cz,  Cy, // v0 x, z, y
        Dx, Dz,  Dy, // v1
        Cx1, Cz1,  Cy1, // v2

        Cx1, Cz1,  Cy1, // v3
        Dx1, Dz1,  Dy1, // v4
        Dx, Dz,  Dy  // v5
    ] );
    geometry3.setAttribute('position', new THREE.BufferAttribute( vertices3, 3 ));
    mesh3.aspect = new THREE.Mesh(geometry3, material3);

    const vertices4 = new Float32Array( [
        Dx, Dz, Dy, // v0 x, z, y
        Ax, Az, Ay, // v1
        Ax1, Az1, Ay1, // v2

        Ax1, Az1,  Ay1, // v3
        Dx1, Dz1,  Dy1, // v4
        Dx, Dz,  Dy  // v5
    ] );
    geometry4.setAttribute('position', new THREE.BufferAttribute( vertices4, 3 ));
    mesh4.aspect = new THREE.Mesh(geometry4, material4);

    const vertices5 = new Float32Array( [
        Ax1, Az1, Ay1, // v0 x, z, y
        Bx1, Bz1, By1, // v1
        Px1, Pz1, Py1, // v2

        Px1, Pz1, Py1, // v3
        Px, Pz, Py, // v5
        Ax1, Az1, Ay1  // v5
    ] );
    geometry5.setAttribute('position', new THREE.BufferAttribute( vertices5, 3 ));
    mesh5.aspect = new THREE.Mesh(geometry5, material5);

    const vertices6 = new Float32Array( [
        Cx1, Cz1, Cy1, // v0 x, z, y
        Dx1, Dz1,  Dy1, // v1
        Px, Pz, Py, // v2

        Px, Pz, Py, // v3
        Px1, Pz1, Py1, // v6
        Cx1, Cz1, Cy1,  // v6
    ] );
    geometry6.setAttribute('position', new THREE.BufferAttribute( vertices6, 3 ));
    mesh6.aspect = new THREE.Mesh(geometry6, material6);

    const vertices7 = new Float32Array( [
        Bx1, Bz1, By1, // v0 x, z, y
        Cx1, Cz1, Cy1, // v1
        Px1, Pz1, Py1, // v2
    ] );
    geometry7.setAttribute('position', new THREE.BufferAttribute( vertices7, 3 ));
    mesh7.aspect = new THREE.Mesh(geometry7, material7);

    const vertices8 = new Float32Array( [
        Ax1, Az1, Ay1, // v0 x, z, y
        Dx1, Dz1, Dy1, // v1
        Px, Pz, Py, // v2
    ] );
    geometry8.setAttribute('position', new THREE.BufferAttribute( vertices8, 3 ));
    mesh8.aspect = new THREE.Mesh(geometry8, material8);
  
});







const selectElement5 = document.querySelector(".heightkonke");






selectElement5.addEventListener("change", (event) => {
    let height = document.querySelector('.height').value.replace(/,/,'.');
    let width = document.querySelector('.width').value.replace(/,/,'.');
    
    let x = document.querySelector('.heightkonke').value.replace(/,/,'.');
    let corner1= width/(2*x);

    let corner=(Math.atan(corner1)*360)/Math.PI;
    
    document.querySelector('.corner').value=corner.toFixed(3);

    let h = height*1;
    console.log(x);
    
    
    
    

    Az1=h;
    Bz1=h;
    Cz1=h;
    Dz1=h;

    Pz=h+x*1;
    Pz1=h+x*1;


    const vertices = new Float32Array( [
        Ax, Az,  Ay, // v0 x, z, y
        Bx, Bz,  By, // v1
        Bx1, Bz1,  By1, // v2

        Bx1, Bz1,  By1, // v3
        Ax1, Az1,  Ay1, // v4
        Ax, Az,  Ay,  // v5
    ] );
    geometry.setAttribute('position', new THREE.BufferAttribute( vertices, 3 ));
    mesh.aspect = new THREE.Mesh(geometry, material);
    
    const vertices2 = new Float32Array( [
        Bx, Bz,  By, // v0 x, z, y
        Cx, Cz,  Cy, // v1
        Cx1, Cz1,  Cy1, // v2

        Cx1, Cz1,  Cy1,  // v5
        Bx1, Bz1,  By1, // v3
        Bx, Bz,  By // v4
    ] );
    geometry2.setAttribute('position', new THREE.BufferAttribute( vertices2, 3 ));
    mesh2.aspect = new THREE.Mesh(geometry2, material2);

    const vertices3 = new Float32Array( [
        Cx, Cz,  Cy, // v0 x, z, y
        Dx, Dz,  Dy, // v1
        Cx1, Cz1,  Cy1, // v2

        Cx1, Cz1,  Cy1, // v3
        Dx1, Dz1,  Dy1, // v4
        Dx, Dz,  Dy  // v5
    ] );
    geometry3.setAttribute('position', new THREE.BufferAttribute( vertices3, 3 ));
    mesh3.aspect = new THREE.Mesh(geometry3, material3);

    const vertices4 = new Float32Array( [
        Dx, Dz, Dy, // v0 x, z, y
        Ax, Az, Ay, // v1
        Ax1, Az1, Ay1, // v2

        Ax1, Az1,  Ay1, // v3
        Dx1, Dz1,  Dy1, // v4
        Dx, Dz,  Dy  // v5
    ] );
    geometry4.setAttribute('position', new THREE.BufferAttribute( vertices4, 3 ));
    mesh4.aspect = new THREE.Mesh(geometry4, material4);

    const vertices5 = new Float32Array( [
        Ax1, Az1, Ay1, // v0 x, z, y
        Bx1, Bz1, By1, // v1
        Px1, Pz1, Py1, // v2

        Px1, Pz1, Py1, // v3
        Px, Pz, Py, // v5
        Ax1, Az1, Ay1  // v5
    ] );
    geometry5.setAttribute('position', new THREE.BufferAttribute( vertices5, 3 ));
    mesh5.aspect = new THREE.Mesh(geometry5, material5);

    const vertices6 = new Float32Array( [
        Cx1, Cz1, Cy1, // v0 x, z, y
        Dx1, Dz1,  Dy1, // v1
        Px, Pz, Py, // v2

        Px, Pz, Py, // v3
        Px1, Pz1, Py1, // v6
        Cx1, Cz1, Cy1,  // v6
    ] );
    geometry6.setAttribute('position', new THREE.BufferAttribute( vertices6, 3 ));
    mesh6.aspect = new THREE.Mesh(geometry6, material6);

    const vertices7 = new Float32Array( [
        Bx1, Bz1, By1, // v0 x, z, y
        Cx1, Cz1, Cy1, // v1
        Px1, Pz1, Py1, // v2
    ] );
    geometry7.setAttribute('position', new THREE.BufferAttribute( vertices7, 3 ));
    mesh7.aspect = new THREE.Mesh(geometry7, material7);

    const vertices8 = new Float32Array( [
        Ax1, Az1, Ay1, // v0 x, z, y
        Dx1, Dz1, Dy1, // v1
        Px, Pz, Py, // v2
    ] );
    geometry8.setAttribute('position', new THREE.BufferAttribute( vertices8, 3 ));
    mesh8.aspect = new THREE.Mesh(geometry8, material8);
  
});























document.querySelector('button').onclick=myClick;
function myClick(){
    let text = document.querySelector('h4');
    
    let length = document.querySelector('.length').value.replace(/,/,'.');
    let width = document.querySelector('.width').value.replace(/,/,'.');
    let height = document.querySelector('.height').value.replace(/,/,'.');
    let widthpanel = document.querySelector('.widthpanel').value.replace(/,/,'.');
    let heightpanel = document.querySelector('.heightpanel').value.replace(/,/,'.');
    let corner = document.querySelector('.corner').value;
    corner=corner/2;
    let bottom=2*Math.tan((corner*Math.PI)/180);
    x = width*width/(2*bottom);
    
    
    
    let num11 = ((length*100)+(width*100))*2/100;
    let result = num11*height;
    let result1 = result/(heightpanel*widthpanel/10000);
    text.textContent = 'Плиток: '+Math.ceil(result1)+ ',   Высота в коньке(m): '+ x.toFixed(3)+ ',  площадь стен(m²): '+ result + ',  площадь крыши(m²): '+ Math.ceil(2*length*Math.sqrt(width*width/4+(x.toFixed(3)*x.toFixed(3)))) + ',  площадь треугольников(m²): '+ (width*0,5*x.toFixed(3));
    
    let w = width/2;
    let h = height*1;
    let l = length/2;
    console.log(w, h, l);
    Ay=w;
    By=w;
    By1=w;
    Ay1=w;
    Cy=-w;
    Dy=-w;
    Cy1=-w;
    Dy1=-w;

    Bx=l;
    Bx1=l;
    Px1=l;
    Cx1=l;
    Cx=l;

    Ax=-l;
    Ax1=-l;
    Px=-l;
    Dx1=-l;
    Dx=-l;

    Az1=h;
    Bz1=h;
    Cz1=h;
    Dz1=h;

    Pz=h+x;
    Pz1=h+x;

    
    
    

    const vertices = new Float32Array( [
        Ax, Az,  Ay, // v0 x, z, y
        Bx, Bz,  By, // v1
        Bx1, Bz1,  By1, // v2

        Bx1, Bz1,  By1, // v3
        Ax1, Az1,  Ay1, // v4
        Ax, Az,  Ay,  // v5
    ] );
    geometry.setAttribute('position', new THREE.BufferAttribute( vertices, 3 ));
    mesh.aspect = new THREE.Mesh(geometry, material);
    
    const vertices2 = new Float32Array( [
        Bx, Bz,  By, // v0 x, z, y
        Cx, Cz,  Cy, // v1
        Cx1, Cz1,  Cy1, // v2

        Cx1, Cz1,  Cy1,  // v5
        Bx1, Bz1,  By1, // v3
        Bx, Bz,  By // v4
    ] );
    geometry2.setAttribute('position', new THREE.BufferAttribute( vertices2, 3 ));
    mesh2.aspect = new THREE.Mesh(geometry2, material2);

    const vertices3 = new Float32Array( [
        Cx, Cz,  Cy, // v0 x, z, y
        Dx, Dz,  Dy, // v1
        Cx1, Cz1,  Cy1, // v2

        Cx1, Cz1,  Cy1, // v3
        Dx1, Dz1,  Dy1, // v4
        Dx, Dz,  Dy  // v5
    ] );
    geometry3.setAttribute('position', new THREE.BufferAttribute( vertices3, 3 ));
    mesh3.aspect = new THREE.Mesh(geometry3, material3);

    const vertices4 = new Float32Array( [
        Dx, Dz, Dy, // v0 x, z, y
        Ax, Az, Ay, // v1
        Ax1, Az1, Ay1, // v2

        Ax1, Az1,  Ay1, // v3
        Dx1, Dz1,  Dy1, // v4
        Dx, Dz,  Dy  // v5
    ] );
    geometry4.setAttribute('position', new THREE.BufferAttribute( vertices4, 3 ));
    mesh4.aspect = new THREE.Mesh(geometry4, material4);

    const vertices5 = new Float32Array( [
        Ax1, Az1, Ay1, // v0 x, z, y
        Bx1, Bz1, By1, // v1
        Px1, Pz1, Py1, // v2

        Px1, Pz1, Py1, // v3
        Px, Pz, Py, // v5
        Ax1, Az1, Ay1  // v5
    ] );
    geometry5.setAttribute('position', new THREE.BufferAttribute( vertices5, 3 ));
    mesh5.aspect = new THREE.Mesh(geometry5, material5);

    const vertices6 = new Float32Array( [
        Cx1, Cz1, Cy1, // v0 x, z, y
        Dx1, Dz1,  Dy1, // v1
        Px, Pz, Py, // v2

        Px, Pz, Py, // v3
        Px1, Pz1, Py1, // v6
        Cx1, Cz1, Cy1,  // v6
    ] );
    geometry6.setAttribute('position', new THREE.BufferAttribute( vertices6, 3 ));
    mesh6.aspect = new THREE.Mesh(geometry6, material6);

    const vertices7 = new Float32Array( [
        Bx1, Bz1, By1, // v0 x, z, y
        Cx1, Cz1, Cy1, // v1
        Px1, Pz1, Py1, // v2
    ] );
    geometry7.setAttribute('position', new THREE.BufferAttribute( vertices7, 3 ));
    mesh7.aspect = new THREE.Mesh(geometry7, material7);

    const vertices8 = new Float32Array( [
        Ax1, Az1, Ay1, // v0 x, z, y
        Dx1, Dz1, Dy1, // v1
        Px, Pz, Py, // v2
    ] );
    geometry8.setAttribute('position', new THREE.BufferAttribute( vertices8, 3 ));
    mesh8.aspect = new THREE.Mesh(geometry8, material8);


}
// Author Asset github:Akurochek    created for nurly tay construction

