<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "app",
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
h1 {
  font-size: 1.25rem;
}
h2 {
  padding-bottom: 1em;
}
th,
td {
  vertical-align: middle;
}
a {
  &:hover {
    cursor: pointer;
  }
}
.breadcrumb {
  font-size: 0.85em;
  a {
    color: #212529;
    &:last-child {
      font-weight: 700;
      &:hover {
        cursor: auto;
      }
    }
  }
}
.table {
  min-width: 100%;
  max-width: 100%;
  width: auto;
  font-size: 0.85em;
}
.view {
  padding: 1em 0 4em;
}
.component {
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  padding: 1.75em;
  border-radius: 0.15em;
  h4 {
    font-size: 1rem;
    font-weight: 700;
    padding-bottom: 1em;
  }
  .big {
    font-size: 2em;
  }
  .strong {
    font-weight: 700;
  }
}
.vdp-datepicker {
  width: 100%;
  input {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
}
.details-tab {
  .tab-content {
    padding: 1em 0;
    .col-md-6 {
      padding-bottom: 1em;
      &:first-child {
        font-weight: 700;
      }
    }
  }
  .table {
    font-size: 1rem;
  }
}
</style>
