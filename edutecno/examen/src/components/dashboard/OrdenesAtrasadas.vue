<template>
  <div class="component">
    <div class="row w-100">
      <div
        class="col-md-4 d-flex flex-column align-items-center justify-content-center"
      >
        <p class="big">{{ percent }}%</p>
        <a href="#">Ver detalles</a>
      </div>
      <div class="col-md-8">
        <h4>Órdenes Atrasadas Jornada</h4>
        <div class="row">
          <div class="col-md-6 text-center">
            <p class="big strong">{{ secondKpi.totales }}</p>
            <p>Órdenes Totales</p>
          </div>
          <div class="col-md-6 text-center">
            <p class="big strong">{{ secondKpi.atrasadas }}</p>
            <p>Órdenes Atrasadas</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ordenes-atrasadas",
  props: ["secondKpi"],
  computed: {
    percent() {
      let total = 0;
      if (this.secondKpi.atrasadas > 0) {
        total = (this.secondKpi.atrasadas * 100) / this.secondKpi.totales;
      }
      return total.toFixed();
    },
  },
};
</script>
