<template>
  <ul class="top-menu__sub">
    <li 
      v-for="item in items"
      :key="item.id"
    >

      <a :href="item.link">{{ item.name }}</a>

      <template v-if="item.children.length">
        <i class="bi bi-chevron-left"></i> 
        <top-menu-sub 
          :items="item.children" 
        /> 
      </template>

    </li>
  </ul>
</template>

<script>
import TopMenuSub from './TopMenuSub'

  export default {
    name: 'TopMenuSub',
    components: {
      TopMenuSub
    },

    props: {
      items: {
        type: Array,
        default: []
      }
    }
    
  }
</script>

<style lang="scss" scoped>

</style>