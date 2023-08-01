<template>
  <transition>
  <div class="center-container" style="background-color: transparent" v-show="showPage">
    <water-com style="position:fixed;z-index: -2"></water-com>
    <subpage-com v-for="(page,index) in SubPages"
                 :Header="page.head"
                 :Content="page.content"
                 :is_title="page.title"
                 :is_bridge="page.bridge"
                 :off-top="offTop"
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
      offTop:0,
      showPage:false,
      SubPages:[
        {
          title:true,
          head:"浩汤水长",
          content:"常州水概述",
          bridge: false},
        {
          title:false,
          head:"地形地貌",
          content:"常州市地处太湖流域西部，北临长江，东濒太湖，西界茅山，南接天目山余脉，腹部有洮鬲两湖。境内地形复杂，山丘、平原、圩区兼有，丘陵山区位于西南部，面积1012平方公里，占全市总面积的23％；中部和东部大部分是平原，面积1585平方公里，占全市总面积的36％；圩区主要分布在丘陵山脚和腹部洮、鬲湖周围，部分在沿江地区和与锡澄接界处，面积1253平方公里，占全市总面积的29％；圩外河湖面积525平方公里，占全市总面积的12％。全市地势高低相间，山圩相依，湖圩相连，河网密布。由于地形复杂，河流众多，历年来常州市治水和防洪任务艰巨。",
          bridge: false},
        {
          title:false,
          head:"河道水系",
          content:"常州市分成太湖流域的湖西和武澄锡两区。其中，金坛、溧阳及武进的西南部属湖西地区，市区和武进的东部属武澄锡地区。境内从南至北分成三大水系，一是南河水系，主要有南河、中河、北河。二是太湖、鬲湖、洮湖三湖水系，主要有太鬲运河、湟里河、北干河、中干河。三是运河水系，运河水系中分运北水系和运南水系，运北水系有浦河、新孟河、剩银河、德胜河、澡港河、舜河、北塘河；运南水系有通济河、丹金溧漕河、扁担河、武宜运河、采菱港、武进港，共计21条骨干河道。这21条骨干河道，一般河底底宽都在10米以上，平均水面宽30米以上，是全市主要引排调蓄河道。",
          bridge: false},
        {
          title:false,
          head:"水利工程",
          content:"全市共有大小水库91座，其中大中型水库5座（沙河、大溪、茅东、塘马、前宋），小型水库86座，总蓄水量4亿立方米。1991年大水后，按照“西蓄（水库调蓄、湖荡滞洪）、北排（洪水向北排入长江）、东泄（泄入太湖）、中控（大运河新闸和丹金闸控制）”的防洪治水战略，集中力量办成了几件大事，相继建成了沿江魏村水利枢纽、澡港水利枢纽、沿湖武进港水利枢纽、雅浦港水利枢纽、丹金闸水利枢纽、新闸防洪控制等六大调节控制工程，以及长江堤防达标、环太湖大堤加固、北河拓浚、澡港河拓浚等四大工程，共计投入8.7亿元。全市共有中型以上水闸5座，中小型灌排站3771座，千亩以上圩堤2251 公里，长江江、港、洲堤共58 公里。所有这些河流、水库、水利枢纽、灌排站，形成水利固定资产21.9亿元，构成了全市挡潮、防洪、供水、排涝、灌溉的水资源调度体系",
          bridge:false},
        {
          title:true,
          head:"古桥实例",
          content:"本善桥",
          bridge:false},
        {
          title:false,
          head:"古桥实例",
          content:"本善桥",
          bridge:true},
        {
          title:true,
          head:"古韵今风",
          content:"常州市水文化遗产介绍",
          bridge:false},
        {
          title:false,
          head:"大运河水利工程遗产",
          content:"河道保护名录有12个遗产点，其中重点保护类包括老运河常州西段（通航段）、老运河常州西段（禁航段）、老运河常州东段（通航段）、老运河常州东段（禁航段）、老运河市区段（明运河）、南市河（古运河）、东市河（古运河）；一般保护类包括关河、西市河、北市河、南运河和老孟河。水利工程设施保护名录有23个遗产点，包括6个市级文物保护单位——锁桥、中新桥、新坊桥、彩虹桥、万缘桥、宝善桥，1个历史建筑——古纤道，以及其他码头、水闸等。诸多水利工程设施遗产代表了所在时期的杰出技术成就，充分见证了水利工程技术的发展历史。",
          bridge:false},
        {
          title:false,
          head:"大运河相关非物质文化遗产",
          content:"大运河相关非物质文化遗产包括常州梳篦、孟河医派、芙蓉荡湖船、常州划龙舟、“上三”集市、运河相关诗词、横山桥庙会、德安桥上对山歌、乾隆在常州的传说、苏东坡在常州的传说10项，其中前4项已进入各级非遗名录。这些为研究大运河对流经区域文化的形成、发展与传播作用提供了重要的历史资料。",
          bridge:false},
        {
          title:false,
          head:"大运河生态和景观环境",
          content:"大运河生态与景观环境主要包括郊野生态和城镇景观。其中郊野生态包括生态高敏感区、生态中敏感区、生态低敏感区和生态不敏感区；城镇景观包括沿河景观视线、沿河天际线和沿河高度形态。这些为研究大运河变迁提供了重要的历史资料，为研究大运河对周边自然环境的影响提供了现实依据。",
          bridge:false},



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
              if(parseFloat(elements[elements.length-1].style.top) + scrollSpeed > (elements.length-1)*100){
                scrollSpeed = parseFloat((elements.length-1)*100-parseFloat(elements[elements.length-1].style.top))
              }
              element.style.top = currentTop + scrollSpeed + 'vh'
            }

            //内容进出时的透明度控制
            function checkOp(){
              const CT = parseFloat(element.style.top) || 0
              if(CT>=-44&&CT<=44)
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
</style>