<template>
  <div class=common-layout>
    <el-container v-if="!is_bridge">
      <el-header :class="{'title-header':is_title,'custom-header':!is_title}">{{ Header }}</el-header>
      <el-main :class="{'title-main':is_title,'custom-main':!is_title}">{{Content}}</el-main>
      <el-main class=title-footer v-show="is_title">
        <div class="arrow" @click="scrollDown"></div>
      </el-main>
    </el-container>
    <bridge-com v-if="is_bridge" :off-top="offTop"></bridge-com>
  </div>
</template>


<script>
import bridgeCom from "@/components/bridge-com";

export default {
  name: "subpage-com",
  components:{
    bridgeCom
  },
  data(){
    return{
      // is_title: false,
      // Header:"浩汤水长",
      // Content:"常州水概述"
    }
  },
  // props:['is_title','is_bridge','Header','Content'],
  props:{
    'is_title':{
      type:Boolean,
      default:false
    },
    'is_bridge':{
      type:Boolean,
      default:true
    },
    'Header':{
      type:String,
      default:'TestHeader'
    },
    'Content':{
      type:String,
      default: 'TestContent'
    },
    'offTop':{
      type:Number,
      default:0,
    }
  },
  methods:{
    scrollDown(){
      this.$emit('scrollDown')
    }
  },
}
</script>

<style scoped>
.common-layout{
  position: absolute;
  top:0px;
  left: 0px;
  transition: all 0.7s ease-out;
}
.title-footer{
  height:16vh;
  width: 100vw;
  /*background-color: white;*/
  white-space: pre-line;
  display: flex;
  justify-content: center;
  font-size: 35px;
  font-family: msz;
  color: #746f6f;
  opacity: 60%;
}
.title-header{
  height:44vh;
  width: 100vw;
  /*background-color: #007BFF;*/
  align-items: flex-end;
  display: flex;
  justify-content: center;
  font-size: 90px;
  font-family: msz;
  color: rgb(0, 0, 0);
  text-shadow: 1px 1px 4px #fff8f8;
  opacity: 0.8;
}
.title-main{
  height:40vh;
  width: 100vw;
  /*background-color: white;*/
  white-space: pre-line;
  display: flex;
  justify-content: center;
  font-size: 35px;
  font-family: msz;
  color: #494949;
}
.custom-header{
  margin-left:10vw;
  height:35vh;
  width:90vw;
  /*background-color: #007BFF;*/
  display: flex;
  align-items: center;
  font-size: 50px;
  font-family: msz;
  text-shadow: 0.6px 0.6px 1px #fff8f8;
}
.custom-main{
  margin-left:10vw;
  margin-right:10vw;
  height:65vh;
  width: 80vw;
  /*background-color: rgba(0,0,255,10%);*/
  display: flex;
  font-size: 30px;
  font-family: msz;
  font-weight: 100;
  line-height: 40px;
  text-shadow: 0.2px 0.2px 2px #ffffff;
}
.arrow {
  opacity: 50%;
  width: 0;
  height: 0;
  border-left: 11px solid transparent;
  border-right: 11px solid transparent;
  border-top: 21px solid #000000; /* 箭头的颜色，这里使用了蓝色作为示例 */
  cursor: pointer;
}
</style>