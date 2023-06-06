

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
            <ul class="topmenu">
              <li><a href="#">
                <img 
                  src="@/assets/images/icons/dropdown-grey.svg" 
                  alt="dropdown"
                  class="header-block__dropdown"
                ></a>

                <ul class="submenu">
                  <li><a href="#">Букеты</a></li>
                  <li><a href="#">Подарки</a></li>
                  <li><a href="#">Цветы в горшке</a></li>
                  <li><a href="#">Цветы в коробке</a></li>
                  <li><a href="#">Розы</a></li>
                  <li><a href="#">Ромашки</a></li>
                </ul>
                
              </li>
            </ul>
            <!-- <i class="bi bi-caret-down"></i> -->
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
            <img 
              src="@/assets/images/icons/search.svg" 
              alt="search"
              class="header-block__search_img"
            >
          </div>
        </div>

        <nav class="header-block__nav">
          <ul class="topmenu">
            <li><a a class="top" href="#">Каталог товаров</a>
              <img 
                src="@/assets/images/icons/dropdown-black.svg" 
                alt="dropdown"
                class="header-block__dropdown"
              >

              <ul class="submenu">
                <li><a href="#">Букеты</a>
                  <i class="bi bi-chevron-left"></i> 
                  <ul class="submenu">
                    <li><a href="#">Цветы в коробке сердце</a></li>
                    <li><a href="#">Розы в коробке</a></li>
                    <li><a href="#">Пионы в коробке</a></li>
                  </ul> 
                </li>
                <li><a href="#">Розы</a>
                  <i class="bi bi-chevron-left"></i> 
                  <ul class="submenu">
                    <li><a href="#">Цветы в коробке сердце</a></li>
                    <li><a href="#">Розы в коробке</a></li>
                    <li><a href="#">Пионы в коробке</a></li>
                  </ul>
                </li>

                <li><a href="#">Цветы в коробке</a>
                  <i class="bi bi-chevron-right"></i> 
                  <ul class="submenu">
                    <li><a href="#">Цветы в коробке с пироженым Macarons</a></li>
                    <li><a href="#">Цветы в коробке сердце</a></li>
                    <li><a href="#">Цветы в прямоугольной коробке</a></li>
                    <li><a href="#">Цветы в шляпной коробке</a></li>
                    <li><a href="#">Розы в коробке</a></li>
                    <li><a href="#">Пионы в коробке</a></li>
                  </ul>                
                </li>

                <li><a href="#">Композиции</a>
                  <i class="bi bi-chevron-left"></i> 
                  <ul class="submenu">
                    <li><a href="#">Цветы в коробке сердце</a></li>
                    <li><a href="#">Розы в коробке</a></li>
                    <li><a href="#">Пионы в коробке</a></li>
                  </ul>
                </li>
                <li><a href="#">Подарки</a>
                  <i class="bi bi-chevron-left"></i> 
                  <ul class="submenu">
                    <li><a href="#">Цветы в коробке сердце</a></li>
                    <li><a href="#">Розы в коробке</a></li>
                    <li><a href="#">Пионы в коробке</a></li>
                  </ul>
                </li>
                <li><a href="#">Подарочные корзины</a>
                  <i class="bi bi-chevron-left"></i> 
                  <ul class="submenu">
                    <li><a href="#">Цветы в коробке сердце</a></li>
                    <li><a href="#">Розы в коробке</a></li>
                    <li><a href="#">Пионы в коробке</a></li>
                  </ul>
                </li>
                <li><a href="#">Букеты невесты</a>
                  <i class="bi bi-chevron-left"></i> 
                  <ul class="submenu">
                    <li><a href="#">Цветы в коробке сердце</a></li>
                    <li><a href="#">Розы в коробке</a></li>
                    <li><a href="#">Пионы в коробке</a></li>
                  </ul>
                </li>
                <li><a href="#">Вкусные букеты</a>
                  <i class="bi bi-chevron-left"></i> 
                  <ul class="submenu">
                    <li><a href="#">Цветы в коробке сердце</a></li>
                    <li><a href="#">Розы в коробке</a></li>
                    <li><a href="#">Пионы в коробке</a></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li><a class="top" href="#">Форум</a></li>
            <li><a class="top" href="#">Отзывы</a></li>
            <li><a class="top" href="#">Акции</a></li>
            <li><a class="top" href="#">Новости</a></li>

            <li><a class="top" href="#">Информация</a>
              <img 
                src="@/assets/images/icons/dropdown-black.svg" 
                alt="dropdown"
                class="header-block__dropdown"
              >

              <ul class="submenu">
                <li><a href="#">О нас</a></li>
                <li><a href="#">Политика конфиденциальности</a></li>
                <li><a href="#">Карта сайта</a></li>
                <li><a href="#">Связаться с нами</a></li>
                <li><a href="#">Доставка и оплата</a></li>
                <li><a href="#">Возврат товара</a></li>
              </ul>
            </li>
          </ul>
        </nav>

        
        
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
  export default {
    name: 'HeaderBlock'
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
  
  // Navigation & links
  &__nav {
    margin-top: 47px;
  }

  .topmenu {
    display: flex;
    justify-content: space-between;
    list-style: none;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: $black;      
  }
  a:hover {
    color: $purple;
  }

  ul {
    padding-left: 0;  // читерство  
  }

  .top {
    font-weight: 700;
  }

  .submenu {
    min-width: 240px;
    list-style: none;
    position: absolute;

    border: 1px solid $purple;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);

    z-index: 5;
    transform-origin: 0 0;
    transform: rotateX(-90deg);
    transition: .3s linear;
    visibility: hidden;
    opacity: 0;
  }

  .submenu li {
    position: relative;
  }

  .submenu .submenu {
    position: absolute;
    top: 0;
    left: 100%;
    transition: transform .3s linear;
  }

  .topmenu li:hover > .submenu {
    visibility: visible;
    opacity: 1;
    transform: rotateX(0deg);
  }
  .submenu a {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 14px;   
    padding-right: 10px;
    // padding: 20px 10px 20px 14px;
    // border: 1px solid #eee; 
    // display: block;
  }
  .submenu a:hover {
    background-color: $purple;
    color: $white;
  }
  // =====================================


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