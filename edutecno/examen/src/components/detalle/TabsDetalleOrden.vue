<template>
  <div class="component details-tab">
    <div class="row w-100">
      <div class="col">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="nav-link active"
              id="nav-general-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-general"
              type="button"
              role="tab"
              aria-controls="nav-general"
              aria-selected="true"
            >
              General
            </button>
            <button
              class="nav-link"
              id="nav-datos-cliente-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-datos-cliente"
              type="button"
              role="tab"
              aria-controls="nav-datos-cliente"
              aria-selected="false"
            >
              Datos Cliente
            </button>
            <button
              class="nav-link"
              id="nav-productos-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-productos"
              type="button"
              role="tab"
              aria-controls="nav-productos"
              aria-selected="false"
            >
              Productos
            </button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-general"
            role="tabpanel"
            aria-labelledby="nav-general-tab"
          >
            <div class="row w-50">
              <div class="col-md-6">Nº Orden</div>
              <div class="col-md-6">{{ order.num_orden }}</div>
            </div>
            <div class="row w-50">
              <div class="col-md-6">Monto</div>
              <div class="col-md-6">{{ order.monto }}</div>
            </div>
            <div class="row w-50">
              <div class="col-md-6">Cant. Productos</div>
              <div class="col-md-6">{{ order.cant_productos }}</div>
            </div>
            <div class="row w-50">
              <div class="col-md-6">Fecha Entrega</div>
              <div class="col-md-6">{{ order.fecha_entrega }}</div>
            </div>
            <div class="row w-50">
              <div class="col-md-6">Vendedor</div>
              <div class="col-md-6">{{ order.vendedor }}</div>
            </div>
            <div class="row w-50">
              <div class="col-md-6">Estado</div>
              <div class="col-md-6">{{ order.estado }}</div>
            </div>
            <div class="row w-50">
              <div class="col-md-6">Avance Preparación</div>
              <div class="col-md-6">
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
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="nav-datos-cliente"
            role="tabpanel"
            aria-labelledby="nav-datos-cliente-tab"
          >
            <div class="row w-50">
              <div class="col-md-6">Nombre</div>
              <div class="col-md-6">{{ client.nombre }}</div>
            </div>
            <div class="row w-50">
              <div class="col-md-6">RUT</div>
              <div class="col-md-6">{{ client.rut_n }}-{{ client.rut_dv }}</div>
            </div>
            <div class="row w-50">
              <div class="col-md-6">Dirección Entrega</div>
              <div class="col-md-6">{{ client.direccion_entrega }}</div>
            </div>
            <div class="row w-50">
              <div class="col-md-6">Contacto</div>
              <div class="col-md-6">{{ client.contacto }}</div>
            </div>
            <div class="row w-50">
              <div class="col-md-6">Fono</div>
              <div class="col-md-6">{{ client.fono }}</div>
            </div>
            <div class="row w-50">
              <div class="col-md-6">Email</div>
              <div class="col-md-6">{{ client.email }}</div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="nav-productos"
            role="tabpanel"
            aria-labelledby="nav-productos-tab"
          >
            <div class="row">
              <div class="col">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Cod. Producto</th>
                      <th scope="col">Descripción</th>
                      <th scope="col">Precio Unit.</th>
                      <th scope="col">Cant. Pedido</th>
                      <th scope="col">Cant. Pickeado</th>
                      <th scope="col">Cumplimiento</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="product in products" :key="product.cod_prod">
                      <th scope="row">{{ product.cod_prod }}</th>
                      <td>{{ product.descripcion }}</td>
                      <td>{{ product.precio_unit }}</td>
                      <td>{{ product.cant_pedido }}</td>
                      <td>{{ product.cant_pickeado }}</td>
                      <td>
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            :style="{
                              width:
                                accomplishmentPercent(
                                  product.cant_pickeado,
                                  product.cant_pedido
                                ) + '%',
                            }"
                            :aria-valuenow="
                              accomplishmentPercent(
                                product.cant_pickeado,
                                product.cant_pedido
                              )
                            "
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                      <td
                        v-html="
                          accomplishmentIcon(
                            product.cant_pickeado,
                            product.cant_pedido
                          )
                        "
                      ></td>
                    </tr>
                    <tr></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabsDetalleOrden",
  // props: ["order", "client", "products"],
  props: {
    order: {
      type: Object,
      required: true,
    },
    client: {
      type: Object,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
  },
  methods: {
    percent(percent) {
      return percent * 100;
    },
    accomplishmentPercent(picked, requested) {
      let percent = 0;
      if (picked > 0) {
        percent = (picked * 100) / requested;
      }
      return percent.toFixed();
    },
    accomplishmentIcon(picked, requested) {
      let icon;
      if (picked >= requested) {
        icon = '<i class="bi bi-check-circle-fill text-success"></i>';
      } else {
        icon = '<i class="bi bi-x-circle-fill text-danger"></i>';
      }
      return icon;
    },
  },
};
</script>
