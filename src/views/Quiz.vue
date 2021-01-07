<template>
  <div class="Quiz">
    <Counter class="Counter" :i="qIndex" :c="qCorrect" :t="quizArr.length" />
    <QuizLayout @nextQ="nextQ" :question="quizArr[qIndex]" />
  </div>
</template>

<script>
import Counter from "../components/Counter";
import QuizLayout from "../components/QuizLayout";
import quizArr from "@/assets/questions.json";

export default {
  name: "Quiz",
  components: {
    Counter,
    QuizLayout,
  },
  data() {
    return {
      qIndex: 0,
      qCorrect: 0,
      quizArr: quizArr,
    };
  },
  methods: {
    nextQ: function (isCorrect) {
      if (isCorrect) this.qCorrect++;

      if (this.qIndex == this.quizArr.length - 1) {
        // show results page if quiz is completed
        const correct = this.qCorrect;
        const total = this.quizArr.length;
        this.$router.push({ name: "Results", params: { correct, total } });
      } else {
        // update quiz if there are more questions
        this.qIndex++;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.Quiz {
  font-size: 2rem;
}
.Counter {
  float: right;
}
</style>