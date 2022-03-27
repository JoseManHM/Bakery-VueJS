import { createStore } from "vuex";

export default createStore({
  state: {
    //Almacenar variables o datos
    sabores: 20,
    selecSabores: 0,
    decoraciones: 20,
    selectDeco: 0,
    pedido: [],
    array: [],
    numArray: 0,
  },
  getters: {
    //Traer información del estado
  },
  mutations: {
    //Modificar el estado, sin codigo asincrono, no se pueden llamar fuera del estado
    enviarSabores(state) {
      state.sabores -= state.selecSabores;
      state.selecSabores = 0;
    },
    enviarDecoracion(state) {
      state.decoraciones -= state.selectDeco;
      state.selectDeco = 0;
    },
    aumentarSabor(state) {
      state.selecSabores++;
    },
    aumentarDecoracion(state) {
      state.selectDeco++;
    },
    enviarNombre(state, nombre) {
      state.pedido[0] = nombre;
    },
    enviarApellidos(state, apellidos) {
      state.pedido[1] = apellidos;
    },
    enviarTelefono(state, telefono) {
      state.pedido[2] = telefono;
    },
    enviarEmail(state, email) {
      state.pedido[3] = email;
    },
    enviarDesc(state, desc) {
      state.pedido[4] = desc;
    },
    crearArrayDesc(state) {
      state.array[state.numArray] = [
        state.pedido[0],
        state.pedido[1],
        state.pedido[2],
        state.pedido[3],
        state.pedido[4],
      ];
    },
    aumentarArray(state) {
      state.numArray++;
    },
  },
  actions: {
    //Modifican el estado con codigo asincrono
    enviarNombre({ commit }, nombre) {
      commit("enviarNombre", nombre);
    },
    enviarApellidos({ commit }, apellidos) {
      commit("enviarApellidos", apellidos);
    },
    enviarTelefono({ commit }, telefono) {
      commit("enviarTelefono", telefono);
    },
    enviarEmail({ commit }, email) {
      commit("enviarEmail", email);
    },
    enviarDesc({ commit }, desc) {
      commit("enviarDesc", desc);
    },
  },
  modules: {
    //Definir si el estado es solo para algunos modulos del proyecto
  },
});
