<template>
  <div class="products-card">
    <h1>{{ title }}</h1>
    <div class="row">
      <div 
        v-for="item in products"
        :key="item.id"
        class="col-3"      
      >

        <product-card 
          :item="item"
        />
             
      </div>

      
    </div>

  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'


  export default {
    name: 'Products',
    components: {
      ProductCard
    }, 
    
    props: {
      products: {
        type: Array,
        default: []
      },
      title: {
        type: String,
        default: ''

      }
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.products-card {
  
  h1 {                   
    font-size: 48px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    margin-top: 115px;
  }
}

</style>

