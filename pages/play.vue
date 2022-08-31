<template>
  <div class="flex w-11 sm:w-8 md:w-6 xl:w-4 justify-content-center alignt-items-center">
    <Card class="max-w-max">
      <template #content>
        <div v-if="$fetchState.pending" class="w-12">
          <i class="pi pi-spin pi-spinner" style="font-size: 4rem"></i>
        </div>
        <Game v-else :questions="questions" />
      </template>
    </Card>
  </div>
</template>

<script lang="ts">
import Card from "primevue/card/Card";
import Vue from "vue";
import Game from "../components/Game/Game.vue";
export default Vue.extend({
  data() {
    return {
      questions: [],
    };
  },
  beforeCreate() {
    if (!this.$store.state.user.inGame) {
      this.$router.push("/");
    }
  },
  fetchOnServer: true,
  async fetch() {
    const request = await fetch(
      `${process.env.quizz_api_url}?apiKey=${process.env.api_key}&limit=10`,
      { method: "GET" }
    );
    this.questions = await request.json();
  },
  components: { Game, Card },
});
</script>
