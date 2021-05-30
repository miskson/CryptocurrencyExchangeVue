<template>
  <div id="app">    
      <Header></Header>
      <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  
  mounted: function () {
    this.generateId();
  },

  created: function () {
    if (this.$route.path != '/cryptoExchangeMain') {
      this.$router.push('/cryptoExchangeMain');
    }
  },

  methods: {
    generateId: function () {
      this.$store.commit('generateId');
    }
  }
}
</script>

<style>
  @import "nullstyles";
  @font-face {
    font-family: "Lato-Regular";
    src: url("./assets/fonts/Lato-Regular.ttf");
  }

  body{
    font-family: "Lato-Regular";
}
</style>
