<template>
  <div class="container">
    <div class="logos">
      <h1 class="title">Pastelería El Refugio</h1>
      <img
        src="../assets/4dee38b80b2e4924b5db828d853ab784.png"
        alt="Logo"
        id="logo"
      />
      <div class="clearfix"></div>
      <div class="text-top">
        <p>
          El cliente es nuestra obsesión y nuestra única finalidad es ofrecerle
          el mejor servicio para que de boca en boca nos hagamos una reputación
          y llegar al éxito.
        </p>
        <br />
        <p>Hagamos lo mejor para crecer y ayudar a crecer a otros.</p>
      </div>
      <div class="clearfix"></div>
      <div class="inputs">
        <admin-choices></admin-choices>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import adminChoices from "../components/AdminChoices.vue";
export default {
  name: "PasteleroView",
  components: {
    adminChoices
  },
};
</script>
<style>
.container {
    width: 100%;
  }
  .logos{
    width: 80%;
    margin: 10px auto;
  }
  .clearfix{
    clear: both;
  }
  .title{
    width: 60%;
    float: right;
    text-align: center;
    line-height: 130px;
    letter-spacing: 2px;
    font-size: 60px;
    text-shadow: 2px 1px 1px gray;
  }
  #logo {
    width: 20%;
    float: left;
    margin-left: 15px;
  }
  .text-top p{
    width: 100%;
    margin: 0px auto;
    text-align: center;
    font-size: 25px;
    letter-spacing: 1px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.inputs{
  width: 100%;
}
</style>
