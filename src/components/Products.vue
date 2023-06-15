<template>
  <div class="action-card">
    <h1>Акции</h1>
    <div class="row">
      <div 
        v-for="item in products"
        :key="item.id"
        class="col-3"      
      >

        <product-card 
          :item="item"
        />
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
            <button class="btn">
              Заказать
            </button>
          </div>

          <div class="action-card__order">
            Быстрый заказ
          </div>

        </div>      
      </div>

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
                src="@/assets/images/actions_card/pink-roses.png" 
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
            <button class="btn">
              Заказать
            </button>
          </div>

          <div class="action-card__order">
            Быстрый заказ
          </div>

        </div>      
      </div>

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
                src="@/assets/images/actions_card/love-roses.png" 
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
            <button class="btn">
              Заказать
            </button>
          </div>

          <div class="action-card__order">
            Быстрый заказ
          </div>

        </div>      
      </div>

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
                src="@/assets/images/actions_card/basket-flowers.png" 
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
            <button class="btn">
              Заказать
            </button>
          </div>

          <div class="action-card__order">
            Быстрый заказ
          </div>

        </div>      
      </div>

      

      <product-card />
      <product-card />
      <product-card />
      <product-card />

      
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
      }
    }
  }
</script>

<style lang="scss">
@import '@/assets/css/variables.scss';

.action-card {

  h1 {                   
    font-size: 48px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    margin-top: 115px;
  }

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
    margin-top: 16px;
    color: $light-grey;
    cursor: pointer;
  }
}

</style>

