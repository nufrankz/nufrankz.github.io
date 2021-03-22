import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";
// Importar store para verificar auth en router.beforeEach.
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    alias: ["/login"],
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    alias: ["/home"],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"),
    meta: {
      auth: true,
    },
  },
  {
    path: "/monitor",
    name: "Monitor",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "monitor" */ "../views/Monitor.vue"),
    meta: {
      auth: true,
    },
  },
  {
    path: "/detalle/:orderNumber",
    name: "Detalle",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "detalle" */ "../views/Detalle.vue"),
    // Props define que si la ruta recibirá parámetros.
    props: true,
    meta: {
      auth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

//Verificar auth en cada cambio de ruta.
router.beforeEach((to, from, next) => {
  let user = store.state.token;
  console.log("ruta beforeEach hacia", to);
  // Detectar rutas privadas.
  let privateRule = to.matched.some((record) => record.meta.auth);
  if (privateRule && !user) {
    // Usuario no logueado que accede a página privada.
    next("/login");
  } else if (!privateRule && user) {
    // Usuario logueado y accede a página libre.
    next();
  } else {
    next();
  }
});

export default router;
