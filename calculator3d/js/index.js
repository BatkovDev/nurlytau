import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js'
import { OrbitControls } from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js'
import { TransformControls } from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/TransformControls.js';

console.log("worked");
const scene = new THREE.Scene();
const canvas = document.querySelector('.canvas');

// Камера
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z=-5.7
camera.position.x=3.7
camera.position.y=6.3

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

scene.add(camera);


// Свет
const pointlight = new THREE.PointLight("white", 1)
pointlight.position.set(0,100,0)
scene.add(pointlight)
const pointlight2 = new THREE.PointLight("white", 1)
pointlight2.position.set(0,0,100)
scene.add(pointlight2)
const pointlight3 = new THREE.PointLight("white", 1)
pointlight3.position.set(0,0,-100)
scene.add(pointlight3)
const pointlight4 = new THREE.PointLight("white", 1)
pointlight4.position.set(100,0,0)
scene.add(pointlight4)
const pointlight5 = new THREE.PointLight("white", 1)
pointlight5.position.set(-100,0,0)
scene.add(pointlight5)
const pointlight6 = new THREE.PointLight("white", 1)
pointlight6.position.set(0,-100,0)
scene.add(pointlight6)

// Обьект
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
const material = new THREE.MeshStandardMaterial({ color: "white",metalness: 0.8,roughness: 0.95, side: THREE.DoubleSide});

const vertices = new Float32Array( [
    Ax, Az,  Ay, // v0 x, z, y
    Bx, Bz,  By, // v1
    Bx1, Bz1,  By1, // v2

    Bx1, Bz1,  By1, // v3
	Ax1, Az1,  Ay1, // v4
	Ax, Az,  Ay,  // v5
] );
geometry.setAttribute('position', new THREE.BufferAttribute( vertices, 3 ));
geometry.computeVertexNormals();
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const geometry2 = new THREE.BufferGeometry();
const material2 = new THREE.MeshStandardMaterial({ color: "white",metalness: 0.8,roughness: 0.95, side: THREE.DoubleSide});
const vertices2 = new Float32Array( [
    Bx, Bz,  By, // v0 x, z, y
    Cx, Cz,  Cy, // v1
    Cx1, Cz1,  Cy1, // v2

	Cx1, Cz1,  Cy1,  // v5
    Bx1, Bz1,  By1, // v3
	Bx, Bz,  By // v4
] );
geometry2.setAttribute('position', new THREE.BufferAttribute( vertices2, 3 ));
geometry2.computeVertexNormals();
const mesh2 = new THREE.Mesh(geometry2, material2);
scene.add(mesh2);


const geometry3 = new THREE.BufferGeometry();
const material3 = new THREE.MeshStandardMaterial({ color: "white",metalness: 0.8,roughness: 0.95, side: THREE.DoubleSide});
const vertices3 = new Float32Array( [
    Cx, Cz,  Cy, // v0 x, z, y
    Dx, Dz,  Dy, // v1
    Cx1, Cz1,  Cy1, // v2

    Cx1, Cz1,  Cy1, // v3
	Dx1, Dz1,  Dy1, // v4
	Dx, Dz,  Dy  // v5
] );
geometry3.setAttribute('position', new THREE.BufferAttribute( vertices3, 3 ));
geometry3.computeVertexNormals();
const mesh3 = new THREE.Mesh(geometry3, material3);
scene.add(mesh3);

const geometry4 = new THREE.BufferGeometry();
const material4 = new THREE.MeshStandardMaterial({ color: "white",metalness: 0.8,roughness: 0.95, side: THREE.DoubleSide});
const vertices4 = new Float32Array( [
    Dx, Dz, Dy, // v0 x, z, y
    Ax, Az, Ay, // v1
    Ax1, Az1, Ay1, // v2

    Ax1, Az1,  Ay1, // v3
	Dx1, Dz1,  Dy1, // v4
	Dx, Dz,  Dy  // v5
] );
geometry4.setAttribute('position', new THREE.BufferAttribute( vertices4, 3 ));
geometry4.computeVertexNormals();
const mesh4 = new THREE.Mesh(geometry4, material4);
scene.add(mesh4);


const geometry5 = new THREE.BufferGeometry();
const material5 =  new THREE.MeshStandardMaterial({ color: "red",metalness: 0.7,roughness: 0.45, side: THREE.DoubleSide});
const vertices5 = new Float32Array( [
    Ax1, Az1, Ay1, // v0 x, z, y
    Bx1, Bz1, By1, // v1
    Px1, Pz1, Py1, // v2

    Px1, Pz1, Py1, // v3
    Px, Pz, Py, // v5
    Ax1, Az1, Ay1  // v5
] );
geometry5.setAttribute('position', new THREE.BufferAttribute( vertices5, 3 ));
geometry5.computeVertexNormals();
const mesh5 = new THREE.Mesh(geometry5, material5);
scene.add(mesh5);


const geometry6 = new THREE.BufferGeometry();
const material6 =  new THREE.MeshStandardMaterial({ color: "red",metalness: 0.7,roughness: 0.45, side: THREE.DoubleSide});
const vertices6 = new Float32Array( [
    Cx1, Cz1, Cy1, // v0 x, z, y
    Dx1, Dz1,  Dy1, // v1
    Px, Pz, Py, // v2

    Px, Pz, Py, // v3
    Px1, Pz1, Py1, // v6
    Cx1, Cz1, Cy1,  // v6
] );
geometry6.setAttribute('position', new THREE.BufferAttribute( vertices6, 3 ));
geometry6.computeVertexNormals();
const mesh6 = new THREE.Mesh(geometry6, material6);
scene.add(mesh6);

const geometry7 = new THREE.BufferGeometry();
const material7 = new THREE.MeshStandardMaterial({ color: "white",metalness: 0.8,roughness: 0.95, side: THREE.DoubleSide});
const vertices7 = new Float32Array( [
    Bx1, Bz1, By1, // v0 x, z, y
    Cx1, Cz1, Cy1, // v1
    Px1, Pz1, Py1, // v2
] );
geometry7.setAttribute('position', new THREE.BufferAttribute( vertices7, 3 ));
geometry7.computeVertexNormals();
const mesh7 = new THREE.Mesh(geometry7, material7);
scene.add(mesh7);


const geometry8 = new THREE.BufferGeometry();
const material8 = new THREE.MeshStandardMaterial({ color: "white",metalness: 0.8,roughness: 0.95, side: THREE.DoubleSide});
const vertices8 = new Float32Array( [
    Ax1, Az1, Ay1, // v0 x, z, y
    Dx1, Dz1, Dy1, // v1
    Px, Pz, Py, // v2
] );
geometry8.setAttribute('position', new THREE.BufferAttribute( vertices8, 3 ));
geometry8.computeVertexNormals();
const mesh8 = new THREE.Mesh(geometry8, material8);
scene.add(mesh8);









const renderer = new THREE.WebGLRenderer({ 
    canvas,
    antialias: true
    });
    console.log(camera.position)

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


//контролер


const raycaster = new THREE.Raycaster();
const clickMouse = new THREE.Vector2();

window.addEventListener('click', event => {
    clickMouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	clickMouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    raycaster.setFromCamera( clickMouse, camera );
    const found = raycaster.intersectObjects( scene.children );
    if (found.length > 0 && found[0].object.userData.draggable){
      let draggable = found[0].object
      
      controls2.attach(draggable)
      scene.add(controls2)
      controls2.setMode('translate')
      controls2.showY = true
      if(draggable.userData.side=="запад"){
        controls2.showZ = false
        controls2.showX = true
      }else if(draggable.userData.side=="север"){
        controls2.showZ = true
        controls2.showX = false
      }else if(draggable.userData.side=="восток"){
        controls2.showZ = false
        controls2.showX = true
      }else if(draggable.userData.side=="юг"){
        controls2.showZ = true
        controls2.showX = false
      }
      
      controls2.addEventListener('objectChange', (e) =>{
        console.log(draggable.position.y,draggable.geometry.parameters.height/2, Az1,Az)
        if(draggable.position.y + draggable.geometry.parameters.height/2 > Az1){
            draggable.position.y= Az1-draggable.geometry.parameters.height/2
        }else if(draggable.position.y - draggable.geometry.parameters.height/2 < Az){
            draggable.position.y= Az+draggable.geometry.parameters.height/2
        }

        if(draggable.userData.side=="запад"){
            if(draggable.position.x-draggable.geometry.parameters.width/2 < Ax){
                controls2.detach(draggable)
                draggable.rotation.y= Math.PI * 0.5
                draggable.position.x= -(Bx+draggable.geometry.parameters.depth/2+0.001)
                draggable.position.z=By-draggable.geometry.parameters.width/2
                draggable.userData.side = "север";
                
            }else if ( draggable.position.x+draggable.geometry.parameters.width/2 > Bx){
                controls2.detach(draggable)
                draggable.rotation.y= Math.PI * 0.5
                draggable.position.x= Bx+draggable.geometry.parameters.depth/2+0.001
                draggable.position.z= By-draggable.geometry.parameters.width/2
                draggable.userData.side = "юг";
                
            }
        } else if(draggable.userData.side=="север"){
            if(draggable.position.z+draggable.geometry.parameters.width/2 > By){
                controls2.detach(draggable)
                draggable.rotation.y= Math.PI * 1
                draggable.position.x= -(Bx-draggable.geometry.parameters.width/2)
                draggable.position.z=By+draggable.geometry.parameters.depth/2+0.001
                draggable.userData.side = "запад";
                
            }else if(draggable.position.z-draggable.geometry.parameters.width/2 < Cy){
                controls2.detach(draggable)
                draggable.rotation.y= Math.PI * 1
                draggable.position.x= -(Bx-draggable.geometry.parameters.width/2)
                draggable.position.z= -(By+draggable.geometry.parameters.depth/2+0.001)
                draggable.userData.side = "восток";
                
            }
        } else if(draggable.userData.side=="восток"){
            if(draggable.position.x-draggable.geometry.parameters.width/2 < Ax){
                controls2.detach(draggable)
                draggable.rotation.y= Math.PI * 0.5
                draggable.position.x= -(Bx+draggable.geometry.parameters.depth/2+0.001)
                draggable.position.z= -(By-draggable.geometry.parameters.width/2)
                draggable.userData.side = "север";
                
            }else if ( draggable.position.x+draggable.geometry.parameters.width/2 > Bx){
                controls2.detach(draggable)
                draggable.rotation.y= Math.PI * 0.5
                draggable.position.x= Bx+draggable.geometry.parameters.depth/2+0.001
                draggable.position.z= -(By-draggable.geometry.parameters.width/2)
                draggable.userData.side = "юг";
                
            }
        } else if(draggable.userData.side=="юг"){
            if(draggable.position.z+draggable.geometry.parameters.width/2 > By){
                controls2.detach(draggable)
                draggable.rotation.y= Math.PI * 1
                draggable.position.x= Bx-draggable.geometry.parameters.width/2
                draggable.position.z= By+draggable.geometry.parameters.depth/2+0.001
                draggable.userData.side = "запад";
                
            }else if(draggable.position.z-draggable.geometry.parameters.width/2 < Cy){
                controls2.detach(draggable)
                draggable.rotation.y= Math.PI * 1
                draggable.position.x= Bx-draggable.geometry.parameters.width/2
                draggable.position.z= -(By+draggable.geometry.parameters.depth/2+0.001)
                draggable.userData.side = "восток";
                
            }
        }
      })
    }else{
        controls2.showZ = false
        controls2.showY = false
        controls2.showX = false
    }
})

const controls2 = new TransformControls(camera, canvas);
controls2.addEventListener('dragging-changed', (e) =>{
  controls.enabled = !e.value
})
controls2.showZ = false


let numberdoor=1
function createDoor() {
    
    let h2 = document.createElement('h2');
    h2.innerText="Дверь ( "+numberdoor+" )"
    h2.addEventListener("click", (event)=>{
        document.querySelector('.cover2').style.display="block"
        document.querySelector('.cover3').style.display="block"
        if(door.userData.side=="запад"){
            document.querySelector('.input2').value=door.position.x-(door.geometry.parameters.width/2)+Bx
            document.querySelector('.input1').value=door.position.y-(door.geometry.parameters.height/2)-Bz
        }else if(door.userData.side=="север"){
            document.querySelector('.input2').value=door.position.z-(door.geometry.parameters.width/2)+By
            document.querySelector('.input1').value=door.position.y-(door.geometry.parameters.height/2)-Bz
        }else if(door.userData.side=="восток"){
            document.querySelector('.input2').value=-door.position.x-(door.geometry.parameters.width/2)+Bx
            document.querySelector('.input1').value=door.position.y-(door.geometry.parameters.height/2)-Bz
        }else if(door.userData.side=="юг"){
            document.querySelector('.input2').value=-door.position.z-(door.geometry.parameters.width/2)+By
            document.querySelector('.input1').value=door.position.y-(door.geometry.parameters.height/2)-Bz
        }
        console.log(door.geometry.parameters.width/2)
        document.querySelector('.input2').addEventListener("change", (event)=>{
            if(document.querySelector('.input2').value<0){
                alert("ошибка")
            }else if(door.userData.side=="запад"){
                if(document.querySelector('.input2').value>Bx*2-(door.geometry.parameters.width)){
                    alert("ошибка")
                }else{
                    door.position.x=document.querySelector('.input2').value*1+(door.geometry.parameters.width/2)-Bx
                }
            }else if(door.userData.side=="север"){
                if(document.querySelector('.input2').value>By*2-(door.geometry.parameters.width)){
                    alert("ошибка")
                }else{
                    door.position.z=document.querySelector('.input2').value*1+(door.geometry.parameters.width/2)-By
                }
            }else if(door.userData.side=="восток"){
                if(document.querySelector('.input2').value>Bx*2-(door.geometry.parameters.width)){
                    alert("ошибка")
                }else{
                    door.position.x=-document.querySelector('.input2').value*1-(door.geometry.parameters.width/2)+Bx
                }
            }else if(door.userData.side=="юг"){
                if(document.querySelector('.input2').value>By*2-(door.geometry.parameters.width)){
                    alert("ошибка")
                }else{
                    door.position.z=-document.querySelector('.input2').value*1-(door.geometry.parameters.width/2)+By
                }
            }
            
        })
        document.querySelector('.input1').addEventListener("change", (event)=>{
            console.log(Bz,document.querySelector('.input1').value)
            if(document.querySelector('.input1').value>Az1-door.geometry.parameters.height){
                alert("ошибка")
            }else if(document.querySelector('.input1').value<0){
                alert("ошибка")
            }else{
                door.position.y=document.querySelector('.input1').value*1+(door.geometry.parameters.height/2)+Bz
            }
        })


        document.querySelector('.input3').value=door.geometry.parameters.width
        document.querySelector('.input4').value=door.geometry.parameters.height
        
        document.querySelector('.input3').addEventListener("change", (event)=>{
            console.log('hi1', door.scale.x)
            door.scale.x=document.querySelector('.input3').value*1+0.2
            console.log('hi', door.geometry.parameters.width)
        })
    })
    document.querySelector('.contentforaddOpening').append(h2)
    document.querySelector('.backChooseAnOpening').style.display='none'
    const geometryDoor = new THREE.BoxGeometry( 0.4, 0.7, 0.05 ); 
    const materialDoor = new THREE.MeshBasicMaterial( {color: "black"} ); 
    const door = new THREE.Mesh( geometryDoor, materialDoor ); 
    door.position.z=1.026
    door.position.y=0.35
    scene.add(door)
    door.userData.draggable = true
    door.userData.name = 'door'+numberdoor
    door.userData.side="запад"
    numberdoor++
}
function createWindow() {
    document.querySelector('.backChooseAnOpening').style.display='none'
    const geometryDoor = new THREE.BoxGeometry( 0.4, 0.4, 0.05 ); 
    const materialDoor = new THREE.MeshBasicMaterial( {color: "#4C67A8"} ); 
    const window = new THREE.Mesh( geometryDoor, materialDoor ); 
    window.position.z=1.026
    window.position.y=0.6
    scene.add(window)
    window.userData.draggable = true
    window.userData.name = 'window'
    window.userData.side="запад"
}
function openbackChooseAnOpening() {
    document.querySelector('.backChooseAnOpening').style.display='flex'
}
function closebackChooseAnOpening() {
    document.querySelector('.backChooseAnOpening').style.display='none'
}
document.querySelector('.addOpening').onclick = openbackChooseAnOpening;
document.querySelector('.cross3').onclick = closebackChooseAnOpening;
document.querySelector('.Opening1').onclick = createDoor;
document.querySelector('.Opening2').onclick = createWindow;
