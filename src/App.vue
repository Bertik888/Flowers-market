<template>
  <div class="container">

    <header-block />

    <router-view/>
    
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
  },

  mounted() {
    this.getCategories() 
  },

  methods: {
    async getCategories() {
      this.$store.dispatch('categories/getCategories')
    }
  }

  
}
</script>

<style lang="scss">
@import '@/assets/css/variables.scss';

@font-face{
  font-family: 'Museo Sans Cyrl';
  src: url(@/assets/fonts/museosanscyrl300.ttf) format('ttf');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face{
  font-family: 'Euclid Circular B';
  src: url(@/assets/fonts/EuclidCircularB400.ttf) format('ttf');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face{
  font-family: 'Museo Sans Cyrl';
  src: url(@/assets/fonts/museosanscyrl700.ttf) format('ttf');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: $font-family-museo;
  font-weight: 300;
  font-size: 16px;
  line-height: 18px;
  color: $black;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $white;


  background-image: url(@/assets/images/background/flowers-bg-left.png), 
  url(@/assets/images/background/flowers-bg-right.png);
  background-repeat-x: no-repeat;
  // background-position: left, right;
  // background-position-x: left, right;
  // background-position-y: center, center;
  // background-position-y: 0, 0;
  background-position: -250px, calc(100% + 250px);
}

.container {
  width: 100%;
  max-width: 1920px;

  padding-right: 245px; // $gutter-x - можно ли так задать ? или все же это для отсупов м/ду столбцами?
  padding-left: 245px;  
  margin-right: auto;
  margin-left: auto;
}

.btn {
  border: none;
  outline: none;
  box-shadow: none;
  width: 220px;
  height: 63px;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 22px;
  cursor: pointer;
  background: $purple;
  color: white;
  font-weight: 700;
}

/* .row {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;

  & > * {
    flex-shrink: 0;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }
}

.col-1 {
  flex: 0 0 auto;
  width: calc(100% / (12/1));
}

.col-2 {
  flex: 0 0 auto;
  width: calc(100% / (12/2));
}

.col-3 {
  flex: 0 0 auto;
  width: calc(100% / (12/3));
}

.col-4 {
  flex: 0 0 auto;
  width: calc(100% / (12/4));
}

.col-5 {
  flex: 0 0 auto;
  width: calc(100% / (12/5));
}

.col-6 {
  flex: 0 0 auto;
  width: calc(100% / (12/6));
}

.col-7 {
  flex: 0 0 auto;
  width: calc(100% / (12/7));
}

.col-8 {
  flex: 0 0 auto;
  width: calc(100% / (12/8));
}

.col-9 {
  flex: 0 0 auto;
  width: calc(100% / (12/9));
}

.col-10 {
  flex: 0 0 auto;
  width: calc(100% / (12/10));
}

.col-11 {
  flex: 0 0 auto;
  width: calc(100% / (12/11));
}

.col-12 {
  flex: 0 0 auto;
  width: calc(100% / (12/12));
} */
</style>
