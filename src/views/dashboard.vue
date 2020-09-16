<template>
  <el-container>
    <el-aside :width="!$store.state.menuFold?'200px':'50px'" style="overflow-x: hidden">
      <globalAside />
    </el-aside>
    <el-container>
      <el-header style="background: #f7f7f7;border-bottom: 1px solid #cccccc"><global-header /></el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import globalHeader from '@/components/layout/globalHeader'
import globalAside from '@/components/layout/globalAside'
export default {
  name: 'Index',
  components: {
    globalHeader,
    globalAside
  }
}
</script>

<style>
.el-submenu.is-active .el-submenu__title{
  color: #f4f4f5 !important;
}
</style>
