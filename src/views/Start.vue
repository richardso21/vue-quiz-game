<template>
  <div>
    <h1>Welcome to the JavaScript Quiz Game!</h1>
    <p><i>How well do you really know JavaScript?</i></p>
    <br>
    <router-link to="/Quiz" tag="button" id="startButton">Testing</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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