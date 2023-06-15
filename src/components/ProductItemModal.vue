<template>
  <div class="product-item-modal">
    <div class="row">
      <div class="col-5">
        <div class="product-item-modal__info">
          <div class="product-item-modal__discount">
            -10%
          </div>
          <div class="product-item-modal__favorites">
            <img 
              src="@/assets/images/icons/favorites.svg" 
              alt="favorites"
            >
          </div>
        </div>

        <div class="product-item-modal__item">
          <img 
            src="@/assets/images/product_card/flowers-header.png" 
            alt="roses"
          >
        </div>

        <div class="product-item-modal__photo">
          <img 
            src="@/assets/images/product_card/flowers-bot-1.png" 
            alt="roses"
          >
          <img 
            src="@/assets/images/product_card/flowers-bot-2.png" 
            alt="roses"
          >
          <img 
            src="@/assets/images/product_card/flowers-bot-1.png" 
            alt="roses"
          >
        </div>


      </div>

      <div class="col-7">
        
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'ProductItemModal'
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.product-item-modal {
  width: 100%;
  min-width: 1200px;
  padding: 10px 10px;

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: $light-white;
  }

  &__discount {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px dashed $red;
    border-radius: 50%;
    width: 98px;
    height: 98px;
  }

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;    
    background: $light-white;
  }

  &__photo {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    background: $light-white;
  }
}

</style>