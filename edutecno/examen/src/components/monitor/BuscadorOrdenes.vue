<template>
  <div class="component">
    <div class="row w-100">
      <form>
        <div class="row">
          <div class="form-group col-md-2">
            <label class="pb-2" for="monitor-oficina">Oficina</label>
            <select class="form-control" id="monitor-oficina">
              <option
                v-for="office in officeList"
                :key="office.id"
                :value="office.id"
                >{{ office.name }}</option
              >
            </select>
          </div>

          <div class="form-group col-md-3">
            <label class="pb-2" for="monitor-estado">Estado</label>
            <select class="form-control" id="monitor-estado">
              <option
                v-for="state in stateList"
                :key="state.id"
                :value="state.id"
                >{{ state.name }}</option
              >
            </select>
          </div>
          <div class="form-group col-md-3">
            <label class="pb-2">Fecha de Entrega</label>
            <datepicker></datepicker>
          </div>
          <div class="form-group col-md-3 d-flex align-items-end">
            <datepicker></datepicker>
          </div>
          <div class="form-group col-md-1 d-flex">
            <button class="btn btn-primary mt-auto">
              Buscar
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Datepicker from "vue-moment-datepicker";
export default {
  name: "BuscadorOrdenes",
  props: ["officeList", "stateList"],
  components: {
    Datepicker,
  },
};
</script>
