<template>
  <div class="header-block">
    <SwitchLanguageVue />
    <div>
      <el-button
        size="medium"
        type="warning"
        plain
        @click="handleLogout"
        v-if="!isLoginPage"
      >
        {{ $t("action.logout") }}
      </el-button>
    </div>
  </div>
</template>

<script>
import SwitchLanguageVue from "./SwitchLanguage.vue";
export default {
  components: {
    SwitchLanguageVue,
  },
  computed: {
    isLoginPage() {
      return this.$route.path == "/login";
    },
  },
  methods: {
    handleLogout() {
      localStorage.setItem("token", "");
      this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style scoped>
.header-block {
  margin-left: 10%;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2%;
}
</style>
