<template>
  <div class="component">
    <div class="jumbotron">
      <div class="jumbotron__box"><p>Vitrina</p></div>
      <hr class="my-4" />
      <h3>Bienvenido.</h3>
      <p>
        Bienvenido al Sistema de Ordenes e Inventario de ClassicModels.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Jumbotron",
};
</script>

<style lang="scss">
.jumbotron {
  width: 100%;
  &__box {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
    background-color: #ddd;
    color: #999;
    font-size: 2em;
  }
}
</style>
