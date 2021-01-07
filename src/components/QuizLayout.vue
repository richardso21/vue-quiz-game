<template>
  <div class="question-container">
    <pre class="code-block text-left"><code>{{ question.content }}</code></pre>
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
    <button @click="checkAnswer">Submit</button>
  </div>
</template>

<script>
export default {
  name: "QuizLayout",
  data() {
    return {
      selected: undefined,
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
</style>