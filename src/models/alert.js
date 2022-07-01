import Alert from "@/components/Alert.vue";
// 定義引入
const alertPlugin = {};

alertPlugin.install = function (Vue) {
  const instance = Vue.extend(Alert);
  Vue.prototype.$alert = function (
    title = "",
    message = "",
    type = "error"
  ) {
    // 創建根元素
    let dom = document.createElement("div");
    document.querySelector("body").appendChild(dom);
    let vm = new instance({
      propsData: {
        type: type,
        title: title.toString(),
        message: message,
      },
    }).$mount(dom);
    setTimeout(() => {
        vm.$el.parentNode.removeChild(vm.$el)
    }, 1000)
  };
};

export default alertPlugin;
