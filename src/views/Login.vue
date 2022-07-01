<template>
  <div>
    <div class="container">
      <el-form label-width="100px" :model="form" class="login-form" :rules="rules" ref="loginForm">
        <el-form-item :label="$t('user.account')" prop="account" class="login-row">
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item :label="$t('user.password')" prop="password" class="login-row">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onLogin">Login</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import UserApi from "/src/api/user";

export default {
  name: "Login",
  data() {
    return {
      form: {
        account: "admin",
        password: "password",
      },
      rules: {
        account: [
          { required: true, message: "請輸入帳號", trigger: "blur" },
          { min: 4, max: 12, message: "4 ~ 12個字元", trigger: "blur" },
          {
            pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
            message: "中英文數字組合",
            trigger: "submit",
          },
        ],
        password: [
          { required: true, message: "請輸入密碼", trigger: "blur" },
          { min: 8, max: 12, message: "8 ~ 12個字元", trigger: "blur" },
          {
            pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
            message: "中英文數字組合",
            trigger: "submit",
          },
        ],
      },
    };
  },
  watch: {},
  methods: {
    async onLogin() {
      try {
        // TODO: status
        // TODO: logs
        const { data } = await UserApi.login(this.form);
        await this.setLocalStorage(data.result.token);
        this.$router.push({ path: "/" });
      } catch (error) {
        await this.setLocalStorage("");
        this.$alert(error);
      } finally {
      }
    },
    async setLocalStorage(token) {
      localStorage.setItem("token", token);
    },
  },
};
</script>

<style scoped>
.container {
  width: 90%;
  height: 100%;
}

.login-form {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.box {
  margin-top: 2%;
}
</style>
