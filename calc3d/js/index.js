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
camera.position.z=3.5
camera.position.x=7
camera.position.y=3.5

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
    
console.log(camera.position.z,
    camera.position.x,
    camera.position.y)
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
    
    if(event.target.className!="option"){
        document.querySelector(".option-content1").style.display="none"
    }
    if(event.target==canvas){
        clickMouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        clickMouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    
        raycaster.setFromCamera( clickMouse, camera );
        const found = raycaster.intersectObjects( scene.children );
        if (found.length > 0 && found[0].object.userData.draggable){
            let draggable = found[0].object
            openings(draggable)
        }else{
            controls2.showX = false
            controls2.showY = false
            controls2.showZ = false
        }
    }
    
})

const controls2 = new TransformControls(camera, canvas);
controls2.addEventListener('dragging-changed', (e) =>{
  controls.enabled = !e.value
})
controls2.showZ = false

const geometryDoor = new THREE.BoxGeometry( 1, 1, 1 ); 
    const materialDoor = new THREE.MeshLambertMaterial({color: "#1e5945", transparent: true, opacity: 0.5});
    const door = new THREE.Mesh( geometryDoor, materialDoor ); 
    door.transparent = true
    door.scale.x=7
    door.scale.y=0.4
    door.scale.z=7
    door.position.y=-0.2
    scene.add(door)
let numberdoor=1
function createDoor() {
    
    let h2 = document.createElement('h2');
    h2.innerText="Дверь ( "+numberdoor+" )"
    h2.className="door"+numberdoor
    
    document.querySelector('.contentforaddOpening').append(h2)
    document.querySelector('.backChooseAnOpening').style.display='none'
    const geometryDoor = new THREE.BoxGeometry( 1, 1, 1 ); 
    const materialDoor = new THREE.MeshBasicMaterial( {color: "black"} ); 
    const door = new THREE.Mesh( geometryDoor, materialDoor ); 
    door.scale.x=0.4
    door.scale.y=0.7
    door.scale.z=0.05
    door.position.z= By + 0.026
    door.position.y=0.35
    scene.add(door)
    door.userData.draggable = true
    door.userData.number = numberdoor
    door.userData.name = 'door'+numberdoor
    door.userData.type = 'door'
    door.userData.side="запад"
    openings(door)
    document.querySelector('.door'+numberdoor).addEventListener("click", (event)=>{
        openings(door)
    });
    numberdoor++
}
let numberwindow=1
function createWindow() {
    let h2 = document.createElement('h2');
    h2.innerText="Окно ( "+numberwindow+" )"
    h2.className="window"+numberwindow
    
    document.querySelector('.contentforaddOpening').append(h2)

    document.querySelector('.backChooseAnOpening').style.display='none'
    const geometryDoor = new THREE.BoxGeometry( 1, 1, 1 ); 
    const materialDoor = new THREE.MeshBasicMaterial( {color: "#4C67A8"} ); 
    const door = new THREE.Mesh( geometryDoor, materialDoor ); 
    door.scale.x=0.4
    door.scale.y=0.4
    door.scale.z=0.05
    door.position.z= By + 0.026
    door.position.y=0.35
    scene.add(door)
    door.userData.draggable = true
    door.userData.number = numberwindow
    door.userData.type = 'window'
    door.userData.name = 'window'+numberwindow
    door.userData.side="запад"
    openings(door)
    document.querySelector('.window'+numberwindow).addEventListener("click", (event)=>{
        openings(door)
    });
    numberwindow++
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
function zinput2(){
    let zip = 1;
    console.log(this.id, "msc")
    for (let i = 0; i < scene.children.length; i++) {
        if(scene.children[i].userData.name==this.id){
            zip=i
        }
    }
    const door = scene.children[zip]

    if(document.querySelector('.input2').value<0){
        alert("ошибка")
    }else if(door.userData.side=="запад"){
        if(document.querySelector('.input2').value>Bx*2-(door.scale.x)){
            alert("ошибка")
        }else{
            door.position.x=document.querySelector('.input2').value*1+(door.scale.x/2)-Bx
        }
    }else if(door.userData.side=="север"){
        if(document.querySelector('.input2').value>By*2-(door.scale.x)){
            alert("ошибка")
        }else{
            door.position.z=document.querySelector('.input2').value*1+(door.scale.x/2)-By
        }
    }else if(door.userData.side=="восток"){
        if(document.querySelector('.input2').value>Bx*2-(door.scale.x)){
            alert("ошибка")
        }else{
            door.position.x=-document.querySelector('.input2').value*1-(door.scale.x/2)+Bx
        }
    }else if(door.userData.side=="юг"){
        if(document.querySelector('.input2').value>By*2-(door.scale.x)){
            alert("ошибка")
        }else{
            door.position.z=-document.querySelector('.input2').value*1-(door.scale.x/2)+By
        }
    }
}
function zinput1(){
    let zip = 1;
    for (let i = 0; i < scene.children.length; i++) {
        if(scene.children[i].userData.name==this.id){
            zip=i
        }
    }
    const door = scene.children[zip]
    
    console.log(Bz,document.querySelector('.input1').value)
    if(document.querySelector('.input1').value>Az1-door.scale.y){
        alert("ошибка")
    }else if(document.querySelector('.input1').value<0){
        alert("ошибка")
    }else{
        door.position.y=document.querySelector('.input1').value*1+(door.scale.y/2)+Bz
    }
}
function zinput3(){
    let zip = 1;
    for (let i = 0; i < scene.children.length; i++) {
        if(scene.children[i].userData.name==this.id){
            zip=i
        }
    }
    const door = scene.children[zip]

    console.log(door.position.x,(document.querySelector('.input3').value/2),Bx)
    if(door.userData.side=="запад" && door.position.x-(document.querySelector('.input3').value/2)+Bx<0){
        alert("ошибка")
        
    }else{
        door.scale.x=document.querySelector('.input3').value*1
    }
}
function zinput4(){
    let zip = 1;
    for (let i = 0; i < scene.children.length; i++) {
        if(scene.children[i].userData.name==this.id){
            zip=i
        }
    }
    const door = scene.children[zip]

    
    if(document.querySelector('.input4').value*1>Az1){
        alert("ошибка")
    }else{
        
        door.scale.y=document.querySelector('.input4').value*1
        if(door.userData.type=="door"){
            door.position.y=door.scale.y/2
        }
        
    }
    
}
let lastopening=document.querySelector('.wall')

function openings(draggable){
    if(draggable.userData.type=="door"){
        document.querySelector('h3').innerText="Дверь ( "+draggable.userData.number+" )"
    }else{
        document.querySelector('h3').innerText="Окно ( "+draggable.userData.number+" )"
    }
    document.querySelector(".settingsMenu").style.display="block"
    document.querySelector('.cover6').style.display="none"
    lastopening.style.color="rgb(195, 195, 195)"
    document.querySelector('.'+draggable.userData.name).style.color="white"
    lastopening=document.querySelector('.'+draggable.userData.name)
    document.querySelector('.wall').style.color="rgb(195, 195, 195)"
    document.querySelector('.roof').style.color="rgb(195, 195, 195)"
    document.querySelector('.cover1').style.display="none"
    document.querySelector('.cover2').style.display="none"
    document.querySelector('.cover3').style.display="none"
    document.querySelector('.inputNum2').innerText=draggable.userData.side
      document.querySelector('.cover4').style.display="block"
      document.querySelector('.cover5').style.display="block"
      if(draggable.userData.side=="запад"){
        document.querySelector('.input2').value=draggable.position.x-(draggable.scale.x/2)+Bx
        document.querySelector('.input1').value=draggable.position.y-(draggable.scale.y/2)-Bz
        }else if(draggable.userData.side=="север"){
            document.querySelector('.input2').value=draggable.position.z-(draggable.scale.x/2)+By
            document.querySelector('.input1').value=draggable.position.y-(draggable.scale.y/2)-Bz
        }else if(draggable.userData.side=="восток"){
            document.querySelector('.input2').value=-draggable.position.x-(draggable.scale.x/2)+Bx
            document.querySelector('.input1').value=draggable.position.y-(draggable.scale.y/2)-Bz
        }else if(draggable.userData.side=="юг"){
            document.querySelector('.input2').value=-draggable.position.z-(draggable.scale.x/2)+By
            document.querySelector('.input1').value=draggable.position.y-(draggable.scale.y/2)-Bz
        }
        document.querySelector('.input3').value=draggable.scale.x
        document.querySelector('.input4').value=draggable.scale.y
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
      
      document.querySelector('.input2').id=draggable.userData.name
      document.querySelector('.input2').onchange = zinput2

      document.querySelector('.input1').id=draggable.userData.name
      document.querySelector('.input1').onchange = zinput1

      document.querySelector('.input3').value=draggable.scale.x
      document.querySelector('.input4').value=draggable.scale.y

      document.querySelector('.input3').id=draggable.userData.name
      document.querySelector('.input3').onchange = zinput3

      document.querySelector('.input4').id=draggable.userData.name
      document.querySelector('.input4').onchange = zinput4
      controls2.addEventListener('objectChange', (e) =>{
        
        if(draggable.userData.side=="запад"){
            document.querySelector('.input2').value=draggable.position.x-(draggable.scale.x/2)+Bx
            document.querySelector('.input1').value=draggable.position.y-(draggable.scale.y/2)-Bz
        }else if(draggable.userData.side=="север"){
            document.querySelector('.input2').value=draggable.position.z-(draggable.scale.x/2)+By
            document.querySelector('.input1').value=draggable.position.y-(draggable.scale.y/2)-Bz
        }else if(draggable.userData.side=="восток"){
            document.querySelector('.input2').value=-draggable.position.x-(draggable.scale.x/2)+Bx
            document.querySelector('.input1').value=draggable.position.y-(draggable.scale.y/2)-Bz
        }else if(draggable.userData.side=="юг"){
            document.querySelector('.input2').value=-draggable.position.z-(draggable.scale.x/2)+By
            document.querySelector('.input1').value=draggable.position.y-(draggable.scale.y/2)-Bz
        }
        console.log(draggable.scale.x/2)



        console.log(draggable.position.y,draggable.scale.y/2, Az1,Az)
        if(draggable.position.y + draggable.scale.y/2 > Az1){
            draggable.position.y= Az1-draggable.scale.y/2
        }else if(draggable.position.y - draggable.scale.y/2 < Az){
            draggable.position.y= Az+draggable.scale.y/2
        }

        if(draggable.userData.side=="запад"){
            if(draggable.position.x-draggable.scale.x/2 < Ax){
                controls2.detach(draggable)
                draggable.rotation.y= Math.PI * 0.5
                draggable.position.x= -(Bx+draggable.scale.z/2+0.001)
                draggable.position.z=By-draggable.scale.x/2
                draggable.userData.side = "север";
                
            }else if ( draggable.position.x+draggable.scale.x/2 > Bx){
                controls2.detach(draggable)
                draggable.rotation.y= Math.PI * 0.5
                draggable.position.x= Bx+draggable.scale.z/2+0.001
                draggable.position.z= By-draggable.scale.x/2
                draggable.userData.side = "юг";
                
            }
        } else if(draggable.userData.side=="север"){
            if(draggable.position.z+draggable.scale.x/2 > By){
                controls2.detach(draggable)
                draggable.rotation.y= Math.PI * 1
                draggable.position.x= -(Bx-draggable.scale.x/2)
                draggable.position.z=By+draggable.scale.z/2+0.001
                draggable.userData.side = "запад";
                
            }else if(draggable.position.z-draggable.scale.x/2 < Cy){
                controls2.detach(draggable)
                draggable.rotation.y= Math.PI * 1
                draggable.position.x= -(Bx-draggable.scale.x/2)
                draggable.position.z= -(By+draggable.scale.z/2+0.001)
                draggable.userData.side = "восток";
                
            }
        } else if(draggable.userData.side=="восток"){
            if(draggable.position.x-draggable.scale.x/2 < Ax){
                controls2.detach(draggable)
                draggable.rotation.y= Math.PI * 0.5
                draggable.position.x= -(Bx+draggable.scale.z/2+0.001)
                draggable.position.z= -(By-draggable.scale.x/2)
                draggable.userData.side = "север";
                
            }else if ( draggable.position.x+draggable.scale.x/2 > Bx){
                controls2.detach(draggable)
                draggable.rotation.y= Math.PI * 0.5
                draggable.position.x= Bx+draggable.scale.z/2+0.001
                draggable.position.z= -(By-draggable.scale.x/2)
                draggable.userData.side = "юг";
                
            }
        } else if(draggable.userData.side=="юг"){
            if(draggable.position.z+draggable.scale.x/2 > By){
                controls2.detach(draggable)
                draggable.rotation.y= Math.PI * 1
                draggable.position.x= Bx-draggable.scale.x/2
                draggable.position.z= By+draggable.scale.z/2+0.001
                draggable.userData.side = "запад";
                
            }else if(draggable.position.z-draggable.scale.x/2 < Cy){
                controls2.detach(draggable)
                draggable.rotation.y= Math.PI * 1
                draggable.position.x= Bx-draggable.scale.x/2
                draggable.position.z= -(By+draggable.scale.z/2+0.001)
                draggable.userData.side = "восток";
                
            }
        }
      })
}


//Вычисление

document.querySelector('.input5').addEventListener("change", (event) => {

    
    let length = document.querySelector('.input5').value.replace(/,/,'.');
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

    if(oneroof){
        const vertices3 = new Float32Array( [
            Cx, Cz,  Cy, // v0 x, z, y
            Dx, Dz,  Dy, // v1
            Cx1, Pz,  Cy1, // v2
    
            Cx1, Pz,  Cy1, // v3
            Dx1, Pz,  Dy1, // v4
            Dx, Dz,  Dy  // v5
        ] );
        geometry3.setAttribute('position', new THREE.BufferAttribute( vertices3, 3 ));
        mesh3.aspect = new THREE.Mesh(geometry3, material3);

        const vertices5 = new Float32Array( [
            Ax1, Az1, Ay1, // v0 x, z, y
            Bx1, Bz1, By1, // v1
            Px1, Pz1, Dy1, // v2
    
            Px1, Pz1, Dy1, // v3
            Px, Pz, Dy1, // v5
            Ax1, Az1, Ay1  // v5
        ] );
        geometry5.setAttribute('position', new THREE.BufferAttribute( vertices5, 3 ));
        mesh5.aspect = new THREE.Mesh(geometry5, material5);
        
    
        const vertices7 = new Float32Array( [
            Bx1, Bz1, By1, // v0 x, z, y
            Cx1, Cz1, Cy1, // v1
            Px1, Pz1, Dy1, // v2
        ] );
        geometry7.setAttribute('position', new THREE.BufferAttribute( vertices7, 3 ));
        mesh7.aspect = new THREE.Mesh(geometry7, material7);
    
        const vertices8 = new Float32Array( [
            Ax1, Az1, Ay1, // v0 x, z, y
            Dx1, Dz1, Dy1, // v1
            Px, Pz, Dy1, // v2
        ] );
        geometry8.setAttribute('position', new THREE.BufferAttribute( vertices8, 3 ));
        mesh8.aspect = new THREE.Mesh(geometry8, material8);
    }else{
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
    for (let i = 0; i < scene.children.length; i++) {
        if(scene.children[i].userData.side=="юг"){
            scene.children[i].position.x=Bx + 0.026
        }if(scene.children[i].userData.side=="север"){
            scene.children[i].position.x=-Bx -0.026
        }
    }
});

let oneroof = false
document.querySelector(".input6").addEventListener("change", (event) => {
    
    let width = document.querySelector('.input6').value.replace(/,/,'.');
    let w = width/2;
    Ay=w;
    By=w;
    By1=w;
    Ay1=w;
    Cy=-w;
    Dy=-w;
    Cy1=-w;
    Dy1=-w;

    if(oneroof){
        const vertices5 = new Float32Array( [
            Ax1, Az1, Ay1, // v0 x, z, y
            Bx1, Bz1, By1, // v1
            Px1, Pz1, Dy1, // v2

            Px1, Pz1, Dy1, // v3
            Px, Pz, Dy1, // v5
            Ax1, Az1, Ay1  // v5
        ] );
        geometry5.setAttribute('position', new THREE.BufferAttribute( vertices5, 3 ));
        mesh5.aspect = new THREE.Mesh(geometry5, material5);
        

        const vertices7 = new Float32Array( [
            Bx1, Bz1, By1, // v0 x, z, y
            Cx1, Cz1, Cy1, // v1
            Px1, Pz1, Dy1, // v2
        ] );
        geometry7.setAttribute('position', new THREE.BufferAttribute( vertices7, 3 ));
        mesh7.aspect = new THREE.Mesh(geometry7, material7);

        const vertices8 = new Float32Array( [
            Ax1, Az1, Ay1, // v0 x, z, y
            Dx1, Dz1, Dy1, // v1
            Px, Pz, Dy1, // v2
        ] );
        geometry8.setAttribute('position', new THREE.BufferAttribute( vertices8, 3 ));
        mesh8.aspect = new THREE.Mesh(geometry8, material8);
        const vertices3 = new Float32Array( [
            Cx, Cz,  Cy, // v0 x, z, y
            Dx, Dz,  Dy, // v1
            Cx1, Pz,  Cy1, // v2

            Cx1, Pz,  Cy1, // v3
            Dx1, Pz,  Dy1, // v4
            Dx, Dz,  Dy  // v5
        ] );
        geometry3.setAttribute('position', new THREE.BufferAttribute( vertices3, 3 ));
        mesh3.aspect = new THREE.Mesh(geometry3, material3);
    }else{
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
    }

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

    
    
    for (let i = 0; i < scene.children.length; i++) {
        if(scene.children[i].userData.side=="запад"){
            scene.children[i].position.z=By + 0.026
        }if(scene.children[i].userData.side=="восток"){
            scene.children[i].position.z=-By -0.026
        }
    }
});


document.querySelector(".input7").addEventListener("change", (event) => {
    let height = document.querySelector('.input7').value.replace(/,/,'.');
    let h = height*1;
    Az1=h;
    Bz1=h;
    Cz1=h;
    Dz1=h;

    Pz=h+1;
    Pz1=h+1;

    if(oneroof){

        const vertices3 = new Float32Array( [
            Cx, Cz,  Cy, // v0 x, z, y
            Dx, Dz,  Dy, // v1
            Cx1, Pz,  Cy1, // v2
    
            Cx1, Pz,  Cy1, // v3
            Dx1, Pz,  Dy1, // v4
            Dx, Dz,  Dy  // v5
        ] );
        geometry3.setAttribute('position', new THREE.BufferAttribute( vertices3, 3 ));
        mesh3.aspect = new THREE.Mesh(geometry3, material3);
        const vertices5 = new Float32Array( [
            Ax1, Az1, Ay1, // v0 x, z, y
            Bx1, Bz1, By1, // v1
            Px1, Pz1, Dy1, // v2
    
            Px1, Pz1, Dy1, // v3
            Px, Pz, Dy1, // v5
            Ax1, Az1, Ay1  // v5
        ] );
        geometry5.setAttribute('position', new THREE.BufferAttribute( vertices5, 3 ));
        mesh5.aspect = new THREE.Mesh(geometry5, material5);
        
    
        const vertices7 = new Float32Array( [
            Bx1, Bz1, By1, // v0 x, z, y
            Cx1, Cz1, Cy1, // v1
            Px1, Pz1, Dy1, // v2
        ] );
        geometry7.setAttribute('position', new THREE.BufferAttribute( vertices7, 3 ));
        mesh7.aspect = new THREE.Mesh(geometry7, material7);
    
        const vertices8 = new Float32Array( [
            Ax1, Az1, Ay1, // v0 x, z, y
            Dx1, Dz1, Dy1, // v1
            Px, Pz, Dy1, // v2
        ] );
        geometry8.setAttribute('position', new THREE.BufferAttribute( vertices8, 3 ));
        mesh8.aspect = new THREE.Mesh(geometry8, material8);
    }else{
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
  
});


document.querySelector('.oneRoof').addEventListener("click", (event) => {
    oneroof=true
    const vertices5 = new Float32Array( [
        Ax1, Az1, Ay1, // v0 x, z, y
        Bx1, Bz1, By1, // v1
        Px1, Pz1, Dy1, // v2

        Px1, Pz1, Dy1, // v3
        Px, Pz, Dy1, // v5
        Ax1, Az1, Ay1  // v5
    ] );
    geometry5.setAttribute('position', new THREE.BufferAttribute( vertices5, 3 ));
    mesh5.aspect = new THREE.Mesh(geometry5, material5);
    

    const vertices7 = new Float32Array( [
        Bx1, Bz1, By1, // v0 x, z, y
        Cx1, Cz1, Cy1, // v1
        Px1, Pz1, Dy1, // v2
    ] );
    geometry7.setAttribute('position', new THREE.BufferAttribute( vertices7, 3 ));
    mesh7.aspect = new THREE.Mesh(geometry7, material7);

    const vertices8 = new Float32Array( [
        Ax1, Az1, Ay1, // v0 x, z, y
        Dx1, Dz1, Dy1, // v1
        Px, Pz, Dy1, // v2
    ] );
    geometry8.setAttribute('position', new THREE.BufferAttribute( vertices8, 3 ));
    mesh8.aspect = new THREE.Mesh(geometry8, material8);

    scene.remove(mesh6)

    const vertices3 = new Float32Array( [
        Cx, Cz,  Cy, // v0 x, z, y
        Dx, Dz,  Dy, // v1
        Cx1, Pz,  Cy1, // v2

        Cx1, Pz,  Cy1, // v3
        Dx1, Pz,  Dy1, // v4
        Dx, Dz,  Dy  // v5
    ] );
    geometry3.setAttribute('position', new THREE.BufferAttribute( vertices3, 3 ));
    mesh3.aspect = new THREE.Mesh(geometry3, material3);
    
})

document.querySelector('.twoRoof').addEventListener("click", (event) => {
    oneroof=false

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

    scene.add(mesh6)
    
})

document.querySelector('.color2').addEventListener("click", (event) => {
    console.log("vfdvkd", mesh.material.color)
    mesh.material.color = {r: 1, g: 1, b: 1}
    mesh2.material.color = {r: 1, g: 1, b: 1}
    mesh3.material.color = {r: 1, g: 1, b: 1}
    mesh4.material.color = {r: 1, g: 1, b: 1}
    mesh7.material.color = {r: 1, g: 1, b: 1}
    mesh8.material.color = {r: 1, g: 1, b: 1}
})
document.querySelector('.color1').addEventListener("click", (event) => {
    console.log("vfdvkd", mesh.material.color)
    mesh.material.color = {r: 1, g: 0, b: 0}
    mesh2.material.color = {r: 1, g: 0, b: 0}
    mesh3.material.color = {r: 1, g: 0, b: 0}
    mesh4.material.color = {r: 1, g: 0, b: 0}
    mesh7.material.color = {r: 1, g: 0, b: 0}
    mesh8.material.color = {r: 1, g: 0, b: 0}
})
document.querySelector('.color3').addEventListener("click", (event) => {
    console.log("vfdvkd", mesh.material.color)
    mesh.material.color = {r: 0, g: 0, b: 0}
    mesh2.material.color = {r: 0, g: 0, b: 0}
    mesh3.material.color = {r: 0, g: 0, b: 0}
    mesh4.material.color = {r: 0, g: 0, b: 0}
    mesh7.material.color = {r: 0, g: 0, b: 0}
    mesh8.material.color = {r: 0, g: 0, b: 0}
})

document.querySelector('.wall').addEventListener("click", (event) => {
    controls2.showX = false
            controls2.showY = false
            controls2.showZ = false
    document.querySelector(".settingsMenu").style.display="block"
    document.querySelector('h3').innerText="Стены"
    
    document.querySelector('.roof').style.color="rgb(195, 195, 195)"
    document.querySelector('.cover1').style.display="block"
      document.querySelector('.cover2').style.display="block"
      document.querySelector('.cover3').style.display="none"
      document.querySelector('.cover4').style.display="none"
      document.querySelector('.cover5').style.display="none"
      document.querySelector('.cover6').style.display="block"
      lastopening.style.color="rgb(195, 195, 195)"
      document.querySelector('.wall').style.color="white"
})

document.querySelector('.roof').addEventListener("click", (event) => {
    controls2.showX = false
            controls2.showY = false
            controls2.showZ = false

    document.querySelector(".settingsMenu").style.display="block"
    document.querySelector('h3').innerText="Крыша"
    document.querySelector('.roof').style.color="white"
    document.querySelector('.wall').style.color="rgb(195, 195, 195)"
    document.querySelector('.cover1').style.display="none"
      document.querySelector('.cover2').style.display="none"
      document.querySelector('.cover3').style.display="block"
      document.querySelector('.cover4').style.display="none"
      document.querySelector('.cover5').style.display="none"
      document.querySelector('.cover6').style.display="block"
      lastopening.style.color="rgb(195, 195, 195)"
})


document.querySelector('.buttonset').addEventListener("click", (event) => {
    document.querySelector(".buttonset").style.animation = "reversemoveAndHideAnimationk 0.5s forwards";
    document.querySelector(".selectionMenu").style.animation = "reversemoveAndHideAnimationk2 1s forwards"; 
})

document.querySelector('.cross1').addEventListener("click", (event) => {
    document.querySelector(".selectionMenu").style.animation = "moveAndHideAnimationk2 1s forwards"; // Запускаем анимацию
    document.querySelector(".buttonset").style.animation = "moveAndHideAnimationk3 1.5s forwards";
})


document.querySelector('.cross2').addEventListener("click", (event) => {
    document.querySelector(".settingsMenu").style.display="none"
    lastopening.style.color="rgb(195, 195, 195)"
    document.querySelector('.roof').style.color="rgb(195, 195, 195)"
    document.querySelector('.wall').style.color="rgb(195, 195, 195)"
    controls2.showX = false
            controls2.showY = false
            controls2.showZ = false
})


// Получаем все элементы с классом toggleContent
document.querySelectorAll('.select').forEach(item => {
    // Добавляем обработчик клика
    item.addEventListener('click', (event) => {
        // Получаем целевой элемент для отображения/скрытия
        var targetSelector = item.getAttribute('data-target');
        var div2 = document.querySelector(targetSelector);

        // Получаем все открытые элементы и скрываем их, кроме текущего
        document.querySelectorAll('.option-content').forEach(content => {
            if (content !== div2) {
                content.style.display = "none";
            }
        });

        // Переключаем отображение текущего элемента
        div2.style.display = (div2.style.display === "none" || div2.style.display === "") ? "block" : "none";

        // Останавливаем всплытие события, чтобы клик на toggleContent не вызывал закрытие элемента
        event.stopPropagation();
    });
});
// Добавляем обработчик клика на весь документ для закрытия элемента при клике вне него
document.addEventListener('click', (event) => {
    document.querySelectorAll('.option-content').forEach(content => {
        if (!content.contains(event.target)) {
            content.style.display = "none";
        }
    });
});


document.querySelectorAll('.option').forEach(item => {
    // Добавляем обработчик клика
    item.addEventListener('click', (event) => {
        document.querySelectorAll(item.getAttribute('data-target'))[0].textContent=item.textContent
        
    });
});

document.querySelector('.cover6').addEventListener("click", (event) => {
    document.querySelector(".background-panel-options-wrapper").style.display="flex"
})
document.querySelector('.send').addEventListener("click", (event) => {
    document.querySelector(".background-feedback-wrapper").style.display="flex"
})

document.querySelector('.cross4').addEventListener("click", (event) => {
    document.querySelector(".background-feedback-wrapper").style.display="none"
})
document.querySelector('.cross5').addEventListener("click", (event) => {
    document.querySelector(".background-panel-options-wrapper").style.display="none"
})