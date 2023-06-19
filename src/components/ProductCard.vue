<template>
  <div class="product-card__items"> 

    <div class="product-card__info">
      <div class="product-card__discount">
        -{{ item.sale}}%
      </div>
      <div class="product-card__top">
        {{ item.isTop}}
      </div>
    </div>

    <div class="product-card__item">
      <div class="product-card__image">
        <img 
          :src="require(`@/assets/images/actions_card/${item.images}`)" 
          :alt="item.name"
        >
      </div>
    </div>  
    
    <div class="product-card__stars">
      {{ item.rating }}
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

    <div class="product-card__content">
      <div class="product-card__quantity">
        {{ item.name }}
      </div>
      <div class="product-card__price">
        {{ item.price }} {{ item.stock }}
      </div>
    </div>

    <div class="product-card__button">
      <button 
        @click="isOpenCard = true"        
        class="btn"
      >
        Заказать
      </button>
    </div>

    <div class="product-card__order">
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
@import '@/assets/css/variables.scss';

.product-card {

  &__items {
    margin-top: 36px;
    min-height: 543px;
    border: 1px solid $purple;
    padding: 6px 20px;
  }

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: $light-white;
  }

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;    
    background: $light-white;
  }

  &__discount {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px dashed $red;
    border-radius: 50%;
    width: 56px;
    height: 56px;
  }

  &__top {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid $purple;
    border-radius: 50%;
    width: 56px;
    height: 56px;
    background: rgba(157, 117, 140, 0.39);
  }

  &__content {
    display: flex;
    justify-content: space-between;
    margin-top: 26px;
    font-size: 18px;
  }

  &__price {
    color: $purple;
    font-weight: 700;
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
  }

  &__order {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: $font-family-euclid;
    margin-top: 16px;
    color: $light-grey;
    cursor: pointer;
  }
}

</style>