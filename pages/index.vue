<template>
  <div>
    <div
      class="container w-full h-full p-4 sm:p-0 fadeindown animation-duration-400"
    >
      <Welcome v-if="!playGame" @newGame="play"  />
      <CreateUser v-else @cancelGame="cancel" />
    </div>
  </div>
</template>

<script lang="ts">
import Card from "primevue/card";
import Button from "primevue/button";
import Vue from "vue";
import Welcome from "~/components/Welcome.vue";
import CreateUser from "~/components/CreateUser.vue";
export default Vue.extend({
  name: "IndexPage",
  components: {
    Button,
    Card,
    Welcome,
    CreateUser,
  },
  data() {
    return {
      playGame: false,
    };
  },
  methods: {
    play() {
      this.playGame = true;
    },
    cancel() {
      this.playGame = false;
    },
  },
});
</script>

<style scoped></style>
