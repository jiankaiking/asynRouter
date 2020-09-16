import service from '@/api'

export const mockTableMixin = {
  data() {
    return {
      tableData: [],
      page: 1,
      loading: false,
      size: 10,
      searchData: {}
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      if (!this.listUrl) {
        return this.$message.error('设置listurl属性')
      }
      this.loading = true
      service.get(this.listUrl, this.searchData)
        .then(res => {
          console.log(res)
          if (res.code === 200) {
            this.tableData = res.data
          }
        })
        .finally(() => {
          this.loading = false
        })
    },
    handleSizeChange(e) {
      this.size = e
      this.loadData()
    },
    handleCurrentChange(e) {
      this.page = e
      this.loadData()
    }
  }
}
