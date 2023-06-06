<template>

<!-- баннеры и акции -->

<banners />

<photo-card />

<action-card />

<present-card />






</template>

<script>
import Banners from '@/components/Banners.vue'
import PhotoCard from '@/components/PhotoCard.vue'
import ActionCard from '@/components/ActionCard.vue'
import PresentCard from '@/components/PresentCard.vue'

export default {
  name: 'HomeView',
  components: {
    Banners,
    PhotoCard,
    ActionCard,
    PresentCard

  }
}
</script>

<style lang="scss">
@import '@/assets/css/variables.scss';


</style>
