<template>
  <div style="height: 100%">
    <template v-if="!menuList.children || menuList.children.length === 0">
      <el-menu-item :key="menuList.name" :index="menuList.path">
        <i :class="menuList.icon"></i>
        {{ menuList.text }}
      </el-menu-item>
    </template>
    <el-submenu v-else :index="menuList.path" style="text-align: left">
      <span slot="title">
        <i :class="menuList.icon"></i>
        {{ menuList.text }}
      </span>
      <template v-for="child in menuList.children">
        <menu-item v-if="child.children && child.children.length>0" :key="child.name" :menuList="child"/>
        <el-menu-item v-else :key="child.name" :index="child.path">
          {{ child.text }}
        </el-menu-item>
      </template>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    menuList: {
      type: Object,
      required: true
    }
  },
  mounted() {
    console.log(this.menuList)
  }
}
</script>

<style scoped>

</style>
