<template>
  <div class="relative">
    <h4 class="mb-1">Question {{ questionNumber }}:</h4>
    <h2 class="mb-5">{{ question.question }}</h2>
    <div class="flex clock align-items-center">
      <p
        class="px-2 text-center text-white bg-green-400 border-2 clock-time border-600 border-round-sm"
        :class="{ 'bg-yellow-300': timeLeft < 10, 'bg-red-300': timeLeft < 4 }"
      >
        {{ timeLeft }}
      </p>
      <img src="~/assets/icons/clock.svg" alt="clock-svg" class="w-5rem" />
    </div>

    <div class="flex gap-3 flex-column">
      <Button
        v-for="i in answers"
        :key="i.index"
        :label="i.answer"
        class="p-button-info"
        @click="selectAnswer(i.index)"
        :class="{
          'p-button-success': correctAnswer.includes(i.index) && showAnswer,
          'p-button-danger':
            !correctAnswer.includes(i.index) &&
            showAnswer &&
            i.index === selectedAnswer,
        }"
        :disabled="showAnswer && i.index !== selectedAnswer"
      />
    </div>
  </div>
</template>

<script>
import Button from "primevue/button/Button";
import Vue from "vue";
import { getCorrectAnswers } from "../../utils/helpers";
export default Vue.extend({
  props: {
    question: {
      type: Object,
      required: true,
    },
    questionNumber: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    this.startTimer();
  },
  watch: {
    // timer reaches 0
    timeLeft() {
      if (this.timeLeft <= 0) {
        this.showAnswer = true;
        this.stopTimer();
      }
    },
  },
  data() {
    return {
      answers: Object.values(this.question.answers)
        .filter((i) => i !== null)
        .map((v, i) => {
          if (v) {
            return {
              answer: v,
              index: i,
            };
          }
        }),
      selectedAnswer: null,
      correctAnswer: getCorrectAnswers(this.question.correct_answers),
      timeLeft: 30,
      timeStart: false,
      showAnswer: false,
    };
  },
  methods: {
    selectAnswer(ans) {
      if (this.showAnswer) return;
      this.selectedAnswer = ans;
      this.showAnswer = true;
      this.stopTimer();
      // check(this.selectedAnswer, this.question.correct_answers);
    },
    startTimer() {
      if (this.timeStart) {
        return;
      }
      this.timeLeft = 15;
      this.timeStart = true;
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
    nextQuestion() {
      this.$emit("next");
    },
  },
  components: { Button },
});
</script>

<style>
.clock {
  position: absolute;
  top: -4.5rem;
  right: -2rem;
}
.clock-time {
  font-size: 2rem;
  width: 3.4rem;
  font-weight: bold;
}
</style>
