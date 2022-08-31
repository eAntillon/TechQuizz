<template>
  <div class="flex flex-column align-items-center justify-content-center">
    <h3 class="-mb-2">
      Name: <span class="text-primary">{{ $store.state.user.username }}</span>
    </h3>
    <div class="flex flex-column-reverse mt-4 md:mt-2 md:flex-row mb-3 align-items-center justify-content-center">
      <h2 class="mr-2 text-3xl md:text-4xl text-center">
        You scored <span class="text-primary">{{ totalScore }}</span> points!
      </h2>
      <img
        src="../../assets/icons/confetti.svg"
        alt="confetti"
        class="w-6rem"
      />
    </div>
    <Button class="p-button-primary p-button-lg" @click="$router.push('/')">
      Play again
    </Button>
  </div>
</template>

<script lang="ts">
import Button from "primevue/button/Button";
import Vue from "vue";

export default Vue.extend({
  props: {
    score: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  async mounted() {
    const { data, error } = await this.$supabase.from("scores").insert([
      {
        playername: this.$store.state.user.username,
        score: this.score,
      },
    ]);
  },
  data() {
    return {
      totalScore: this.score,
    };
  },
  components: {
    Button,
  },
});
</script>
