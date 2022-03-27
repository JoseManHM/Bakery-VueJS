<template>
  <article>
    <div class="secciones">
      <p class="title-form">Elige tu sabor</p>
      <hr />
      <form action="">
        <label class="inputSabor"
          ><input
            type="checkbox"
            id="chbxChoc"
            @click="$store.commit('aumentarSabor')"
          />Chocolate</label
        ><br /><img
          class="imgSabor"
          src="../assets/chocolate.jpg"
          alt="chocolate"
        /><br />
        <label class="inputSabor"
          ><input
            type="checkbox"
            id="chbxFres"
            @click="$store.commit('aumentarSabor')"
          />Fresa</label
        ><br /><img
          class="imgSabor"
          src="../assets/fresa.jpg"
          alt="fresa"
        /><br />
        <label class="inputSabor"
          ><input
            type="checkbox"
            id="chbxCafe"
            @click="$store.commit('aumentarSabor')"
          />Cafe</label
        ><br /><img
          class="imgSabor"
          src="../assets/cafe.jpg"
          alt="cafe"
        /><br />
        <label class="inputSabor"
          ><input
            type="checkbox"
            id="chbxVain"
            @click="$store.commit('aumentarSabor')"
          />Vainilla</label
        ><br /><img
          class="imgSabor"
          src="../assets/vainilla.jpg"
          alt="vainilla"
        /><br />
        <label class="inputSabor"
          ><input
            type="checkbox"
            id="chbxLimo"
            @click="$store.commit('aumentarSabor')"
          />Limón</label
        ><br /><img
          class="imgSabor"
          src="../assets/limon.jpg"
          alt="limon"
        /><br />
        <label class="inputSabor"
          ><input
            type="checkbox"
            id="chbxImpo"
            @click="$store.commit('aumentarSabor')"
          />Imposible</label
        ><br /><img
          class="imgSabor"
          src="../assets/imposible.jpg"
          alt="imposible"
        /><br />
        <label for="selectTamaño"
          >Selecciona el tamaño (una decoración incluida, por decoración extra
          se agregan 40.00 MXN al precio total)</label
        ><br /><br />
        <select name="selectTamaño" id="selectTamaño">
          <option value="Chico 125.00 MXN">Chico 125.00 MXN</option>
          <option value="Mediano 175.00 MXN">Mediano 175.00 MXN</option>
          <option value="Grande 250.00 MXN">Grande 250.00 MXN</option>
          <option value="Extra grande 350.00 MXN">
            Extra grande 350.00 MXN
          </option></select
        ><br /><br />
        <input
          type="button"
          value="Enviar Selección"
          @click="$store.commit('enviarSabores')"
        /><br /><br />
      </form>
    </div>
    <div class="secciones">
      <p class="title-form">Elige tu decoración</p>
      <hr />
      <form action="">
        <label class="deco"
          ><input
            type="checkbox"
            id="chbxDeco1"
            @click="$store.commit('aumentarDecoracion')"
          />Decoración 3D</label
        ><br /><img
          class="imgSabor"
          src="../assets/deco3D.jpg"
          alt="decoración 3D"
        /><br /><br /><br /><br />
        <label class="deco"
          ><input
            type="checkbox"
            id="chbxDeco2"
            @click="$store.commit('aumentarDecoracion')"
          />Decoración Geométrica</label
        ><br /><img
          class="imgSabor"
          src="../assets/decoGeometrica.jpg"
          alt="decoración geométrica"
        /><br /><br /><br /><br />
        <label class="deco"
          ><input
            type="checkbox"
            id="chbxDeco3"
            @click="$store.commit('aumentarDecoracion')"
          />Decoración Floral</label
        ><br /><img
          class="imgSabor"
          src="../assets/decoFloral.jpg"
          alt="decoración floral"
        /><br /><br /><br /><br />
        <label class="deco"
          ><input
            type="checkbox"
            id="chbxDeco4"
            @click="$store.commit('aumentarDecoracion')"
          />Decoración semidesnuda o naked</label
        ><br /><img
          class="imgSabor"
          src="../assets/decoNaked.jpg"
          alt="decoración neked"
        /><br /><br /><br /><br />
        <label class="deco"
          ><input
            type="checkbox"
            id="chbxDeco5"
            @click="$store.commit('aumentarDecoracion')"
          />Decoración Drip Cakes</label
        ><br /><img
          class="imgSabor"
          src="../assets//decoDripCakes.jpg"
          alt="decoración drip cakes"
        /><br /><br /><br />
        <input
          type="button"
          value="Enviar Selección"
          @click="$store.commit('enviarDecoracion')"
        /><br /><br />
      </form>
    </div>
    <div class="secciones">
      <p class="title-form">Llena tus datos de contacto</p>
      <hr />
      <form id="contacto">
        <label for="name" class="labels">Nombre</label><br />
        <input type="text" name="name" id="name" v-model="enviarNombre" /><br />
        <label for="lastname">Apellidos</label><br />
        <input
          type="text"
          name="lastname"
          id="lastname"
          v-model="enviarApellidos"
        /><br />
        <label for="telefono">Telefono</label><br />
        <input
          type="text"
          name="telefono"
          id="telefono"
          v-model="enviarTelefono"
        /><br />
        <label for="email">Correo Electronico</label><br />
        <input
          type="email"
          name="email"
          id="email"
          v-model="enviarEmail"
        /><br />
        <label for="descripcion">Datos adicionales al pastel</label><br />
        <textarea
          name="descripcion"
          id="descripcion"
          cols="40"
          rows="10"
          v-model="enviarDesc"
        ></textarea
        ><br /><br />
        <input
          type="button"
          value="Enviar"
          @click="
            $store.commit('crearArrayDesc'), $store.commit('aumentarArray')
          "
        />
      </form>
    </div>
  </article>
</template>
<script>
export default {
  name: "choiceSabor",
  computed: {
    enviarNombre: {
      set(nombre) {
        this.$store.dispatch("enviarNombre", nombre);
      },
    },
    enviarApellidos: {
      set(apellidos) {
        this.$store.dispatch("enviarApellidos", apellidos);
      },
    },
    enviarTelefono: {
      set(telefono) {
        this.$store.dispatch("enviarTelefono", telefono);
      },
    },
    enviarEmail: {
      set(email) {
        this.$store.dispatch("enviarEmail", email);
      },
    },
    enviarDesc: {
      set(desc) {
        this.$store.dispatch("enviarDesc", desc);
      },
    },
  },
};
</script>
<style>
article {
  width: 100%;
  margin: 0px auto;
}
article .secciones {
  float: left;
  width: 29%;
  height: 1250px;
  margin-right: 33px;
  padding: 5px;
  background-color: rgba(34, 32, 32, 0.637);
  box-shadow: 2px 2px 1px rgb(58, 57, 57);
}
.title-form {
  text-align: center;
  font-size: 20px;
}
.title-flavor {
  margin-bottom: 0px;
  font-size: 18px;
}
.imgSabor {
  width: 250px;
  height: 150px;
  margin-left: 10px;
}
input[type="text"],
input[type="email"] {
  width: 90%;
  padding: 5px;
  margin-bottom: 10px;
}
</style>
