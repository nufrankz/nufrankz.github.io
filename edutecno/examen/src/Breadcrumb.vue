<template>
  <div id="breadcrumb">
    {{ currentRouteName }}
  </div>
</template>

<script>
export default {
  currentRouteName() {
    return this.$route.name;
  },
};
</script>

<style></style>
