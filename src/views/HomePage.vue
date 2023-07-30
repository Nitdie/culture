<template>
  <transition>
  <div class="center-container" v-if="showPage">
    <el-row class="center-row">
      <el-col :span="24" class="center-col">
        <img src="../assets/logo_water.png" class="logo">
        <h1 class="heading">走近常州水文化</h1>
        <p class="description">常州市水文化科普展示平台</p>
        <router-link to="/main">
          <el-button type="primary" style="font-weight: bold" plain @click="enterApp">进入</el-button>
        </router-link>
      </el-col>
    </el-row>
  </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
        showPage: true,
    }
  },
  methods: {
    enterApp() {
      this.showPage = false
    },
  },
};
</script>

<style scoped>
/* 样式示例，实际样式根据项目需要进行调整 */
body{
  margin:0;
  padding:0;
}
.v-enter-active,
.v-leave-active{
  transition:opacity 0.4s ease
}
.v-enter-from,
.v-leave-to{
  opacity:0
}

.logo{
  margin-top:-40%;
  margin-bottom: -15%;
  transform:scale(120%);
  opacity: 0.8;

}
.center-row {
  text-align: center;
}

.center-col {
  max-width: 400px; /* 控制内容容器的最大宽度 */
  padding: 20px;
}

.heading {
  font-size: 32px;
  color: #007BFF; /* 蓝色文字 */
  margin-bottom: 10px;
}

.description {
  font-size: 18px;
  color: #333; /* 黑色文字 */
  margin-bottom: 20px;
}

/* Element Plus 默认会添加样式类 `el-button--primary` 来显示 primary 类型按钮样式 */
/* 如果你需要自定义按钮样式，可以添加自定义样式类 */
.el-button.custom-button {
  background-color: #007BFF; /* 蓝色按钮背景 */
  color: #fff; /* 白色按钮文字 */
}
</style>
