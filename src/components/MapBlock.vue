<template>
  <div class="map-block">

    <h1>Наше расположение</h1>
    <div class="map-block__map">
      <iframe src="https://www.google.com/maps/d/embed?mid=1QrU5L2iXmy1yoIeAxZr0hp_8Ie39QSA&ehbc=2E312F" width="100%" height="480"></iframe>

      <div class="map-block__bg">
        <div class="col-3">
          
          <img 
            src="@/assets/images/background/map.png" 
            alt="map"
          >

          <img 
            src="@/assets/images/logo/logo.png" 
            alt="map"
            class="map-block__logo"
          >

          <div class="map-block__info">
            <div class="map-block__phone">
              <i class="bi bi-telephone"></i>
              Телефон: +88 (888) 888 08 08
            </div>

            <div class="map-block__skype">
              <i class="bi bi-skype"></i>
              Skype: flowers-market
            </div>

            <div class="map-block__mail">
              <i class="bi bi-envelope"></i>
              Почта: flowers-market@mail.ru
            </div>

            <div class="map-block__social">
              <img 
                src="@/assets/images/social/viber.svg" 
                alt="social"
                class="map-block__social_image"
              >
              <img 
                src="@/assets/images/social/insta.svg" 
                alt="social"
                class="map-block__social_image"
              >
              <img 
                src="@/assets/images/social/viber.svg" 
                alt="social"
                class="map-block__social_image"
              >
              <img 
                src="@/assets/images/social/facebook.svg" 
                alt="social"
                class="map-block__social_image"
              >
            </div>

          </div>


        </div>
        



        
        
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'MapBlock'
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.map-block {
  margin-top: 80px;

  h1 {                    
    font-size: 48px;
    font-weight: 700;
    display: flex;
    justify-content: center;
  }

  &__map {
    position: relative;

    margin-top: 40px;
    // background-image: url(@/assets/images/background/map.png);
    // background-size: cover;
    // background-repeat: no-repeat;
    // z-index: 1;
  }

  &__bg {
    position: absolute;
    top: -24px;
    right: 30px;
    opacity: 0.9;
  }

  &__logo {
    position: absolute;
    top: 30px;
    left: 150px;
  }

  &__info {
    position: absolute;
    top: 220px;
    left: 80px;
  }

  &__skype {
    margin-top: 26px;
  }

  &__mail {
    margin-top: 26px;
  }

  &__social {
    margin-top: 56px;

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
}


</style>