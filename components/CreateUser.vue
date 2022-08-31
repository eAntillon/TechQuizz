<template>
  <Card>
    <template #title> Please enter your name: </template>
    <template #content>
      <div class="flex mb-3 field flex-column">
        <InputText
          v-model="value"
          :class="{ 'p-invalid': nameExists || errorLength }"
          id="username"
          aria-describedby="username"
          @keyup.enter="validateLength"
        />
        <small id="username" class="p-error" v-show="errorLength"
          >The username must be be longer than 3 characters.</small
        >
        <small id="username" class="p-error" v-show="nameExists"
          >Username is not available.</small
        >
      </div>
      <div class="flex gap-4 fle-row">
        <Button
          label="Play"
          class="w-full p-button-success"
          icon="pi pi-check"
          iconPos="right"
          :disabled="comparingName"
          @click="startGame"
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
import { mapMutations } from "vuex";
export default Vue.extend({
  name: "Input",
  data() {
    return {
      value: "",
      nameExists: false,
      errorLength: false,
      comparingName: false,
    };
  },
  watch: {
    async value(newValue) {
      if (newValue.length > 3) {
        this.comparingName = true;
        this.nameExists = await this.validateName(newValue);
        this.comparingName = false;
        return;
      }
      this.errorLength = false;
      this.nameExists = false;
    },
  },

  methods: {
    async validateName(name: string): Promise<boolean> {
      const { data, error } = await this.$supabase
        .from("scores")
        .select("playername")
        .eq("playername", name);
      if (data && data.length > 0) {
        return true;
      }
      return false;
    },
    validateLength() {
      if (this.value.length > 3) {
        this.errorLength = false;
        return;
      }
      this.errorLength = true;
    },
    startGame() {
      if (this.value.length < 4) {
        this.errorLength = true;
        return;
      }
      this.errorLength = false;
      if (!this.nameExists) {
        this.$store.commit("user/setNewGame", {
          username: this.value,
          score: 0,
          inGame: true,
        });
        this.$router.push("/play");
      }
    },
  },
  components: {
    Card,
    InputText,
    Button,
  },
});
</script>
