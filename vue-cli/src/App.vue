<template>
  <div>
    <component v-for="component in componentList" :key="component.id" :is="component" :componentList="componentList"></component>
  </div>
</template>

<script>
import HeaderTab from '@/components/HeaderTab'
import AboutMe from '@/components/AboutMe'
import ProjectList from '@/components/ProjectList'
import MainVisual from '@/components/MainVisual'

export default {
  created(){
    
  },
  mounted(){
    console.log(this.$options)
  },
  computed:{
    componentList(){
      return [HeaderTab,MainVisual,AboutMe,ProjectList]
    }
    
  }
}

</script>

<style>

</style>