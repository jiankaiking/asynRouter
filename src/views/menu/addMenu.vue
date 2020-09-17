<template>
  <div class="main-table-contenner">
    <div class="search-form">
      <el-form :inline="true" size="mini" :model="searchData" class="demo-form-inline">
        <el-form-item label="审批人">
          <el-input v-model="searchData.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="searchData.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="loadData">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table-box" v-loading="loading">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="text" label="名称" width="180"></el-table-column>
        <el-table-column prop="path" label="路径" width="180"></el-table-column>
        <el-table-column prop="component" label="组件名称"></el-table-column>
        <el-table-column prop="name" label="name值"></el-table-column>
        <el-table-column prop="icon" label="icon">
          <template slot-scope="scope">
            <i :class="scope.row.icon"></i>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
          style="margin-top:20px;"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="page"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="sizes, prev, pager, next,jumper"
          :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mockTableMixin } from '@/mixins'

export default {
  name: 'AddMenu',
  mixins: [mockTableMixin],
  data() {
    return {
      listUrl: '/get/router/list',
      searchData: {}
    }
  }
}
</script>

<style scoped>

</style>
