<template>
  <div>
    <h1>{{ message }}</h1>
    <p>You got {{ $route.params.correct }} out of {{ $route.params.total }} questions correct.</p>
    <router-link to="/quiz" tag="button">Try again?</router-link>
  </div>
</template>

<script>
export default {
  name: "Results",
  data() {
    return {
      message: "",
    };
  },
  mounted() {
    console.log(this.$route.params.correct);
    const C = this.$route.params.correct;
    if (C < 5) {
      this.message = "Yikes!";
    } else if (C < 7) {
      this.message = "Nice!";
    } else if (C == 8) {
      this.message = "Awesome!";
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  font-size: 2rem;
}
</style>