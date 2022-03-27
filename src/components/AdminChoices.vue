<template>
  <article>
    <div class="secciones">
      <p class="title-form">Administra tus sabores</p>
      <hr />
      <h4>A continuación tienes un reporte de los sabores disponibles</h4>
      <hr />
      <h5 class="items-report">
        Sabores disponibles: {{ $store.state.sabores }}
      </h5>
    </div>
    <div class="secciones">
      <p class="title-form">Administra tus decoraciones</p>
      <hr />
      <h4>A continuación tienes un reporte de las decoraciones disponibles</h4>
      <hr />
      <h5 class="items-report">
        Decoraciones disponibles: {{ $store.state.decoraciones }}
      </h5>
    </div>
    <div class="secciones">
      <p class="title-form">Lista de pedidos</p>
      <hr />
      <h4>
        A continuación tienes un reporte de los últimos pedidos realizados
      </h4>
      <hr />
      <div class="list-pedido" v-for="cliente in $store.state.array">
        <div v-for="data in cliente">
          <p class="content-pedido">{{ data }}</p>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  name: "adminChoices",
};
</script>
<style scoped>
article {
  width: 100%;
  margin: 0px auto;
}
article .secciones {
  float: left;
  width: 29%;
  height: auto;
  margin-right: 33px;
  padding: 5px;
  background-color: rgba(34, 32, 32, 0.637);
  box-shadow: 2px 2px 1px rgb(58, 57, 57);
}
.title-form {
  font-size: 20px;
}
.items-report {
  width: 70%;
  text-align: left;
  font-size: 20px;
  margin-left: 10px;
}
.list-pedido {
  width: 90%;
  margin: 0px auto;
  padding: 5px;
  text-align: left;
  margin-top: 5px;
  background-color: rgba(53, 50, 50, 0.623);
  box-shadow: 1px 1px 3px rgb(105, 100, 100);
}
.content-pedido {
  color: rgb(255, 255, 255);
  font-size: 15px;
  margin-top: 1px;
  margin-bottom: 1px;
  margin-left: 5px;
}
</style>
