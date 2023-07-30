<template>
  <transition>
  <div class="center-container" v-if="showPage">
    <water-com style="position:fixed"></water-com>
    <subpage-com v-for="(page,index) in SubPages"
                 :Header="page.head"
                 :Content="page.content"
                 :is_title="page.title"
                 :style="{ top: index * 100 + '%' }"></subpage-com>

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
        {title:"true",head:"HEAD 1",content:"CONTENT 1"},
        {title:"",head:"HEAD 2",content:"CONTENT 2"},
      ]
    }
  },
  methods:{
    init(){
      this.fadeIn();
    },
    fadeIn(){
      setTimeout(() => {
        this.showPage = true;
      },1000)
    }
  },
  mounted(){
    this.init()
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