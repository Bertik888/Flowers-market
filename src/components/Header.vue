<template>
  <div class="header-block">
    <div class="row">
      <div class="col-2">
        <img 
          src="@/assets/images/logo/logo-top.png" 
          alt="logo"
          class="footer-block__logo"
        >
      </div>

      <div class="col-7">
        <div class="header-block__search">
          <div class="header-block__search_category">
            <img 
              src="@/assets/images/icons/dropdown-grey.svg" 
              alt="dropdown"
              class="header-block__dropdown"
            >
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
          <ul class="header-block__menu">
            <li>
              <a class="header-block__link_topmenu" href="#">Каталог товаров</a>
              <img 
                src="@/assets/images/icons/dropdown-black.svg" 
                alt="dropdown"
                class="header-block__dropdown"
              >

              <ul class="header-block__submenu">

                <li><a class="header-block__link" href="#">Букеты</a>
                  <i class="bi bi-chevron-left"></i>                
                </li>
                <li><a class="header-block__link" href="#">Розы</a>
                  <i class="bi bi-chevron-left"></i>
                </li>

                <li><a class="header-block__link" href="#">Цветы в коробке</a>
                  <i class="bi bi-chevron-right"></i>  

                  <ul class="header-block__items">
                    <li><a class="header-block__link" href="#">Цветы в коробке с пироженым Macarons</a></li>
                    <li><a class="header-block__link" href="#">Цветы в коробке сердце</a></li>
                    <li><a class="header-block__link" href="#">Цветы в прямоугольной коробке</a></li>
                    <li><a class="header-block__link" href="#">Цветы в шляпной коробке </a></li>
                    <li><a class="header-block__link" href="#">Розы в коробке</a></li>
                    <li><a class="header-block__link" href="#">Пионы в коробке</a></li>               
                  </ul>
                </li>

                <li><a class="header-block__link" href="#">Композиции</a>
                  <i class="bi bi-chevron-left"></i>  
                </li>

                <li><a class="header-block__link" href="#">Подарки</a>
                  <i class="bi bi-chevron-left"></i>  
                </li>

                <li><a class="header-block__link" href="#">Подарочные корзины</a>
                  <i class="bi bi-chevron-left"></i>  
                </li>

                <li><a class="header-block__link" href="#">Букеты невесты</a>
                  <i class="bi bi-chevron-left"></i>  
                </li>

                <li><a class="header-block__link" href="#">Вкусные букеты</a>
                  <i class="bi bi-chevron-left"></i>  
                </li>  

              </ul>
            </li>

            <li>
              <a class="header-block__link_topmenu" href="#">Форум</a>
            </li>
            <li>
              <a class="header-block__link_topmenu" href="#">Отзывы</a>
            </li>
            <li>
              <a class="header-block__link_topmenu" href="#">Акции</a>
            </li>
            <li>
              <a class="header-block__link_topmenu" href="#">Новости</a>
            </li>
            <li>
              <a class="header-block__link_topmenu" href="#">Информация</a>
              <img 
                src="@/assets/images/icons/dropdown-black.svg" 
                alt="dropdown"
              >
            </li>

          </ul>
        </nav>

        
      </div>

      <div class="col-3">
        <div class="header-block__social">
          <img 
            src="@/assets/images/social/viber.svg" 
            alt="social"
          >
          <img 
            src="@/assets/images/social/insta.svg" 
            alt="social"
          >
          <img 
            src="@/assets/images/social/viber.svg" 
            alt="social"
          >
          <img 
            src="@/assets/images/social/facebook.svg" 
            alt="social"
          >
        </div>

        <div class="header-block__phone">
          +88 (888) 888 08 08
        </div>

        <div class="header-block__content">
          <img 
            src="@/assets/images/icons/favorites.svg" 
            alt="favorites"
          >
          <img 
            src="@/assets/images/icons/cart.svg" 
            alt="social"
          >

          <div class="header-block__price">
            1 520 P
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
  font-weight: 700;
  color: $black;

  &__search {
    display: flex;
    margin-top: 52px;

    &_category {
      display: flex;
      margin-right: 21px;
    }

    &_product {
      display: flex;
    }
  }

  &__input {
    border: none;
    outline: none;
    box-shadow: none;
    width: 100%;
    border-bottom: 1px solid #956D84;

  }

  &__nav {
    margin-top: 47px;
  }

  &__menu {
    display: flex;
    justify-content: space-between;
    list-style: none;
    
    &_link {
      text-decoration: none;
      color: $black; 
      &_dropdown {
        align-items: center;
      }
    }

    &_link:hover {
      color: $purple;
    }
    
  }
  &__submenu {
    margin-top: 14px;
    list-style: none;
    border: 1px solid $purple;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  }



}
</style>

<template>
  <div class="header-block">
    <div class="row">
      <div class="col-2">
        <img 
          src="@/assets/images/logo/logo-top.png" 
          alt="logo"
          class="footer-block__logo"
        >
      </div>
      
      <div class="col-7">
        <div class="header-block__search">
          <div class="header-block__search_category">
            <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
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

  &__nav {
    margin-top: 47px;
  }

  // topmenu
  &__menu {
    display: flex;
    justify-content: space-between;
    list-style: none;    
  }

  // a
  &__link {
    text-decoration: none;
    color: $black;
    padding-top: 17px;
    padding-left: 14px;
    padding-bottom: 23px;
    display: inline-block;
    
    &:hover {
      color: $purple;
    }

    &_topmenu {
      text-decoration: none;
      color: $black;

      &:hover {
        color: $purple;
      }
    }
  }

  &__submenu {
    margin-top: 14px;
    list-style: none;
    border: 1px solid $purple;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
    position: relative;

    // width: 100%;
    min-width: 240px;
  }

  &__items {
    position: absolute;
    list-style: none;
    border: 1px solid $purple;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
    min-width: 240px;

    left: 190px;
    bottom: -100px;
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