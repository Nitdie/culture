<template>
  <div class="common-layout">
    <el-container>
      <el-header :class="{'title-header':is_title,'custom-header':!is_title}">{{ Header }}</el-header>
      <el-main :class="{'title-main':is_title,'custom-main':!is_title}">{{Content}}</el-main>
      <el-main class=title-footer v-show="is_title">
        <div class="arrow" @click="scrollDown"></div>
      </el-main>
    </el-container>
  </div>
</template>


<script>
export default {
  name: "subpage-com",
  data(){
    return{
      // is_title: false,
      // Header:"浩汤水长",
      // Content:"常州水概述"
    }
  },
  props:['is_title','Header','Content'],
  methods:{
    scrollDown(){
      console.log('down')
    }
  }
}
</script>

<style scoped>
.common-layout{
  position: absolute;
  top:0px;
  left: 0px;
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
  height:27vh;
  width:90vw;
  /*background-color: #007BFF;*/
  display: flex;
  align-items: center;
  font-size: 50px;
  font-family: msz;
  text-shadow: 1px 1px 2px #fff8f8;
}
.custom-main{
  margin-left:10vw;
  height:73vh;
  width: 90vw;
  /*background-color: #b7ff00;*/
  display: flex;
  font-size: 30px;
  font-family: msz;
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