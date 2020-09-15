<template>
  <div>
      <div class="h-right" style="display:flex; justify-content: flex-end;align-items: center;">
        <div class="notice-c" title="查看新消息">
          <div class="newMsg"></div>
          <i class="el-icon-phone"/>
        </div>
        <div class="user-img-c">
          <img style="width:50px; height:50px" src="../../assets/logo.png" alt=""/>
        </div>
        <el-dropdown>
          <span class="el-dropdown-link">下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalHeader',
  data() {
    return {
      arrowDown: false,
      arrowUp: true,
      userName: 'admin'
    }
  }
}
</script>

<style scoped>

</style>
