<template>
  <div>
    <div class="container">
      <el-form label-width="100px" :model="form" class="login-form">
        <el-form-item :label="$t('user.account')" class="login-row">
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item :label="$t('user.password')" class="login-row">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onLogin">Login</el-button>
        </el-form-item>
      </el-form>
      <div class="box">
        <el-button type="primary" @click="getUsers">getUsers</el-button>
      </div>
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
    };
  },
  methods: {
    async onLogin() {
      try {
        // TODO: account validation
        // TODO: status
        // TODO: logs
        const { data } = await UserApi.login(this.form);
        console.log(data);
        localStorage.setItem("token", data.result.token);
      } catch (error) {
        console.log(error);
        localStorage.setItem("token", "");
      }
    },
    async getUsers() {
      try {
        const reuslt = await UserApi.getUsers(this.form);
        console.log(reuslt);
      } catch (error) {
        console.log(error);
      }
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
