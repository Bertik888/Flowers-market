<template>
  <div class="basket">
    <h1>Корзина</h1>
    <div class="row">
      
      <div class="col-8">
        <div class="basket__info">
          <div class="basket__info_name">
            Название
          </div>
          <div class="basket__info_price">
            Цена за шт.
          </div>
          <div class="basket__info_quantity">
            Кол-во
          </div>
          <div class="basket__info_total">
            Итог
          </div>
        </div>

        <div class="basket__items">
          <img 
            src="@/assets/images/basket/tulips.png" 
            alt="tulips"
            class="basket__items_image"
          >
          <div class="basket__items_name">
            25 желтых тюльпанов
          </div>
          <div class="basket__items_price">
            795 Р
          </div>
          <div class="basket__items_quantity">
            <i class="bi bi-chevron-left"></i>2<i class="bi bi-chevron-right"></i>
          </div>
          <div class="basket__items_total">
            1590 Р
          </div>
          <div class="basket__items_icons">
            <div class="basket__items_trash">
              <img 
                src="@/assets/images/basket/trash.svg" 
                alt="trash"
              >
            </div>
            <div class="basket__items_favorites">
              <img 
                src="@/assets/images/basket/favorit.svg" 
                alt="favorites"
              >
            </div>
          </div>

        </div>

        <div class="basket__items">
          <img 
            src="@/assets/images/basket/tulips.png" 
            alt="tulips"
            class="basket__items_image"
          >
          <div class="basket__items_name">
            25 желтых тюльпанов
          </div>
          <div class="basket__items_price">
            795 Р
          </div>
          <div class="basket__items_quantity">
            <i class="bi bi-chevron-left"></i>2<i class="bi bi-chevron-right"></i>
          </div>
          <div class="basket__items_total">
            1590 Р
          </div>
          <div class="basket__items_icons">
            <div class="basket__items_trash">
              <img 
                src="@/assets/images/basket/trash.svg" 
                alt="trash"
              >
            </div>
            <div class="basket__items_favorites">
              <img 
                src="@/assets/images/basket/favorit.svg" 
                alt="favorites"
              >
            </div>
          </div>

        </div>

        <div class="basket__items">
          <img 
            src="@/assets/images/basket/tulips.png" 
            alt="tulips"
            class="basket__items_image"
          >
          <div class="basket__items_name">
            25 желтых тюльпанов
          </div>
          <div class="basket__items_price">
            795 Р
          </div>
          <div class="basket__items_quantity">
            <i class="bi bi-chevron-left"></i>2<i class="bi bi-chevron-right"></i>
          </div>
          <div class="basket__items_total">
            1590 Р
          </div>
          <div class="basket__items_icons">
            <div class="basket__items_trash">
              <img 
                src="@/assets/images/basket/trash.svg" 
                alt="trash"
              >
            </div>
            <div class="basket__items_favorites">
              <img 
                src="@/assets/images/basket/favorit.svg" 
                alt="favorites"
              >
            </div>
          </div>

        </div>

      </div>

      <div class="col-4">
        <div class="basket__subtitle">
          Продолжить покупки
          <i class="bi bi-chevron-right"></i>
        </div>
        <div class="basket__order">
          <div class="basket__order_title">
            Ваш заказ
          </div>

          <div class="basket__order_inner">
            <div class="basket__order_key">
              <div class="basket__order_product">
                Товары
              </div>
              <div class="basket__order_discount">
                Скидка
              </div>
              <div class="basket__order_total">
                Всего
              </div>
            </div>

            <div class="basket__order_meaning">
              <div class="basket__order_price">
                5500 Р
              </div>
              <div class="basket__order_discountprice">
                350 Р
              </div>
              <div class="basket__order_totalprice">
                5150 Р
              </div>
            </div>
          </div>

          <div class="basket__order_button">
            <button       
              class="btn"
            >
              Оформить заказ
            </button>
          </div>          

        </div>
        
      </div>




      <h1>Рекомендации</h1>
      <div class="present-card__items"> 
        <div class="present-card__info">
          <div class="present-card__discount">
            <img 
              src="@/assets/images/icons/favorites.svg" 
              alt="favorites"
            >
          </div>
          <div class="present-card__top">
            TOP
          </div>
        </div>
        <div class="present-card__item">
          <div class="present-card__image">
            <img 
              src="@/assets/images/present_card/napol.png" 
              alt="napol"
            >
          </div>
        </div>
      </div>


    </div>

  </div>
</template>

<script>
  export default {
    name: 'Basket'
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.basket {

  h1 {                   
    font-size: 48px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    margin-top: 115px;
  }
  
  &__info {                          //уточнить по размещению заголовков!!!
    margin-top: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: $light-grey; 
  }

  &__items {
    margin-top: 15px;
    border: 1px solid $purple; 
    height: 156px;

    display: flex;
    align-items: center;
    padding: 26px 30px;
    justify-content: space-between;

    &_quantity {
      min-height: 42px;
      border: 1px solid $purple;
      padding: 17px 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    &_icons {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    &_trash {
      margin-right: 22px;
    }
  }

  &__subtitle {                         
    margin-top: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: $light-grey; 
    cursor: pointer;
  }

  &__order {
    min-height: 450px;
    border: 1px solid $purple; 
    padding: 60px 70px;
    margin-top: 15px;

    &_title {
      color: $purple;
      font-weight: 700;
      font-size: 36px;
    }

    &_inner {
      margin-top: 70px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &_product {
      color: $light-grey; 
    }

    &_discount {
      color: $light-grey; 
      margin-top: 32px;
    }

    &_total {
      margin-top: 60px;
      font-size: 24px;
    }    

    &_discountprice {
      margin-top: 32px;
    }

    &_totalprice {
      margin-top: 60px;
      font-size: 24px;
      font-weight: 700;
    }

    &_button {
      margin-top: 63px;
      justify-content: center;
      display: flex;
      align-items: center;
    }


  }
}


</style>