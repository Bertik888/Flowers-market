

<template>
  <div class="header-block">
    <div class="row">
      <div class="col-2">
        <img 
          src="@/assets/images/logo/logo-top.png" 
          alt="logo"
          class="header-block__logo"
        >
      </div>

      <div class="col-7">
        <div class="header-block__search">
          <div class="header-block__search_category">
            
            <i class="bi bi-caret-down"></i>

            <input 
              type="text"
              id="category"
              placeholder="Поиск по категориям" 
              class="header-block__input"  
            >
            
            <!-- <label for="category">Поиск по категориям</label> -->
          </div>

          <div class="header-block__search_product">
            <input 
              type="text"
              id="product"
              placeholder="Поиск по товарам"
              class="header-block__input"  
            >
            <!-- <label for="product">Поиск по товарам</label> -->
            <!-- <img 
              src="@/assets/images/icons/search.svg" 
              alt="search"
              class="header-block__search_img"
            > -->
            <i class="bi bi-search"></i>
          </div>
        </div>

        <top-menu />
      </div>

      <div class="col-3">
        <div class="header-block__info">
          <div class="header-block__social">
            <img 
              src="@/assets/images/social/viber.svg" 
              alt="social"
              class="header-block__social_image"
            >
            <img 
              src="@/assets/images/social/insta.svg" 
              alt="social"
              class="header-block__social_image"
            >
            <img 
              src="@/assets/images/social/viber.svg" 
              alt="social"
              class="header-block__social_image"
            >
            <img 
              src="@/assets/images/social/facebook.svg" 
              alt="social"
              class="header-block__social_image"
            >
          </div>

          <div class="header-block__phone">
            +88 (888) 888 08 08
          </div>

          <div class="header-block__content">
            <img 
              src="@/assets/images/icons/favorites.svg" 
              alt="favorites"
              class="header-block__favorites"
            >
            <img 
              src="@/assets/images/icons/cart.svg" 
              alt="cart"
              class="header-block__cart"
            >

            <div class="header-block__price">
              1 520 P
            </div>
          </div>
        </div>
      </div>



    </div> 

  </div>
</template>

<script>
import TopMenu from '@/components/TopMenu/TopMenu.vue'



  export default {
    name: 'HeaderBlock',
    components: {
      TopMenu
    }
  }
</script>

<style lang="scss" scoped>

@import '@/assets/css/variables.scss';
.header-block {

  &__logo {
    margin-top: 28px;
  }

  &__search {
    display: flex;
    justify-content: space-between;
    margin-top: 52px;

    &_category {
      display: flex;
      margin-right: 21px;
      width: 30%;
    }

    &_product {
      display: flex;
      width: 70%;
    }
  }

  &__input {
    border: none;
    outline: none;
    box-shadow: none;
    width: 100%;
    border-bottom: 1px solid #956D84;
  }


  &__info {
    margin-top: 28px;
  }

  &__social {
    justify-content: flex-end;
    display: flex;
    

    &_image {
      margin-right: 13px;
      cursor: pointer;
      &:last-child {
        margin-right: 0;
      }      
      &:hover {
        opacity: .7;
      }
    }
  }

  &__phone {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
  }
  
  &__content {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 28px;
  }

  &__favorites {
    margin-right: 20px;
    cursor: pointer;
    
    &:hover {
      opacity: .7;
    }
  }

  &__cart {
    margin-right: 20px;
    cursor: pointer;
    
    &:hover {
      opacity: .7;
    }
  }

  &__price {
    line-height: 10px;
    color: $light-grey;
  }
}




</style>