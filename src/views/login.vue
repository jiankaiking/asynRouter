<template>
  <div class="login-connner">
    <div class="login-bg"></div>
    <el-form :model="ruleForm" size="medium" content status-icon :rules="rules" ref="ruleForm" class="login-form">
      <el-form-item prop="username">
        <el-input prefix-icon="el-icon-user" v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item  prop="password">
        <el-input prefix-icon="el-icon-lock" show-password type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%;" @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import service from '@/api'
export default {
  name: 'Login',
  data() {
    return {
      ruleForm: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          service.post('/login', { ...this.ruleForm }).then(res => {
            if (res.code === 200) {
              localStorage.setItem('token', res.data.token)
              window.location.reload()
            } else {
              this.$message.error(res.msg)
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
  .login-connner{
    display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;
  }
  .login-bg{
    height: 100%; width: 100%;
    position: absolute;
    background-size:cover;
    background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600271558754&di=bba0ff3385d5b9a97bd25a8269834ea7&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2020-02-25%2F5e54ceb6e2b0d.png") no-repeat center 0;
  }
  .login-bg::before{
    position: absolute; content: ""; background: rgba(0,0,0,.7); height: 100%; width: 100%;
  }
.login-form{
  border-radius: 8px;
  width: 300px; position: absolute; right: 50%; margin-right: -200px; padding:55px 35px 45px;
}
</style>
