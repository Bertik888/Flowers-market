<template>
  <nav class="top-menu">
    <ul class="top-menu__general">
      <li 
        v-for="item in categories"
        :key="item.id"        
      >
        <a :href="item.link">{{ item.name}}</a>

        <template v-if="item.children.length">        
          <!-- <img 
            src="@/assets/images/icons/dropdown-black.svg" 
            alt="dropdown"
            class="top-menu__dropdown"
          > -->
          <i class="bi bi-caret-down-fill"></i>

          
          <top-menu-sub 
            :items="item.children"          
          />
        </template>
      </li>      
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import TopMenuSub from './TopMenuSub'


  export default {
    name: 'TopMenu',
    components: {
      TopMenuSub
    },

    computed: {
      ...mapGetters({
        categories: 'categories/menuCategories'
      })
    }

  }
</script>

<style lang="scss">
@import '@/assets/css/variables.scss';


.top-menu {
  margin-top: 47px;

  &__general {
    display: flex;
    justify-content: space-between;
    list-style: none;  
    
    > li {
      > a {
        font-weight: 700;

        &:hover {
          color: $purple;
        }
      }
    }
    i {
      margin-left: 8px;
    }
  }

  // &__dropdown {
  //   margin-left: 8px;
  // }

  a {
    display: inline-block;
    text-decoration: none;
    color: $black;      
  }

  ul {
    padding-left: 0;  // читерство  
    background: $white;
  }

  li {
    cursor: pointer;
  }

  li:hover > &__sub {
    visibility: visible;
    opacity: 1;
    transform: rotateX(0deg);
  }

  &__sub {    
    min-width: 240px;
    list-style: none;
    position: absolute;

    border: 1px solid $purple;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);

    z-index: 5;
    transform-origin: 0 0;
    transform: rotateX(-90deg);
    transition: .3s linear;
    visibility: hidden;
    opacity: 0;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;

      &:hover {
        background-color: $purple;
        
        > a {
          color: $white;
        }

        > i { 
          color: $white;
        }
      }

      i {
        margin-right: 8px;
      }
    }



    a {
      padding: 20px 10px 14px;
    }
    .top-menu__sub {
      position: absolute;
      top: 0;
      left: 100%;
      transition: transform .3s linear;
    }
  }
}

</style>