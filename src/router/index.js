import VueRouter from "vue-router";
import Login from "../views/Login";
import Home from "@/views/Home";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/login", name: "Login", component: Login },
];

const router = new VueRouter({
  mode: "history",
  routes: routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    next();
  } else {
    let token = localStorage.getItem("token");
    if (token == null || token == "") {
      // next("/login");
      next({path: '/login'})
    } else {
      next();
    }
  }
});

export default router;
