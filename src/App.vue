<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style>
*{
  margin: 0; padding: 0;
}
#app,html{
  height: 100%;
}
body{
  height: 100%;
}

.el-menu{
  border-right-width: 0 !important;
}
#app .el-container,.el-menu{
  min-height: 100%;
}
</style>
