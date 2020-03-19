<template>
  <b-container>
    <b-row class="py-3" align-v="center">
      <h1>Administración de estudiantes</h1>
      <div>
        <router-link to="estudiantes/agregar">
          <div>
            <b-button-group>
              <b-dropdown right split size="sm" class="mx-3" variant="success" text="Agregar">
                <b-dropdown-item>Importar desde Excel</b-dropdown-item>
                <b-dropdown-item>Importar desde .CSV</b-dropdown-item>
              </b-dropdown>
            </b-button-group>
          </div>
        </router-link>
      </div>
    </b-row>
    <b-container>
      <b-row class="mb-2">
        <div class="col-12">
          <b-card>
            <div class="row mx-1 mb-2">
              <b-dropdown text="Por Facultad" variant="outline-secondary">
                <b-dropdown-item href="#">Facultad de Ciencias Agropecuarias y Forestales</b-dropdown-item>
                <b-dropdown-item href="#">Facultad de Ciencias Jurídicas y Empresariales</b-dropdown-item>
                <b-dropdown-item href="#">Facultad de Educación, Ciencias Sociales y Humanidades</b-dropdown-item>
                <b-dropdown-item href="#">Facultad de Ingeniería y Ciencias</b-dropdown-item>
                <b-dropdown-item href="#">Facultad de Odontología</b-dropdown-item>
                <b-dropdown-item href="#">Facultad de Medicina</b-dropdown-item>
              </b-dropdown>
              <b-dropdown text="Por Carrera" variant="outline-secondary" class="mx-3">
                <b-dropdown-item href="#">Bioquímica</b-dropdown-item>
                <b-dropdown-item href="#">Ingeniería Civil</b-dropdown-item>
                <b-dropdown-item href="#">Ingeniería Civil Ambiental</b-dropdown-item>
                <b-dropdown-item href="#">Ingeniería Civil Biotecnología</b-dropdown-item>
                <b-dropdown-item href="#">Ingeniería Civil Eléctrica</b-dropdown-item>
                <b-dropdown-item href="#">Ingeniería Civil Electrónica</b-dropdown-item>
                <b-dropdown-item href="#">Ingeniería Civil Física</b-dropdown-item>
                <b-dropdown-item href="#">Ingeniería Civil Informática</b-dropdown-item>
                <b-dropdown-item href="#">Ingeniería Civil Matemática</b-dropdown-item>
                <b-dropdown-item href="#">Ingeniería Civil Mecánica</b-dropdown-item>
                <b-dropdown-item href="#">Ingeniería Civil Telemática</b-dropdown-item>
                <b-dropdown-item href="#">Ingeniería Civil Química</b-dropdown-item>
                <b-dropdown-item href="#">Ingeniería en Construcción</b-dropdown-item>
                <b-dropdown-item href="#">Ingeniería Informática</b-dropdown-item>
                <b-dropdown-item href="#">Ingeniería Civil Industrial Mención Bioprocesos</b-dropdown-item>
                <b-dropdown-item href="#">Ingeniería Civil Industrial Mención Informática</b-dropdown-item>
                <b-dropdown-item href="#">Ingeniería Civil Industrial Mención Mecánica</b-dropdown-item>
                <b-dropdown-item href="#">Plan Común Ingeniería Civil</b-dropdown-item>
              </b-dropdown>
            </div>

            <div class="row mx-1">
              <b-input-group class="mt-2">
                <b-form-input placeholder="Buscar por Rut o Nombres"></b-form-input>
                <b-input-group-append>
                  <b-button variant="outline-secondary">Buscar</b-button>
                </b-input-group-append>
              </b-input-group>
            </div>
          </b-card>
        </div>

        <div class="col-6"></div>
      </b-row>
    </b-container>
    <b-row>
      <b-table striped responsive borderless hover :items="items"></b-table>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          rut: "18.385.123-3",
          nombres_apellidos: "Diego García",
          correo: "d.garcia@ufromail.cl",
          carrera: "Ingeniería Informática"
        },
        {
          rut: "17.283.142-1",
          nombres_apellidos: "Sebastián Paredes",
          correo: "s.paredes@ufromail.cl",
          carrera: "Ingeniería Electrónica"
        },
        {
          rut: "20.183.423-7",
          nombres_apellidos: "Josefa Torres",
          correo: "j.torres@ufromail.cl",
          carrera: "Ingeniería Civil"
        },
        {
          rut: "19.582.684-2",
          nombres_apellidos: "Camilo Pérez",
          correo: "c.perez@ufromail.cl",
          carrera: "Ingeniería Informática"
        }
      ]
    };
  }
};
</script>