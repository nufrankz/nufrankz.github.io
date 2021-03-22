<template>
  <div class="component">
    <div class="row">
      <h4>Últimas Órdenes</h4>
      <table class="table table-sm table-striped">
        <thead>
          <tr>
            <th scope="col">Nº Orden</th>
            <th scope="col">Cliente</th>
            <th scope="col">Fecha Entrega</th>
            <th scope="col">Estado</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in lastOrders" :key="order.num_orden">
            <th scope="row">{{ order.num_orden }}</th>
            <td>{{ order.cliente }}</td>
            <td>{{ order.fecha_entrega }}</td>
            <td>{{ order.estado }}</td>
            <td>
              <button type="button" class="btn btn-sm btn-primary">
                Ver Detalle
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ultimas-ordenes",
  props: ["lastOrders"],
};
</script>
