import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'


const canvas = document.querySelector("#canvas")

//Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color('#F0F0F0')

//Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5

//object
const geometry = new THREE.DodecahedronGeometry()
const material = new THREE.MeshLambertMaterial({color:'#468585', emissive:"#468585"})

const dodecahedron = new THREE.Mesh(geometry, material)


const boxGeometry = new THREE.BoxGeometry(2,0.1,2)
const boxMaterial = new THREE.MeshLambertMaterial({color:'#B4B4B3', emissive:'#B4B4B3'})
const box = new THREE.Mesh(boxGeometry, boxMaterial)
box.position.y = -2

scene.add(dodecahedron)
scene.add(box)


//light

const light = new THREE.SpotLight(0x006769, 100)
light.position.set(1,2,1)

const redLight = new THREE.DirectionalLight(0xf5fe01, 5)
light.position.set(3,-5,5)


scene.add(light)
scene.add(redLight)

const renderer = new THREE.WebGLRenderer({canvas})

renderer.setSize(window.innerWidth, window.innerHeight  )
renderer.setPixelRatio(window.devicePixelRatio)


const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.05
controls.enableZoom = true
controls.enablePan = true

// animation

const animation = () => {
  requestAnimationFrame(animation)
  
  dodecahedron.rotation.x += 0.01
  dodecahedron.rotation.y += 0.01
  
  box.rotation.y -= 0.005
  controls.update()
  renderer.render(scene, camera)

}

animation()

//Resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})