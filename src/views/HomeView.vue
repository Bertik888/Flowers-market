<template>

  <banners />

  <photo-card />

  <action-card />

  <present-card />

  <forum-card />

  <map-block />






</template>

<script>
import Banners from '@/components/Banners.vue'
import PhotoCard from '@/components/PhotoCard.vue'
import ActionCard from '@/components/ActionCard.vue'
import PresentCard from '@/components/PresentCard.vue'
import ForumCard from '@/components/ForumCard.vue'
import MapBlock from '@/components/MapBlock.vue'


export default {
  name: 'HomeView',
  components: {
    Banners,
    PhotoCard,
    ActionCard,
    PresentCard,
    ForumCard,
    MapBlock

  }
}
</script>

<style lang="scss">
@import '@/assets/css/variables.scss';


</style>
