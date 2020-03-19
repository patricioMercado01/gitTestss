<template>
  <b-container>
    <b-row class="py-3" align-v="center">
      <h1>Agregar nuevo docente</h1>
    </b-row>

    <div class="col-6">
      <b-card>
        <label for="rut">Rut:</label>
        <b-form-input
          id="rut"
          v-model="rut"
          placeholder="Ingrese rut"
          :state="rutState"
          aria-describedby="rut-feedback"
          class="mb-4"
        ></b-form-input>

        <label for="nombres">Nombres:</label>
        <b-form-input
          id="nombres"
          v-model="nombres"
          placeholder="Ingrese nombres"
          :state="nombresState"
          aria-describedby="nombres-feedback"
          class="mb-4"
        ></b-form-input>

        <label for="apellidos">Apellidos:</label>
        <b-form-input
          id="apellidos"
          v-model="apellidos"
          placeholder="Ingrese apellidos"
          :state="apellidosState"
          aria-describedby="apellidos-feedback"
          class="mb-4"
        ></b-form-input>
        <label for="correo">Correo:</label>
        <b-form-input
          id="correo"
          v-model="correo"
          placeholder="Ingrese correo"
          aria-describedby="correo-feedback"
          :state="correoState"
          class="mb-4"
        ></b-form-input>

        <b-form-invalid-feedback id="rut-feedback">Ingrese mínimo 8 caracteres</b-form-invalid-feedback>
        <b-form-invalid-feedback id="nombres-feedback">Ingrese mínimo 8 caracteres</b-form-invalid-feedback>
        <b-form-invalid-feedback id="apellidos-feedback">Ingrese mínimo 8 caracteres</b-form-invalid-feedback>
        <b-form-invalid-feedback id="correo-feedback">Ingrese mínimo 8 caracteres</b-form-invalid-feedback>

        <div class="col-9">
          <b-row align-v="center">
            <label for="facultad">Facultad:</label>
            <b-dropdown
              class="ml-3"
              id="facultad"
              text="Seleccione facultad"
              variant="outline-secondary"
            >
              <b-dropdown-item href="#">Facultad de Ciencias Agropecuarias y Forestales</b-dropdown-item>
              <b-dropdown-item href="#">Facultad de Ciencias Jurídicas y Empresariales</b-dropdown-item>
              <b-dropdown-item href="#">Facultad de Educación, Ciencias Sociales y Humanidades</b-dropdown-item>
              <b-dropdown-item href="#">Facultad de Ingeniería y Ciencias</b-dropdown-item>
              <b-dropdown-item href="#">Facultad de Odontología</b-dropdown-item>
              <b-dropdown-item href="#">Facultad de Medicina</b-dropdown-item>
            </b-dropdown>
          </b-row>
        </div>
        <br>
        
        <div>
          <b-form-group label="Inscribir asignaturas:">
            <b-form-tags v-model="value" no-outer-focus class="mb-2">
              <template v-slot="{ tags, disabled, addTag, removeTag }">
                <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
                  <li v-for="tag in tags" :key="tag" class="list-inline-item">
                    <b-form-tag
                      @remove="removeTag(tag)"
                      :title="tag"
                      :disabled="disabled"
                      variant="info"
                    >{{ tag }}</b-form-tag>
                  </li>
                </ul>

                <b-dropdown size="sm" variant="outline-secondary" block menu-class="w-100">
                  <template v-slot:button-content>
                    <b-icon icon="tag-fill"></b-icon>Buscar asignaturas
                  </template>
                  <b-dropdown-form @submit.stop.prevent="() => {}">
                    <b-form-group
                      label-for="tag-search-input"
                      label="Buscar por código o nombre"
                      label-cols-md="auto"
                      class="mb-0"
                      label-size="sm"
                      :description="searchDesc"
                      :disabled="disabled"
                    >
                      <b-form-input
                        v-model="search"
                        id="tag-search-input"
                        type="search"
                        size="sm"
                        autocomplete="off"
                      ></b-form-input>
                    </b-form-group>
                  </b-dropdown-form>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item-button
                    v-for="option in availableOptions"
                    :key="option"
                    @click="onOptionClick({ option, addTag })"
                  >{{ option }}</b-dropdown-item-button>
                  <b-dropdown-text
                    v-if="availableOptions.length === 0"
                  >No hay asignaturas para inscribir</b-dropdown-text>
                </b-dropdown>
              </template>
            </b-form-tags>
          </b-form-group>
        </div>
        <router-link to="./">
          <b-button class="mx-3 my-4" variant="success">Agregar</b-button>
        </router-link>
      </b-card>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      options: [
        "ICC410 - Ingeniería de Software",
        "ICC457 - Metodología de la investigación",
        "ICC454 - Proyecto de desarrollo de software",
        "ICC495 - Gestión de proyecto de software",
        "ICC362 - Sistemas de Información"
      ],
      search: "",
      value: []
    };
  },
  computed: {
    criteria() {
      // Compute the search criteria
      return this.search.trim().toLowerCase();
    },
    availableOptions() {
      const criteria = this.criteria;
      // Filter out already selected options
      const options = this.options.filter(
        opt => this.value.indexOf(opt) === -1
      );
      if (criteria) {
        // Show only options that match criteria
        return options.filter(opt => opt.toLowerCase().indexOf(criteria) > -1);
      }
      // Show all options available
      return options;
    },
    searchDesc() {
      if (this.criteria && this.availableOptions.length === 0) {
        return "No se han encontrado coincidencias";
      }
      return "";
    }
  },
  methods: {
    onOptionClick({ option, addTag }) {
      addTag(option);
      this.search = "";
    }
  }
};
</script>