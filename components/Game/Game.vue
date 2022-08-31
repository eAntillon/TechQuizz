<template>
  <div>
    <div v-if="!showTotalScore">
      <!-- Question -->
      <CurrentQuestion
        :question="currentQuestion"
        :questionNumber="currentQuestionIndex + 1"
        @next="nextQuestion"
      />
    </div>
    <div v-else>
      <!-- display score -->
      <FinalScore :score="totalScore" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import CurrentQuestion from "./CurrentQuestion.vue";
import FinalScore from "./FinalScore.vue";
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
      currentQuestion: this.questions[this.currentQuestionIndex] || {},
      showTotalScore: false,
      totalScore: 0,
    };
  },
  methods: {
    nextQuestion(newScore) {
      if (newScore) {
        this.totalScore += newScore;
      }
      this.$store.commit("user/setScore", this.totalScore);
      this.currentQuestionIndex += 1;
      if (this.currentQuestionIndex === this.questions.length) {
        this.showTotalScore = true;
      } else {
        this.currentQuestion = this.questions[this.currentQuestionIndex];
      }
    },
  },
  components: { CurrentQuestion, FinalScore },
});
</script>
