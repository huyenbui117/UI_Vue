<template>
  <v-app>
    <div class="home">
      <ExportData />
    </div>
  </v-app>
</template>

<script>
// @ is an alias to /src
import ExportData from "@/components/ExportData.vue";

export default {
  name: "Home",
  components: {
    ExportData,
  },
};
</script>
