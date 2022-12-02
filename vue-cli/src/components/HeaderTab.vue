<template>
  <div class="container-tabs">
    <!-- <div v-for="(content,idx) in contentList"></div> -->
    <div class="wrap-tabs">
      <div class="tab" v-for="tab in componentList" :key="tab.id">
        <span class="tab-name"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['componentList'],  
  computed:{
    tabList(){
      return this.componentList
    }
  }

}
</script>

<style>
.container-tabs{
    width: 100%;
    height: 80px;
    background: rgb(214, 205, 205);
    border: 1px solid grey;
}
</style>