<template>
  <div class="forum-card">
    <h1>Форум</h1>
    <div class="row">
      
      <div class="col-4">
        <div class="forum-card__items">

          <div class="forum-card__item">
            <img 
              src="@/assets/images/forum_card/woomen.png" 
              alt="woomen"
              class="forum-card__photo"
            >

            <div class="forum-card__content">
              <div class="forum-card__title">
                Какие цветы под запретом: что нельзя дарить
              </div>
              <div class="forum-card__subtitle">
                Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами...
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="col-4">
        <div class="forum-card__items">

          <div class="forum-card__item">
            <img 
              src="@/assets/images/forum_card/redros.png" 
              alt="woomen"
              class="forum-card__photo"
            >
            <div class="forum-card__content">
              <div class="forum-card__title">
                Как сохранить букет свежим: советы и рекомендации
              </div>
              <div class="forum-card__subtitle">
                Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами...
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-4">
        <div class="forum-card__items">

          <div class="forum-card__item">
            <img 
              src="@/assets/images/forum_card/roses.png" 
              alt="woomen"
              class="forum-card__photo"
            >
            <div class="forum-card__content">
              <div class="forum-card__title">
                Цветочный этикет - как правильно дарить цветы
              </div>
              <div class="forum-card__subtitle">
                Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами...
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'ForumCard'
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.forum-card {
  h1 {                   
    font-size: 48px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    margin-top: 115px;
  }

  &__items {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
  }

  &__item {    
    width: 100%;
    height: 371px;
    position: relative;
    overflow: hidden;
  }

  &__item:hover &__content {
    opacity: 0.8;
  }

  &__photo {
    min-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    transform: translate3d(-50%, -50%, 0);
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: end;
    // text-align: center;
    width: 100%;
    height: 100%;
    background-color: $purple;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    transition: opacity .2s linear;
    color: $white;
    padding: 15px;
  }

  &__title {
    font-size: 24px;
    line-height: 25px;
  }

  &__subtitle {
    margin-top: 26px;
  }

}

// .forum-card {

//   h1 {                   
//     font-size: 48px;
//     font-weight: 700;
//     display: flex;
//     justify-content: center;
//     margin-top: 115px;
//   }

//   &__items {

//   }

//   &__item {
//     width: 460px;
//     height: 371px;  
//     background-color: $purple;  
//   }
// }
</style>