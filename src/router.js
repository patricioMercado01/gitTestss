import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/reportes",
      name: "reportes",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function() {
        return import("./views/Reportes.vue");
      }
    },
    {
      path: "/administracion/docentes",
      name: "docentes",
      component: function() {
        return import("./views/administracion/Docentes.vue");
      }
    },
    {
      path: "/administracion/docentes/agregar",
      name: "agregar-docente",
      component: function() {
        return import("./views/administracion/AgregarDocente.vue");
      }
    },
    {
      path: "/administracion/estudiantes",
      name: "estudiantes",
      component: function() {
        return import("./views/administracion/Estudiantes.vue");
      }
    },
    {
      path: "/administracion/estudiantes/agregar",
      name: "agregar-estudiante",
      component: function() {
        return import("./views/administracion/AgregarEstudiante.vue");
      }
    },
    
    
  ]
});
