<template>
  <div class="lang-block">
    <el-select v-model="$i18n.locale" placeholder="Select">
      <el-option
        v-for="(lang, i) in langs"
        :key="`lang-${i}`"
        :label="lang"
        :value="lang"
      >
      </el-option>
    </el-select>
  </div>
</template>
<script>
export default {
  name: "SwitchLocale",
  data() {
    return { langs: ["en", "tw"] };
  },
};
</script>
<style scoped>
.lang-block {
  float: left;
  top: 2%;
  width: 100px;
  margin-left: 10%;
}
</style>
