<template>
  <div class="component">
    <div class="row w-100 flex-column">
      <div class="col">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Nº Orden</th>
              <th scope="col">Cliente</th>
              <th scope="col" class="text-center">Monto Orden</th>
              <th scope="col" class="text-center">Cant. Productos</th>
              <th scope="col" class="text-center">Fecha Entrega</th>
              <th scope="col" class="text-center">Avance Preparación</th>
              <th scope="col" class="text-center">Estado</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orderList" :key="order.num_orden">
              <th scope="row">{{ order.num_orden }}</th>
              <td>{{ order.cliente }}</td>
              <td class="text-center">{{ order.monto }}</td>
              <td class="text-center">{{ order.cant_productos }}</td>
              <td class="text-center">{{ order.fecha_entrega | moment }}</td>
              <td>
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    :style="{ width: percent(order.avance_preparacion) + '%' }"
                    :aria-valuenow="percent(order.avance_preparacion)"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </td>
              <td class="text-center">{{ order.estado }}</td>
              <td v-html="accomplishmentIcon(order.avance_preparacion)"></td>
              <td>
                <button
                  type="button"
                  class="btn btn-sm btn-primary"
                  @click="redirect(order.num_orden)"
                >
                  Ver Detalle
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link">«</a>
            </li>
            <li
              v-for="page in pagedResult.total"
              :key="page.total"
              class="page-item"
            >
              <a class="page-link">{{ page }}</a>
            </li>
            <li class="page-item"><a class="page-link">»</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "ListadoOrdenes",
  props: ["orderList", "pagedResult"],
  methods: {
    percent(percent) {
      return percent * 100;
    },
    redirect(id) {
      this.$router.push({ path: `/detalle/${id}` });
    },
    accomplishmentIcon(percent) {
      let icon;
      if (percent < 1) {
        icon = '<i class="bi bi-x-circle-fill text-danger"></i>';
      } else {
        icon = '<i class="bi bi-check-circle-fill text-success"></i>';
      }
      return icon;
    },
  },
  filters: {
    moment: function(date) {
      return moment(date).format("DD/MM/YYYY");
    },
  },
};
</script>
