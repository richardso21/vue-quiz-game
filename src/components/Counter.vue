<template>
  <div>
    <h6>Question {{ i + 1 }}</h6>
    <p><i>{{c}} Correct</i></p>
    <p><i>{{t}} Total</i></p>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: {
    i: Number,
    c: Number,
    t: Number,
  },
};
</script>

<style lang="scss" scoped>
h6 {
  margin: 0;
}
p {
  font-size: 1rem;
}
</style>