<template>
  <div>
    <img src="../assets/JS.png" alt="" />
    <h1>Welcome to the JavaScript Quiz Game!</h1>
    <p>
      <i>How well do you really know JavaScript?</i>
    </p>
    <p>
      In the following questions, choose the answer choice that best represents
      the code snippet's output.
    </p>
    <br />

    <router-link to="/Quiz" tag="button" id="startButton"
      >Start the Quiz!</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
img {
  height: 15rem;
}
h1 {
  font-size: 2.5rem;
}
p {
  font-size: 1.75rem;
}
#startButton {
  font-size: 1.25rem;
}
</style>