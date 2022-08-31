<template>
  <div class="w-8 p-3">
    <Card>
      <template #title>
        <div class="flex align-items-center justify-content-between">
          <div class="flex align-items-center">
            <img
              src="../assets/icons/leaderboard.svg"
              class="w-6rem mr-3"
              alt="leaderboard-svg"
            />
            <h2>Top players:</h2>
          </div>
          <NuxtLink to="/" class="no-underline">
            <Button label="Go back" icon="pi pi-arrow-left" iconPos="left" />
          </NuxtLink>
        </div>
      </template>
      <template #content>
        <DataTable :value="scores" responsiveLayout="scroll">
          <Column field="playername" header="Name"></Column>
          <Column field="score" header="Score"></Column>
          <Column field="date" header="Date"></Column>
        </DataTable>
      </template>
    </Card>
  </div>
</template>

<script lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Vue from "vue";
import Card from "primevue/card/Card";
import Button from "primevue/button/Button";
export default Vue.extend({
  async asyncData({ $supabase }) {
    const { data, error } = await $supabase
      .from("scores")
      .select("*")
      .limit(20)
      .order("score", { ascending: false });
    const scores = data?.map((score) => {
      return {
        playername: score.playername,
        score: score.score,
        date:
          new Date(score.created_at).toLocaleDateString() +
          " " +
          new Date(score.created_at).toLocaleTimeString(),
      };
    });
    return {
      scores,
    };
  },
  components: {
    DataTable,
    Column,
    Card,
    Button,
  },
});
</script>
