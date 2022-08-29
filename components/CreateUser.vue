<template>
  <Card>
    <template #title> Please enter your name: </template>
    <template #content>
      <InputText class="w-full mb-5" />
      <div class="flex fle-row gap-4">
        <Button
          label="Play"
          class="w-full p-button-success"
          icon="pi pi-check"
          iconPos="right"
        />
        <Button
          label="Cancel"
          class="w-full p-button-danger"
          icon="pi pi-times"
          iconPos="right"
          @click="$emit('cancelGame')"
        />
      </div>
    </template>
  </Card>
</template>
<script lang="ts">
import Vue from "vue";
import Card from "primevue/card";
import Button from "primevue/button/Button";
import InputText from "primevue/inputtext";


export default Vue.extend({
  name: "Input",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onChange(e: Event) {
      this.value = (e.target as HTMLInputElement).value;
    },
  },
  watch: {
    value(newValue) {
      this.$emit("input", newValue);
    },
  },
  components: {
    Card,
    InputText,
    Button,
  },
});
</script>
