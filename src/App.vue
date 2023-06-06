<template>
  <div class="container">
    <!-- Тут находится компонент меню -->
    <header-block />

    <router-view/>
    <!-- Тут находится компонент footer -->
    
  </div>

  <footer-block />
  
</template>

<script>
import HeaderBlock from '@/components/HeaderBlock.vue'
import FooterBlock from '@/components/FooterBlock.vue'


export default {
  name: 'App',

  components: {
    HeaderBlock,
    FooterBlock
  }
  
}
</script>

<style lang="scss">




/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

/* nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
} */
</style>
