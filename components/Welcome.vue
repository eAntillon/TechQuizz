<template>
  <Card
    class="flex px-4 text-center justify-content-center align-items-center flex-column max-w-min p-0 z-4"
  >
    <template #content>
      <div class="flex flex-column justify-content-center align-items-center">
        <h1
          class="flex flex-column-reverse sm:flex-row mb-4 text-4xl underline align-items-center line-height-1 justify-content-center sm:text-7xl"
        >
          TechQuizzz
          <img
            alt="logo"
            src="../assets/icons/robot.svg"
            class="ml-2 h-4rem sm:h-7rem"
          />
        </h1>
        <p class="w-full sm:w-8 mb-4 sm:mb-6 text-xl text-center sm:text-2xl">
          Answers 10 questions about programming before the clock reaches to 0!
        </p>
        <div
          class="flex gap-2 justify-content-center sm:gap-4 flex-column sm:flex-row"
        >
          <Button
            label="New Game"
            class="w-full mr-0 sm:w-auto sm:mr-2 p-button-lg"
            icon="pi pi-arrow-up-right"
            iconPos="right"
            @click="$emit('newGame')"
          />
          <NuxtLink to="/leaderboard" class="no-underline">
            <Button
              label="Leaderboard"
              class="w-full sm:w-auto p-button-secondary p-button-lg"
              icon="pi pi-sort-numeric-down"
              iconPos="right"
            />
          </NuxtLink>
        </div>
      </div>
    </template>
  </Card>
</template>

<script lang="ts">
import Card from "primevue/card";
import Button from "primevue/button";
import Vue from "vue";

export default Vue.extend({
  components: {
    Button,
    Card,
  },
});
</script>

<style>
h1 {
  font-family: "Montserrat", sans-serif;
  color: #2b2c34;
}
p {
  font-family: "Hind Madurai", sans-serif;
  color: #2b2c34;
}


</style>
