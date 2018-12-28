<template>
  <div id="app" class="full-width center-content">
    <img src="./assets/images/logo.png" alt="Vue Logo">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        message: 'Hello Vue.js'
      }
    },

    mounted() {
      console.log(this.message)
    }

  }
</script>

<style src="./assets/css/style.css"></style>
