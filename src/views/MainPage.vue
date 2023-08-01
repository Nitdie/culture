<template>
  <transition>
  <div class="center-container" v-if="showPage">
    <water-com style="position:fixed"></water-com>
    <subpage-com v-for="(page,index) in SubPages"
                 :Header="page.head"
                 :Content="page.content"
                 :is_title="page.title"
                 :is_bridge="page.bridge"
                  name="sub"
                 :style="{top: index * 100 + 'vh'}"
                @scrollDown="scroll"></subpage-com>

  </div>
  </transition>
</template>

<script>
import waterCom from "@/components/water-com";
import subpageCom from "@/components/subpage-com";

export default {
  name: "MainPage.vue",
  data(){
    return {
      showPage:false,
      SubPages:[
        {title:true,head:"HEAD 1",content:"CONTENT 1",bridge: false},
        {title:false,head:"HEAD 2",content:"CONTENT 2",bridge: false},
        {title:true,head:"HEAD 3",content:"CONTENT 3",bridge: false},
        {title:false,head:"HEAD 4",content:"CONTENT 4",bridge:true},
      ],
      id:'water',
    }
  },
  methods:{
    fadeIn(){
      setTimeout(() => {
        this.showPage = true;
      },1000)
    },
    addScroll(){
      setTimeout( ()=>{
        const cont = document.getElementsByClassName('center-container')[0]
        const elements =document.getElementsByName('sub')
        cont.addEventListener('wheel',(e)=>{
          const delta = e.deltaY || e.detail || e.wheelDelta;
          let scrollSpeed = 8;
          if(e.deltaZ)
            scrollSpeed = -80;

          Array.prototype.forEach.call(elements,(element,index)=>{
            const currentTop = parseFloat(element.style.top) || 0;

            //
            if(delta>0){
              if(parseFloat(elements[elements.length-1].style.top)-scrollSpeed < 0){
                scrollSpeed = parseFloat(elements[elements.length-1].style.top||0) ;
              }
              element.style.top = currentTop - scrollSpeed + 'vh'
            }
            else{
              if(parseFloat(elements[elements.length-1].style.top) + scrollSpeed > 200){
                scrollSpeed = parseFloat(200-parseFloat(elements[elements.length-1].style.top))
              }
              element.style.top = currentTop + scrollSpeed + 'vh'
            }

            //内容进出时的透明度控制
            function checkOp(){
              const CT = parseFloat(element.style.top) || 0
              if(CT>=-45&&CT<=45)
                element.style.opacity=1
              else
                element.style.opacity=0
            }
            checkOp()
            if(e.deltaZ)
              setTimeout(checkOp,700)
          })
        })
      },1000)
    },
    scroll(){
      const cont = document.getElementsByClassName('center-container')[0]
      cont.dispatchEvent(new WheelEvent('wheel',{deltaZ:1}))
      document.body.dispatchEvent(new WheelEvent('wheel',{deltaY:1,deltaZ:1}))
    }
  },

  mounted(){
    this.fadeIn()
    this.addScroll()
  },
  components:{
    waterCom,
    subpageCom
  }

}
</script>

<style scoped>

.v-enter-active,
.v-leave-active{
  transition:opacity 1s ease
}
.v-enter-from,
.v-leave-to{
  opacity:0
}
#container_canvas{
  position: absolute;
}
</style>