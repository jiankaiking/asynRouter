<template>
  <div style="display: flex; height: 100%; justify-content: space-between; align-items: center">
      <div class="h-left">
        <i @click="setMenuFold(!menuFold)" :class="[menuFold?'el-icon-s-fold':'el-icon-s-unfold','menu-flag']"></i>
      </div>
      <div class="h-right" style="display:flex; justify-content: flex-end;align-items: center;">
        <div class="notice-c" title="查看新消息">
          <div class="newMsg"></div>
          <i class="el-icon-phone"/>
        </div>
        <div class="user-img-c">
          <img style="width:50px; height:50px" src="../../assets/hand.jpg" alt=""/>
        </div>
        <el-dropdown  trigger="click">
          <span class="el-dropdown-link">管理员<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'GlobalHeader',
  data() {
    return {
      arrowDown: false,
      arrowUp: true,
      flag: false,
      userName: 'admin'
    }
  },
  methods: {
    ...mapMutations(['setMenuFold'])
  },
  computed: {
    ...mapState(['menuFold'])
  }
}
</script>

<style scoped>
.menu-flag{
  font-size: 28px; cursor: pointer;
}
.el-icon-phone{
  font-size: 28px;
}
.user-img-c{
  margin: 0 27px;
}
.h-right{
  margin-right: 10px;
}
.el-dropdown-link{
  cursor: pointer;
}
</style>
