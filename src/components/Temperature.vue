<template>
  <div class="project">
    <v-card>
      <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">Aktuelle Temperatur: {{ temperature[0].t }}°</h3>
        </div>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
import sensorApi from "@/services/SensorApi";
export default {
  data() {
    return {
      temperature: []
    };
  },
  mounted() {
    sensorApi
      .getData()
      .then(response => {
        this.temperature = response;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>