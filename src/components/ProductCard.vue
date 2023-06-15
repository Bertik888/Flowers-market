<template>
  <div class="col-3">
    <div class="action-card__items"> 

      <div class="action-card__info">
        <div class="action-card__discount">
          -19%
        </div>
        <div class="action-card__top">
          TOP
        </div>
      </div>

      <div class="action-card__item">
        <div class="action-card__image">
          <img 
            src="@/assets/images/actions_card/red-roses.png" 
            alt="roses"
          >
        </div>
      </div>  
      
      <div class="action-card__stars">
        <img 
          src="@/assets/images/actions_card/star.svg" 
          alt="star"   
          class="action-card__star"           
        >
        <img 
          src="@/assets/images/actions_card/star.svg" 
          alt="star"   
          class="action-card__star"           
        >
        <img 
          src="@/assets/images/actions_card/star.svg" 
          alt="star"   
          class="action-card__star"           
        >
        <img 
          src="@/assets/images/actions_card/star.svg" 
          alt="star"   
          class="action-card__star"           
        >
        <img 
          src="@/assets/images/actions_card/star.svg" 
          alt="star"   
          class="action-card__star"           
        >
      </div>

      <div class="action-card__content">
        <div class="action-card__quantity">
          101 красная роза
        </div>
        <div class="action-card__price">
          3800 руб
        </div>
      </div>

      <div class="action-card__button">
        <button 
          @click="isOpenCard = true"        
          class="btn"
        >
          Заказать
        </button>
      </div>

      <div class="action-card__order">
        Быстрый заказ
      </div>

      <dialog-modal 
        :isOpen="isOpenCard"
        @hide="isOpenCard = false"
      >

        <product-item-modal 
          :item="item"
        />
      </dialog-modal>

    </div>      
  </div>
</template>

<script>
import DialogModal from './DialogModal.vue'
import ProductItemModal from './ProductItemModal'

  export default {
    name: 'ProductCard',
    components: {
      DialogModal,
      ProductItemModal
    },

    data() {
      return {
        isOpenCard: false
      }
    },

    props: {
      item: {
        type: Object
      }
    }
    
  }
</script>

<style lang="scss" scoped>

</style>