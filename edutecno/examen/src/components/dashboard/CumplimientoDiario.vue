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
        <h4>Cumplimiento Diario de Órdenes</h4>
        <div class="row">
          <div class="col-md-6 text-center">
            <p class="big strong">{{ firstKpi.entregadas }}</p>
            <p>Órdenes Entregadas</p>
          </div>
          <div class="col-md-6 text-center">
            <p class="big strong">{{ firstKpi.pendientes }}</p>
            <p>Órdenes Pendientes</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cumplimiento-diario",
  props: ["firstKpi"],
  computed: {
    percent() {
      let total = 0;
      if (this.firstKpi.pendientes > 0) {
        total = (this.firstKpi.pendientes * 100) / this.firstKpi.entregadas;
      }
      return total.toFixed();
    },
  },
};
</script>
