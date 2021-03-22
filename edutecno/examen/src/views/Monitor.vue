<template>
  <div id="monitor-ordenes" class="view">
    <div class="container">
      <div class="row breadcrumb">
        <div class="col">
          <!-- Breadcrumb. -->
          <a href="/">Home</a> »
          <a>Monitor de Órdenes</a>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h2>Monitor de Órdenes</h2>
        </div>
      </div>
      <!-- Buscador órdenes. -->
      <div class="row pb-4">
        <div class="col">
          <BuscadorOrdenes :officeList="officeList" :stateList="stateList" />
        </div>
      </div>
      <!-- Listado órdenes. -->
      <div class="row pb-4">
        <div class="col">
          <ListadoOrdenes :orderList="orderList" :pagedResult="pagedResult" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BuscadorOrdenes from "@/components/monitor/BuscadorOrdenes";
import ListadoOrdenes from "@/components/monitor/ListadoOrdenes";
export default {
  name: "MonitorOrdenes",
  components: {
    BuscadorOrdenes,
    ListadoOrdenes,
  },
  data() {
    return {
      officeList: [],
      stateList: [],
      orderList: [],
      pagedResult: [],
    };
  },
  methods: {
    fetchOffices() {
      axios.get("http://localhost:8080/api/oficinas.json").then((res) => {
        console.log("oficinas.json", res.data);
        this.officeList = res.data.oficinas;
      });
    },
    fetchStates() {
      axios.get("http://localhost:8080/api/estados.json").then((res) => {
        console.log("estados.json", res.data);
        this.stateList = res.data.estados;
      });
    },
    fetchOrderList() {
      axios
        .get("http://localhost:8080/api/ordenes.json")
        .then((res) => {
          console.log("ordenes.json", res.data);
          this.orderList = res.data["ordenes:"];
          this.pagedResult = res.data.pagedResult;
        })
        .catch((err) => {
          console.log("error monitor", err.data);
        });
    },
  },
  created() {
    this.fetchOffices();
    this.fetchStates();
    this.fetchOrderList();
  },
};
</script>
