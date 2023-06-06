<template>
  <div class="footer-block">
    <div class="container">
      <div class="row">

        <div class="col-3">
          <img 
            src="@/assets/images/logo/logo-bottom.png" 
            alt="logo"
            class="footer-block__logo"
          >
        </div>

        <div class="col-9">
          <div class="footer-block__title">

            <div class="footer-block__info">
              <h1>Информация</h1>
              <p>О нас</p>
              <p>Доставка и оплата</p>
              <p>Политика</p>
              <p>Конфиденциальности</p>
            </div>

            <div class="footer-block__info">
              <h1>Служба поддержки</h1>
              <p>Карта сайта</p>
              <p>Возврат товара</p>
              <p>Связаться с нами</p>
              <p>Для сотрудничества</p>
            </div>

            <div class="footer-block__info">
              <h1>Личный кабинет</h1>
              <p>История заказа</p>
              <p>Закладки</p>
              <p>Список новостей</p>
            </div>

            <div class="footer-block__info">
              <!-- <ul>
                <li>Подарочные</li>
                <li>Сертификаты</li>
                <li>Акции</li>
                <li>Цветы в офис</li>
              </ul> -->
              <h1>Дополнительно</h1>
              <p>Подарочные</p>
              <p>Сертификаты</p>
              <p>Акции</p>
              <p>Цветы в офис</p>
            </div>  

          </div>  
        </div> <!-- //col-9 -->

        <div class="footer-block__border"></div>

        <div class="footer-block__content">
          <div class="footer-block__copyright">
            Copyright © 2021. Все права защищены
          </div>
          <div class="footer-block__pay">
            <img 
              src="@/assets/images/pay/pay.svg" 
              alt="logo_pay"
            >
          </div>
        </div>

      </div><!-- //row -->
    </div><!-- container -->
  </div><!-- //footer-block -->
</template>

<script>
  export default {
    name: 'FooterBlock'
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.footer-block {
  height: 348px;
  background: #333333;
  color: $white;
  margin-top: 85px;

  &__logo {
    margin-top: 32px;
  }
  
  &__title{
    margin-top: 42px;
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
  }

  &__info {

    h1 {
      margin-bottom: 38px;
      font-weight: 700;
      font-size: 18px;
    }

    p {      
      margin-bottom: 10px;
      cursor: pointer;
      &:hover {
        opacity: .7;
      }
    }
  }

  &__border {
    margin-top: 55px;
    border: 1px solid #956D84;
    
  }

  &__content {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }

  &__copyright {
    margin-top: 23px;
    &:hover {
      opacity: .7;
    }
  }

  &__pay {
    margin-top: 15px;
  }

}

</style>