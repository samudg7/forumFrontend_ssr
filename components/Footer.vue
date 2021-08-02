<template>
  <v-Footer app bottom fixed padless>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong>Test Sync Lab</strong>
    </v-col>
  </v-Footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped></style>
