<template>
  <div>
    <h1>HJello</h1>
    <pre>
      {{ scores }}
    </pre>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  async asyncData({ $supabase }) {
    const { data, error } = await $supabase.from("scores").select("*");
    // console.log(
    //   await $supabase.from("scores").insert([
    //     {
    //       playername: "Hola",
    //       score: 10,
    //     },
    //   ])
    // );
    return {
      scores: { data, error },
    };
  },
});
</script>
