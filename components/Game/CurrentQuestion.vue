<template>
  <div>
    <h2>{{ question.question }}</h2>
    <p>{{ timeLeft }}</p>
    <pre>{{ question.answers }}</pre>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    question: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    console.log("current:", this.question);
  },
  data() {
    return {
      selectedAnswer: null,
      timeLeft: 30,
    };
  },
  methods: {
    startTimer() {
      this.timeLeft = 30;
      this.timer = setInterval(() => {
        this.timeLeft--;
        if (this.timeLeft === 0) {
          this.selectedAnswer = null;
        }
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.timer);
    },
  },
});
</script>
