<template>
  <div id="container_canvas"></div>
</template>

<script>
import * as THREE from '../js/three/src/Three'
import {Water} from '../js/Water'
import {Sky} from '../js/Sky'

export default {
  name: "water-com",
  mounted() {
    this.init();
  },
  methods:{
    init(){
      const container = document.getElementById("container_canvas")
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 1, 20000 );
      camera.position.set( 64, 30, 94 );
      let lookY = 80
      camera.lookAt(0,lookY,0)

      document.body.addEventListener('wheel',(e)=>{
        let speed = 0.003
        if(e.deltaZ==1)
          speed = 0.08
        const intervalId = setInterval(()=>{
          const delta = e.deltaY || e.detail || e.wheelDelta;
          if(delta>0 && lookY > 20)
            lookY -= speed;
          else if(delta <0 && lookY < 80)
            lookY += speed;
        },1)

        setTimeout(()=>{
          clearInterval(intervalId)
        },700)
      })


      const renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping; //????
      renderer.toneMappingExposure = 0.6;
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      const light_color = '#FFFFFF'
      const light_dr = new THREE.DirectionalLight(light_color,3);
      light_dr.position.set(100,150,100);
      // scene.add(light_dr);
      const light_ambient = new THREE.AmbientLight(light_color,0.3)
      // scene.add(light_ambient)

      const geometry = new THREE.BoxGeometry(20,20,20);
      const material = new THREE.MeshStandardMaterial( {roughness:0} );
      const cube = new THREE.Mesh( geometry, material );
      cube.position.set(0,0,2)
      // scene.add( cube );

      //SKY
      const sky = new Sky();
      sky.scale.setScalar(10000);
      scene.add(sky);

      const skyUniforms = sky.material.uniforms;

      skyUniforms[ 'turbidity' ].value = 10;
      skyUniforms[ 'rayleigh' ].value = 2;
      skyUniforms[ 'mieCoefficient' ].value = 0.005;
      skyUniforms[ 'mieDirectionalG' ].value = 0.8;

      //Water
      const waterGeometry = new THREE.PlaneGeometry( 10000, 10000 );
      const water = new Water(
          waterGeometry,
          {
            textureWidth: 512,
            textureHeight: 512,
            waterNormals: new THREE.TextureLoader().load( './waternormals.jpg', function ( texture ) {
              texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            } ),
            sunDirection: new THREE.Vector3(),
            sunColor: 0xffffff,
            waterColor: 0xB0B1B0,
            distortionScale: 3.7,
            fog: scene.fog !== undefined
          }
      );
      water.rotation.x = - Math.PI / 2;
      scene.add(water)

      const parameters = {
        elevation: 2,
        azimuth: 180
      };

      const pmremGenerator = new THREE.PMREMGenerator( renderer );
      let renderTarget;
      const sun = new THREE.Vector3()
      function updateSun() {

        const phi = THREE.MathUtils.degToRad( 90 - parameters.elevation );
        const theta = THREE.MathUtils.degToRad( parameters.azimuth );

        sun.setFromSphericalCoords( 1, phi, theta );

        sky.material.uniforms[ 'sunPosition' ].value.copy( sun );
        water.material.uniforms[ 'sunDirection' ].value.copy( sun ).normalize();

        if ( renderTarget !== undefined ) renderTarget.dispose();

        renderTarget = pmremGenerator.fromScene( sky );

        scene.environment = renderTarget.texture;

      }

      updateSun();

      //镜头控制
      // const controls = new OrbitControls( camera, renderer.domElement );
      // controls.maxPolarAngle = Math.PI * 0.495;
      // controls.target.set( 0, 10, 0 );
      // controls.minDistance = 40.0;
      // controls.maxDistance = 200.0;
      // controls.update();
      updateSun();

      window.addEventListener( 'resize', onWindowResize );

      function onWindowResize(){
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );
      }


      function animate(currentTime) {

        const time = performance.now() *0.001
        water.material.uniforms[ 'time' ].value += 1.0 / 60.0;
        cube.position.y = Math.sin( time ) * 20 + 5;
        cube.rotation.x = time * 0.5;
        cube.rotation.z = time * 0.51;
        requestAnimationFrame( animate );
        renderer.render(scene,camera)
        // lookY+=0.1
        camera.lookAt(0,lookY,0)
      }
      animate()
    }
  }
}
</script>

<style scoped>
#container_canvas{
  margin: 0;
  padding: 0;
  height:100vh;
  width:100vw;
  background-color: beige;
  position: absolute;
}
</style>