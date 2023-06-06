<template>
  <div class="banners">
    <div class="row">

      <div class="col-6">
        <div class="banners__content">
          <h1>Скидки -6% на все букеты по предзаказу на 8 марта</h1>
        </div>
      </div>

      <div class="col-3">        
        <div class="banners__roses">
          <h1>Розы</h1>
        </div>

        <div class="banners__present">
          <h1>Подарочные корзины</h1>
        </div>
      </div>

      <div class="col-3">        
        <div class="banners__roses">
          <h1>Подарки</h1>
        </div>

        <div class="banners__present">
          <h1>Цветы в коробке</h1>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'Banners'
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';


.banners {
  margin-top: 60px;

  & > * h1 {
    font-weight: 700;
    padding-top: 42px;
    padding-left: 21px;
  }

  

  &__content {
    background-image: url(@/assets/images/banners/beautiful-roses.png);
    min-height: 669px;
    width: 100%;                // нужно ли? можно ли вынести в .banners ?        
    background-size: cover;
  }

  &__roses {
    background-image: url(@/assets/images/banners/roses.png);
    min-height: 321px;
    width: 100%;                // нужно ли? можно ли вынести в .banners ?
    background-size: cover;
    margin-bottom: 26px;

  }

  &__present {
    background-image: url(@/assets/images/banners/present.png);
    min-height: 321px;
    width: 100%;                // нужно ли? можно ли вынести в .banners ?
    background-size: cover;
  }
}

.banners > h1 {
  font-weight: 300;
}


</style>