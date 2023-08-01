<template>
  <div class="cont-main flex-lg-row">
    <div class="col-6" id="container_canvas">
      <div class="shadow-sm text-black-50 h2 title-bridge">本善桥</div>
    </div>
  </div>

  <template v-for="item in items">
  <el-dialog
      v-model="dialogVisible"
      width="60vw"
      v-if ="item.tag===showTag"
      :modal="false"
      style="background-color: rgba(255,255,255,40%)"
      center
  >
    <template #header>
      <h1 class="dialog-header">{{item.title}}</h1>
    </template>
    <el-container style="margin-top:-5%">
      <el-aside v-if="item.imgSrc" style="width:45%">
        <img  :src="item.imgSrc" class="dialog-img">
      </el-aside>
      <el-main class="dialog-content" v-html="item.article">

      </el-main>
    </el-container>

  </el-dialog>
  </template>
</template>

<style scoped>
.dialog-img{
  width:100%;
}
.dialog-header{
  font-family: msz;
  text-shadow: 0.5px 0.5px 2px #fff8f8;
}
.dialog-content{
  color: #000000;
  font-family: msz;
  font-weight: 500;
  font-size: 26px;
  line-height: 30px;
  text-shadow: 0.2px 0.2px 2px #fff8f8;
}
#container_canvas{
  height: 100vh;
  width: 100vw;
  /*width: 1000px;*/
  margin: 0;
  padding: 0;
  border-color: #656464;
  /*background: rgb(95, 110, 116);*/
}
.cont-main{
  /*display: flex;*/
  position:absolute;
  width: available;
  height: 800px;
  margin:0;
  padding:0;
}
.title-bridge{
  background: rgba(255,255,255,50%);
  user-select: none;
  position:absolute;
}
</style>
<script>
import * as THREE from '../js/three/src/Three'
import { GLTFLoader } from '../js/GLTFLoader.js';
import {OrbitControls} from "../js/OrbitControls.js";
import {CSS3DRenderer,CSS3DObject} from "../js/CSS3DRenderer.js";

export default {
  name: "bridge-com",
  data(){
    return{
      dialogVisible:false,
      showTag:'Body',
      items:[
        {
          tag: "Body",
          title: "桥体",
          article: "本善桥青石砌造，拱券为分节并列式，桥面连同东西桥堍总长30.18米，桥面上宽3米，桥堍宽3.75米， 跨径8米，拱矢高4.7米。拱券分11节，每节拱石左右对称，沿纵向砌成一片片单独拱卷，下部3节每节为1.75米，向上一节为0.85米， 再上一节为0.35米， 顶部一节为0.30米,以适应砌成圆弧拱形的需要。拱券宽度自下而上有收分,底部3.22米，顶部3米，拱石宽0.40~ 0.94米不等，每节拱券以5块拱石并列组成，然后将这一列列的单片拱拼合在一 起，成为一座拱孔的拱券，顶部正中有一块“浮雕莲花图案”合龙石，象征“和合”之意。\n <br> <br> 本善桥上下石缝相错，缝间使用了中国传统灰浆技术——糯米灰浆封灌。这种糯米灰浆有强度大、韧性好、防渗性能好等优点。成书于明朝的《天工开物》对糯米灰浆的组成、制作方法和性能都有详细记载:“灰一分人河砂，黄土二分，用糯米、羊桃藤汁和匀，经筑坚固，永不隳坏，名日‘三合土’。”它的出现使建筑胶凝材料的粘结性有了质的飞跃，代表了我国古代石灰基粘合剂的最高成就。"
        },
        {
          tag: "Ear",
          title: "桥耳",
          article: "拱圈的两侧上部左右各突出两个桥耳，耳面雕着如意碗花纹 本善桥拱圈两侧上部左右各突出两个桥耳，其用石与部分桥面条石一样，用的是武康紫石。而且耳面雕着如意花纹，立体浮雕效果好，比较写实，其风格与宋徽宗提倡的画风极其一致，常见于其他南宋古桥，这些都是判断本善桥为南宋古桥的重要实物例证。\n",
          imgSrc: "/imgs/ear.png"

        },
        {
          tag: "Gap",
          title: "车痕",
          article: "本善桥长年累月形成的车痕 <br> 800 多年的历史潮流中，人们来往步行于桥面，石块被踩得光滑溜平，独轮车行进的车道，磨损出一道凹陷溜亮的沟，光滑明亮，异常鲜明。\n",
          imgSrc: "/imgs/gap.png"
        },
        {
          tag: "Brick",
          title: "合龙石",
          article: "桥体“本善桥”字样 <br> 正中栏板外侧镌有楷书“本善桥”三字，字外有圈",
          imgSrc: "/imgs/brick.png"
        }
      ]
    }
  },
  mounted() {
      this.init();
  },
  methods:{
    showDialog(target){
      this.showTag = target
      this.dialogVisible = true
    },

    async init(){
      const _this = this
      const container = document.getElementById("container_canvas");
      const scene = new THREE.Scene();
      const scene2 = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
          75,             //field of view
          container.offsetWidth/container.offsetHeight,   //aspect ratio
          0.1,    //near
          1000    //far
      );
      camera.position.x = 6
      camera.position.y = 1.5;
      camera.position.z = 3.8;
      camera.lookAt(0,0,0)

      const controls = new OrbitControls(camera,container);

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(
          window.innerWidth, window.innerHeight,
          true,
      );
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.domElement.style.position = 'absolute';
      renderer.setClearColor( 0xffffff, 0);
      container.appendChild(renderer.domElement)
      //
      const renderer2 = new CSS3DRenderer();
      renderer2.setSize(
          container.offsetWidth,
          container.offsetHeight,
      )
      container.appendChild(renderer2.domElement);

      // scene.background = new THREE.TextureLoader().load('./infoBack.jpg');

      const loader = new GLTFLoader();
      loader.load( './bs-v4.glb', function ( gltf ) {
        // loader.load( './BR.glb', function ( gltf ) {

        if(gltf.scene.children)
          for(let child of gltf.scene.children){
            // console.log('c:'+child.name)
            if(child.material){
              child.material.metalness = 0.7;
              // console.log('c:'+child.name)
              if(child.name=='Box019')
                child.tag = 'SideWay'
            }
            if(child.name=='组002')
              for(let temp of child.children)
                temp.tag = 'Ear'
            if(child.name=='组011')
              for(let temp of child.children){
                temp.tag = 'Body'
                if(temp.name=="组010"){
                  for(let t of temp.children)
                    t.tag = 'Brick'
                }
              }

            if(child.name=='图形007')
              child.tag = 'Gap'


            if(child.children)
              for(let gchild of child.children){
                // console.log('g:'+gchild.name)
                if(gchild.material){
                  gchild.material.metalness = 0.7;
                  // console.log('g:'+gchild.name)
                }

                if(gchild.children)
                  for(let zchild of gchild.children){
                    // console.log('z:'+zchild.name)
                    if(zchild.material){
                      zchild.material.metalness = 0.7;
                      // console.log('z:'+zchild.name)
                    }

                  }
              }
          }


        gltf.scene.scale.set(1.5,2,2)
        scene.add( gltf.scene );
      }, undefined, function ( error ) {
        console.error( error );
      } );

      const light_color = '#FFFFFF'
      const light_dr = new THREE.DirectionalLight(light_color,2.5);
      light_dr.position.set(100,150,100);
      scene.add(light_dr);
      const light_ambient = new THREE.AmbientLight(light_color,1.2)
      scene.add(light_ambient)

      let url = './1001.json';
      let infos = [];
      let parts = [];
      const data_bridge = await fetch(url);
      const json_bridge = await data_bridge.json();

      // document.querySelector('#container_r').innerHTML = json_bridge.introduction;

      for(let part of json_bridge.components){
        parts.push(part);
        let infoFrames = [];
        const element = document.createElement('div');
        element.style.fontSize = '0.1px';
        // element.style.border = "1px solid";
        element.style.transition = "opacity 0.7s";
        element.style.backgroundSize = '90px 30px'
        element.style.backgroundRepeat = 'no-repeat'
        element.style.opacity = '0.8';
        element.style.textShadow = "0.1px 0.1px 2px #000000"
        element.style.color = "white"
        element.tag = part.tag;
        element.innerHTML = part.text;
        const objectCSS = new CSS3DObject(element);
        objectCSS.position.x = part.position.x;
        objectCSS.position.y = part.position.y;
        objectCSS.position.z = part.position.z;
        objectCSS.scale.x=0.05;
        objectCSS.scale.y=0.05;
        objectCSS.scale.z=0.05;
        scene2.add(objectCSS);
        infos.push(objectCSS);
      }

      let mouse = new THREE.Vector2(0.99,0.99);
      let caster = new THREE.Raycaster();

      const modal = document.getElementById("myModal");

      //WORKING
      function onPointerMove( event ) {
        mouse.x = ((event.clientX - container.offsetLeft) / container.offsetWidth ) * 2 - 1;
        mouse.y = - ((event.clientY - container.offsetTop)/ container.offsetHeight ) * 2 + 1;
      }
      document.body.addEventListener('pointermove',onPointerMove);
      let material_chosen = new THREE.MeshPhongMaterial();
      let chosen;

      function hoverPieces(){
        // console.log(document.querySelector('.dialog'))
        caster.setFromCamera(mouse,camera);
        const intersects = caster.intersectObjects(scene.children)
        chosen = intersects[0];
        container.style.cursor = 'default';
        if(intersects.length==0)
          container.removeEventListener('click',clickListener)
        for(let i=0;i<intersects.length;i++){
          if(intersects[i].object.material&&intersects[i].object.tag) {
            container.style.cursor = 'pointer';
            // intersects[i].object.material.opacity = 0.6;
            intersects[i].object.material.metalness = 0.6;
            intersects[i].object.material.transparent = true;
            material_chosen = intersects[i].object.material;

            if (container.getAttribute('listener') !== 'true'){
              container.addEventListener('click',clickListener)
            }
            for(let info of infos){
              if(info.element.tag==chosen.object.tag){
                info.element.style.opacity = '1';
              }
              else{
                info.element.style.opacity = '0';
              }

            }
            break;
          }
        }
        if(intersects.length==0) {
          for (let info of infos) {
            info.element.style.opacity = '0';
          }
        }
      }


      function clickListener(){
        if(chosen)
          for(let part of parts){
            if(part.tag==chosen.object.tag){
              _this.showDialog(part.tag)
            }
          }
      }
      // clickListener.bind(this)

      function changeCSSOpacity(info){
        if(info.element.style.opacity == 0)
          info.element.style.opacity = 1;
        else
          info.element.style.opacity = 0;
      }

      function resetInfos(){
        for(let info of infos){
          info.lookAt(camera.position.x+info.position.x,
              camera.position.y+info.position.y,
              camera.position.z+info.position.z);
        }
      }
      function resetMaterials(){
        material_chosen.transparent = false;
        material_chosen.opacity = 1;
        material_chosen.metalness = 0.7;
      }

      function resetRenderers(){
        renderer.setSize(
            container.offsetWidth,
            container.offsetHeight,
            true,
        );
        renderer2.setSize(
            container.offsetWidth,
            container.offsetHeight,
        )
      }

      function animate() {
        controls.update();
        resetRenderers();
        resetInfos();
        resetMaterials();
        hoverPieces();
        renderer2.render(scene2,camera);
        renderer.render(scene,camera);
        camera.aspect = renderer.domElement.clientWidth/renderer.domElement.height;
        camera.updateProjectionMatrix();
        requestAnimationFrame(animate);
      }
      animate()



    },

  }
}

</script>

