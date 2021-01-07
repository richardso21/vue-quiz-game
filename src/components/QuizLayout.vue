<template>
  <div class="question-container">
    <pre v-highlightjs="question.content"><code class="javascript"></code></pre>
    <br>
    <div class="question-choices">
      <div
        class="question-choice"
        v-for="(choice, index) in question.choices"
        :key="index"
      >
        <input type="radio" name="radio" v-model="selected" :value="index" />
        {{ choice }}
      </div>
    </div>
    <br>
    <button @click="checkAnswer">Submit</button>
  </div>
</template>

<script>
export default {
  name: "QuizLayout",
  data() {
    return {
      selected: undefined,
      code: "",
    };
  },
  props: {
    question: Object,
  },
  methods: {
    checkAnswer: function () {
      if (this.selected === undefined) {
        alert("Please choose an answer before submitting.");
        return;
      }
      this.$emit("nextQ", this.selected === this.question.answer);
      this.selected = undefined;
    },
  },
};
</script>

<style>
@import url("../../node_modules/highlight.js/styles/a11y-dark.css");
button {
  font-size: 2rem;
}
</style>