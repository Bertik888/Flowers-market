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
        <div class="product-item-modal__subtitle">
          Букеты из тюльпанов 
          <i class="bi bi-chevron-right"></i>
        </div>
        <div class="product-item-modal__title">
          25 желтых тюльпанов
        </div>

        <div class="product-item-modal__inner">
          <div class="product-item-modal__inner_text">
            В наличии 
          </div>

          <div class="product-item-modal__inner_stars">
            <img 
              src="@/assets/images/actions_card/star.svg" 
              alt="star"   
              class="product-item-modal__star"           
            >
            <img 
              src="@/assets/images/actions_card/star.svg" 
              alt="star"   
              class="product-item-modal__star"           
            >
            <img 
              src="@/assets/images/actions_card/star.svg" 
              alt="star"   
              class="product-item-modal__star"           
            >
            <img 
              src="@/assets/images/actions_card/star.svg" 
              alt="star"   
              class="product-item-modal__star"           
            >
            <img 
              src="@/assets/images/actions_card/star.svg" 
              alt="star"   
              class="product-item-modal__star"           
            >
          </div>
        </div>

        <div class="product-item-modal__price">
          <div class="product-item-modal__price_new">
            3800 руб
          </div>
          <div class="product-item-modal__price_old">
            7800 руб
          </div>
        </div>


        <div class="product-item-modal__intro">

          <div class="product-item-modal__key">
            <div class="product-item-modal__header">
              Цветы
            </div>
            <div class="product-item-modal__header">
              Размер
            </div>
            <div class="product-item-modal__header">
              Материал
            </div>
            <div class="product-item-modal__text">
              Дополнительно
            </div>
          </div>

          <div class="product-item-modal__meaning">
            <div class="product-item-modal__text">
              25 желтых тюльпанов
            </div>
            <div class="product-item-modal__text">
              50-60 см
            </div>
            <div class="product-item-modal__text">
              Декоративный флористический материал
            </div>
            <div class="product-item-modal__text">
              Оформление
            </div>
          </div>

        </div>

        <div class="product-item-modal__basket">
          <div class="product-item-modal__quantity">
            <i class="bi bi-chevron-left"></i>1<i class="bi bi-chevron-right"></i>
          </div>

          <div class="product-item-modal__button">
            <button       
              class="btn"
            >
              В корзину
            </button>
          </div>
        </div>

        <div class="product-item-modal__order">
          Быстрый заказ
        </div>

        <div class="product-item-modal__phone">
          <input 
            type="text"
            placeholder="Номер телефона +7 888 8888 888"
            class="product-item-modal__phone_input"
          >            

            <div class="product-item-modal__button">
            <button       
              class="btn"
            >
              Быстрый заказ
            </button>
          </div>
        </div>

        <div class="product-item-modal__addition">
          <div class="product-item-modal__delivery">
            Доставка
            <i class="bi bi-chevron-down"></i>
          </div>

          <div class="product-item-modal__description">
            Описание
            <i class="bi bi-chevron-up"></i>
          </div> 

          <div class="product-item-modal__reviews">
            Отзывы(12)
            <i class="bi bi-chevron-down"></i>
          </div>
        </div>

        <div class="product-item-modal__content">
          Тюльпан - символ любви, весеннего обновления, счастья, теплой и солнечной погоды и хорошего приподнятого настроения! Тюльпан отличается элегантностью форм и изысканностью линий. Если Вы подбираете букет цветов для близкого, дорогого человека, коллеге по работе, то, как нельзя, кстати, придутся нежные чарующие тюльпаны. Преподнося тюльпаны Вы дарите частичку легкого и весеннего настроения!
        </div>


      </div><!-- //col-7 -->

      <h1>Сопутствующие товары</h1>

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

      <h1>Вы просматривали</h1>

    </div><!-- //row -->

  </div><!-- //product-item-modal -->
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
    padding: 10px 10px;
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

  &__subtitle {
    color: $light-grey;
    margin-top: 16px;

    & > i {
      margin-left: 33px;
    }
  }

  &__title {
    margin-top: 45px;
    font-size: 36px;
    font-weight: 700;
  }

  &__inner {
    margin-top: 40px;
    display: flex;
    align-items: center;

    &_text {
      color: $light-grey;  
      margin-right: 60px;    
    }
  }

  &__price {
    margin-top: 50px;
    display: flex;


    &_new {
      font-size: 36px;
      font-weight: 700;
      color: $purple;
      margin-right: 60px;
    }

    &_old {
      font-size: 24px;
      color: $light-grey; 
      text-decoration: line-through;
    }
  }

  &__intro {
    margin-top: 60px;
    font-family: $font-family-euclid;
    display: flex;
    align-items: center;
  }

  &__key {
    margin-right: 90px;
  }

  &__header {
    margin-top: 24px;
    &:first-child {
      margin-top: 0px;
    }
  }

  &__text {
    margin-top: 24px;
    &:first-child {
      margin-top: 0px;
    }
  }
  
  &__basket {
    margin-top: 60px;
    display: flex;
  }

  &__quantity {
    height: 63px;
    min-width: 105px;
    border: 1px solid $purple;
    border-radius: 7px;
    padding: 25px 15px;
    margin-right: 34px;
    font-size: 24px;
    font-family: $font-family-euclid;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  &__order {
    margin-top: 45px;
    color: $light-grey;
  }
  &__phone {
    margin-top: 20px;
    display: flex;
    
    &_input { 
      padding: 20px 35px;
      font-family: $font-family-euclid;
      font-size: 14px;
      width: 50%;
    }
  }

  &__addition {
    margin-top: 48px;
    display: flex;
    font-size: 18px;
    font-weight: 700;
    color: $light-grey;
    

  }

  &__delivery {
    margin-right: 66px;
    &:hover {
      color: $purple;
      cursor: pointer;
    }
  }

  &__description {
    margin-right: 66px;
    &:hover {
      color: $purple;
      cursor: pointer;

    }
  }

  &__reviews {
    &:hover {
      color: $purple;
      cursor: pointer;
    }
  }

  &__content {
    margin-top: 34px;
    line-height: 20px;
    color: $light-grey;
  }


}

</style>