<template>
  <el-menu
      unique-opened
      :default-active="$route.path"
      router
      :collapse="menuFold"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
    <menu-item v-for="(item,i) in menuList" :key="i" :menuList="item"/>
  </el-menu>
</template>

<script>
import { mapState } from 'vuex'
import menuItem from '@/components/layout/menuItem'

export default {
  name: 'GlobalAside',
  mounted() {
    console.log(this.menuList)
  },
  components: {
    menuItem
  },
  computed: {
    menuList() {
      return this.$store.state.menuItems[0].children
    },
    ...mapState(['menuFold'])
  }
}
</script>

<style scoped>

</style>
