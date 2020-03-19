<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="primary">
      <b-container>
        
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">Asistencia UFRO</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <b-nav-item :to="{name: 'home'}" exact>Inicio</b-nav-item>
            <b-nav-item :to="{name: 'reportes'}">Reportes</b-nav-item>
            <b-nav-item-dropdown text="Administración">
              <b-dropdown-item :to="{name: 'docentes'}">Docentes</b-dropdown-item>
              <b-dropdown-item :to="{name: 'estudiantes'}">Estudiantes</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Pablo" right>
            <b-dropdown-item href="#">Ajustes</b-dropdown-item>
            <b-dropdown-item href="#">Ayuda</b-dropdown-item>
            <b-dropdown-item href="#">Cerrar sesión</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <router-view />
  </div>
</template>