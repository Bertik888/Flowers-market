<template>
  <div class="photo">
    <div class="row">
      <div class="col-4">

        <div class="photo__delivery">
          <div class="photo__delivery_inner">
            <div class="photo__title">
              Фото доставок наших букетов
            </div>
            <div class="photo__subtitle">
              Безупречное качество обслуживания и доставка в любую точку города
            </div>
          </div>

          <img 
            src="@/assets/images/photo_card/vetka-left.png" 
            alt="vetka"
            class="photo__delivery_image"            
          >
          <img 
            src="@/assets/images/photo_card/photo.svg" 
            alt="vetka"
            class="photo__delivery_photo"            
          >

        </div>


      </div>
      <div class="col-4">
        <div class="photo__video">
          <div class="photo__video_inner">
            <div class="photo__video_title">
              Видео отчеты клиентов
            </div>
            <div class="photo__video_subtitle">
              Наши счастливые клиенты с букетами от Flowers
            </div>
          </div>

          <img 
            src="@/assets/images/photo_card/vetka-left-center.png" 
            alt="vetka"
            class="photo__video_img"            
          >
          <img 
            src="@/assets/images/photo_card/vetka-right-center.png" 
            alt="vetka"
            class="photo__video_image"            
          >
          <img 
            src="@/assets/images/photo_card/video.svg" 
            alt="vetka"
            class="photo__video_photo"            
          >
        </div>
      </div>

      <div class="col-4">
        <div class="photo__present">
          <div class="photo__present_inner">          
            <div class="photo__title">
              Подарок каждому клиенту
            </div>
            <div class="photo__subtitle">
              К каждому заказу мы прилагаем комплимент от компании в виде маленького презента
            </div>

            <img 
              src="@/assets/images/photo_card/vetka-left.png" 
              alt="vetka"
              class="photo__present_image"            
            >
            <img 
              src="@/assets/images/photo_card/podarok.svg" 
              alt="vetka"
              class="photo__present_photo"            
            >
          </div>


        </div>

      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'PhotoCard'
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.photo {
  margin-top: 48px;
  
  &__title {
    font-size: 24px;
    line-height: 35px;
  }

  &__subtitle {
    font-size: 14px;
    color: $light-grey;    
    margin-top: 15px;
  }


  &__delivery {    
    position: relative;
    width: 100%;
    min-height: 219px;
    border: 1px solid $purple;
    margin-right: 20px;
    background-size: cover;
    background-image: url(@/assets/images/photo_card/border-left.png);

    &_inner {
      display: flex;
      flex-direction: column;
      max-width: 40%;
      margin-top: 58px;
      margin-left: 20px;
    }
    
    &_image {
      position: absolute;
      top: -7px;
      left: 191px;
      transform: rotate(5deg);
    }

    &_photo {
      position: absolute;
      top: 27px;
      right: 37px;
    }
  }

  &__video {
    position: relative;
    width: 100%;
    min-height: 219px;
    border: 1px solid $purple;
    margin-right: 20px;
    background-color: $purple;
    // background-image: url(@/assets/images/photo_card/vetka-left-center.png), 
    // url(@/assets/images/photo_card/vetka-right-center.png);
    // background-repeat-x: no-repeat;
    // background-position: left, right;
    // // background-position-x: left, right;
    // // background-position-y: center, center;
    // background-position-y: 0, 0;
    &_inner {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &_title {
      font-size: 24px;
      line-height: 40px;
      color: $white;
      margin-top: 125px;  
    }

    &_subtitle {
      font-size: 14px;
      color: $white;    
      margin-top: 13px;  
    }

    &_img {
      position: absolute;
      top: -20px;
      left: -37px;
    }

    &_image {
      position: absolute;
      top: -55px;
      right: -45px;
    }

    &_photo {
      position: absolute;
      top: 20px;
      right: 180px;
      left: 180px;
    }
  }

  &__present {
    position: relative;
    width: 100%;
    min-height: 219px;
    border: 1px solid $purple;
    background-size: cover;
    background-image: url(@/assets/images/photo_card/border-right.png);
    // transform: scale(-1, 1);

    &_inner {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-top: 58px;
      margin-right: 20px;
      margin-left: 226px;
    }

    &_image {
      position: absolute;
      top: -7px;
      right: 195px;
      transform: rotate(5deg);
      transform: scale(-1, 1);
    }

    &_photo {
      position: absolute;
      top: 27px;
      left: 33px;
    }
  }
}



</style>