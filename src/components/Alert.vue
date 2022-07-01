<template>
<div class="alert-layout">
  <el-alert :title="title" :type="type" :description="message" show-icon>
    </el-alert></div>
  
</template>

<script>
export default {
    name: "Alert",
    props: {
        type: {
            type: String,
            default: 'error'
        },
        title: {
            type: String,
            default: 'test'
        },
        message: {
            type: String,
            default: 'message'
        },
    },
};
</script>

<style scoped>
.alert-layout{
    width: 50%;
    height: 60px;
    position: absolute;
    left: 25%;
    top: 2%;
    z-index: 9999;
}
.alert-layout >*{
    height: 100%
}
</style>
