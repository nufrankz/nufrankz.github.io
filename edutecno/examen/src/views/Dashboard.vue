<template>
  <div id="dashboard" class="view">
    <div class="container">
      <div class="row breadcrumb">
        <div class="col">
          <!-- Breadcrumb. -->
          <a>Home</a>
        </div>
      </div>
      <div class="row pb-4">
        <div class="col">
          <Jumbotron />
        </div>
      </div>
      <!-- Indicadores cumplimiento. -->
      <div class="row pb-4">
        <div class="col-md-6 d-flex">
          <CumplimientoDiario :firstKpi="firstKpi" />
        </div>
        <div class="col-md-6 d-flex">
          <OrdenesAtrasadas :secondKpi="secondKpi" />
        </div>
      </div>
      <!-- Tablas Últimas. -->
      <div class="row">
        <div class="col-md-6 d-flex">
          <UltimasOrdenes :lastOrders="lastOrders" />
        </div>
        <div class="col-md-6 d-flex">
          <UltimasDevoluciones :lastReturns="lastReturns" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Jumbotron from "@/components/dashboard/Jumbotron.vue";
import CumplimientoDiario from "@/components/dashboard/CumplimientoDiario.vue";
import OrdenesAtrasadas from "@/components/dashboard/OrdenesAtrasadas.vue";
import UltimasOrdenes from "@/components/dashboard/UltimasOrdenes.vue";
import UltimasDevoluciones from "@/components/dashboard/UltimasDevoluciones.vue";
export default {
  name: "dashboard",
  components: {
    Jumbotron,
    CumplimientoDiario,
    OrdenesAtrasadas,
    UltimasOrdenes,
    UltimasDevoluciones,
  },
  data() {
    return {
      firstKpi: [],
      secondKpi: [],
      lastOrders: [],
      lastReturns: [],
    };
  },
  methods: {
    fetchDashboard() {
      axios
        .get("http://localhost:8080/api/dashboard.json")
        .then((res) => {
          console.log("ultimas_devoluciones", res.data);
          this.firstKpi = res.data.kpis[0];
          this.secondKpi = res.data.kpis[1];
          this.lastOrders = res.data.utimas_ordenes;
          this.lastReturns = res.data["ultimas_devoluciones:"];
        })
        .catch((err) => {
          console.log("error dashboard", err.data);
        });
    },
  },
  created() {
    this.fetchDashboard();
  },
};
</script>
