<template>
  <div class="action-card">
    <h1>Акции</h1>
    <div class="row">
      <div class="col-3">
        <div class="action-card__items"> 

          <div class="action-card__item">
            <div class="action-card__discount">
              -19%
            </div>
            <div class="action-card__top">
              TOP
            </div>

            <img 
              src="@/assets/images/actions_card/red-roses.png" 
              alt="red-roses"   
              class="action-card__image"           
            >

            <div class="action-card__stars">
              <img 
                src="@/assets/images/actions_card/star.svg" 
                alt="red-roses"   
                class="action-card__star"           
              >
              <img 
                src="@/assets/images/actions_card/star.svg" 
                alt="red-roses"   
                class="action-card__star"           
              >
              <img 
                src="@/assets/images/actions_card/star.svg" 
                alt="red-roses"   
                class="action-card__star"           
              >
              <img 
                src="@/assets/images/actions_card/star.svg" 
                alt="red-roses"   
                class="action-card__star"           
              >
              <img 
                src="@/assets/images/actions_card/star.svg" 
                alt="red-roses"   
                class="action-card__star"           
              >
            </div>            
          </div>

          <div class="action-card__content">
              101 красная роза
            </div>
            <div class="action-card__price">
              3800 руб
            </div>

            <button class="action-card__button">
              Заказать
            </button>

            <div class="action-card__fast_order">
              Быстрый заказ
            </div>
                
        </div>

        


      </div>
      
    </div>

  </div>
</template>

<script>
  export default {
    name: 'ActionCard'    
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.action-card {

  h1 {                    //нужен ли & ?
    font-size: 48px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    margin-top: 115px;
  }

  &__items {
    margin-top: 36px;
  }

  &__item {
    min-height: 543px;
    border: 1px solid $purple;
    margin-left: 10px;      // верно ли left & right ?
    margin-right: 10px;
    margin-bottom: 20px;

    // &:last-child {
    //   // margin-right: 0;    // уточнить по поводу крайнего margin в карте
    //   // margin-bottom: 0;   // также по нижней границе
    // }

    display: flex;
    justify-content: center;
    align-items: flex-start;
    // position: relative;
  }

  &__discount {
    // position: absolute;
    top: 6px;
    left: 20px;
    border: 1px dashed $red;
    border-radius: 50%;
    width: 56px;
    height: 56px;
    padding: 20px 10px;
  }

  &__top {
    // position: absolute;
    border: 1px solid $purple;
    border-radius: 50%;
    width: 56px;
    height: 56px;
    padding: 20px 10px;
    right: 27px;
    top: 221px;
    background: rgba(157, 117, 140, 0.39);
  }

  &__stars {
    // position: absolute;
    left: 26px;
    top: 321px;
  }
  
}


</style>


<!-- <div class="col-3">
  <div class="action-card__item">
    <img 
      src="@/assets/images/actions_card/pink-roses.png" 
      alt="red-roses"  
      class="action-card__image"          
    >
  </div>
    
        
</div>

<div class="col-3">
  <div class="action-card__item">
    <img 
      src="@/assets/images/actions_card/love-roses.png" 
      alt="red-roses"     
      class="action-card__image"         
    >
  </div>
        
</div>

<div class="col-3">
  <div class="action-card__item">
    <img 
      src="@/assets/images/actions_card/basket-flowers.png" 
      alt="red-roses"     
      class="action-card__image"         
    >
  </div>
  
</div>


<div class="col-3">
  <div class="action-card__item"></div>
        
</div>

<div class="col-3">
  <div class="action-card__item"></div>
        
</div>

<div class="col-3">
  <div class="action-card__item"></div>
        
</div>

<div class="col-3">
  <div class="action-card__item"></div>
  
</div> -->