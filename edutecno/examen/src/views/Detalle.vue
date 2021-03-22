<template>
  <div id="detalle" class="view">
    <div class="container">
      <div class="row breadcrumb">
        <div class="col">
          <!-- Breadcrumb. -->
          <router-link to="/">Home</router-link> »
          <router-link to="/monitor">Monitor de Órdenes</router-link> »
          <a>Detalle Orden</a>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h2>Detalle Orden #{{ orderNumber }}</h2>
        </div>
      </div>
      <!-- Tabs detalle orden. -->
      <TabsDetalleOrden :order="order" :client="client" :products="products" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TabsDetalleOrden from "@/components/detalle/TabsDetalleOrden";
export default {
  name: "Detalle",
  props: ["orderNumber"],
  components: {
    TabsDetalleOrden,
  },
  data() {
    return {
      order: {},
      client: {},
      products: [],
    };
  },
  methods: {
    fetchDetails() {
      axios
        .get("http://localhost:8080/api/detalle_orden.json")
        .then((res) => {
          console.log("detalle_orden.json", res.data);
          this.order = res.data.orden;
          this.client = res.data.cliente;
          this.products = res.data.productos;
        })
        .catch((err) => {
          console.log("error detalle", err.data);
        });
    },
  },
  created() {
    this.fetchDetails();
  },
};
</script>
