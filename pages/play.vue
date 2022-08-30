<template>
  <div>
    <Card>
      <template #content>
        <p v-if="$fetchState.pending">Fetching mountains...</p>
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
      console.log("not in game", this.$store.state.user.inGame);
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
    console.log(this.questions)
  },
  components: { Game, Card },
});
</script>
