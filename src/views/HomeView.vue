<template>

  <banners />

  <photo-card />

  <products 
    :products="productsAction"
    title="Акции"
  />

  <products 
    :products="productsSeason"
    title="Сезонные"
  />

  <products 
    :products="productsPresent"
    title="Подарки"
  />


  <forum-card />

  <basket />

  <map-block />






</template>

<script>
import { mapGetters } from 'vuex'

import Banners from '@/components/Banners.vue'
import PhotoCard from '@/components/PhotoCard.vue'
import Products from '@/components/Products.vue'
import ForumCard from '@/components/ForumCard.vue'

import Basket from '@/components/Basket.vue'

import MapBlock from '@/components/MapBlock.vue'


export default {
  name: 'HomeView',
  components: {
    Banners,
    PhotoCard,
    Products,
    ForumCard,
    Basket,
    MapBlock
  },

  computed: {
    ...mapGetters({
      productsAction: 'products/productsAction',
      productsSeason: 'products/productsSeason',
      productsPresent: 'products/productsPresent'
    }),
  },

  mounted() {
    this.getProducts() 
  },

  methods: {
    async getProducts() {
      this.$store.dispatch('products/getProducts')
    }
  }

  

}
</script>

<style lang="scss">
@import '@/assets/css/variables.scss';


</style>
