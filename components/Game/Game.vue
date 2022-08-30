<template>
  <div>
    <div v-if="!showAnswer">
      <!-- Question -->
      <CurrentQuestion :question="currentQuestion" :questionNumber="currentQuestionIndex+1" :next="nextQuestion" />
    </div>
    <div v-else>
      <!-- Question Answer -->
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import CurrentQuestion from "./CurrentQuestion.vue";
export default Vue.extend({
  props: {
    questions: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  beforeMount() {
    this.currentQuestion = this.questions[this.currentQuestionIndex];
  },
  data() {
    return {
      currentQuestionIndex: 0,
      currentQuestion: this.questions[this.currentQuestionIndex],
      showAnswer: false,
      selectedAnswer: null,
    };
  },
  methods: {
    
    nextQuestion() {
      this.currentQuestionIndex++;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.selectedAnswer = null;
      this.showAnswer = false;
      this.timeLeft = 30;
    },
    
  },
  components: { CurrentQuestion },
});
</script>
