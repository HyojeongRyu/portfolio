<template>
  <div>
    <header class="container-tabs">
      <!-- <div class="wrap-tabs"> -->
        <div class="tab" v-for="(tab,index) in componentList" :key="index" @click="goSection(index)">
          <span class="tab-name">{{tab.name}}</span>
        </div>
      <!-- </div> -->
    </header>
    <div class="container-content">
      <component class="section" v-for="(item,index) in componentList" :key="index" :is="item.component" :componentList="componentList" ref="section"></component>
    </div>
    <!-- <div class="container-nav-bar">
      <div class="nav-bar" v-for="(tab,index) in componentList" :key="index" @click="goSection(index)">
          <span class="nav-bar__item">{{tab.name}}</span>
      </div>
    </div> -->
  </div>
</template>

<script>
// import HeaderTab from '@/components/HeaderTab'
import MyCareer from '@/components/MyCareer'
import ProjectList from '@/components/ProjectList'
import AboutMe from '@/components/AboutMe'
import myFunction from '@/myFunction'

export default {
  created(){
    console.log(this.componentList)
  },
  mounted(){
    // console.log(this.$options)
  },
  computed:{
    componentList(){
      return [
        {component:AboutMe,name:'자기소개',icon:''},
        {component: ProjectList,name:'프로젝트',icon:''},
        {component:MyCareer,name:'이력',icon:''}
      ] 
    }
  },
  methods:{
    //idx번째 섹션으로 scroll하는 함수
    goSection(idx){
      const target=document.getElementsByClassName(this.$refs.section[idx].$el._prevClass)[0]
      //메뉴바 height
      const tabY=50;
      //컴포넌트 top좌표
      const sectionTop=target.offsetTop;
      console.log(sectionTop-tabY)
      myFunction.scrollToPosition(sectionTop-tabY)
    }
  }
}

</script>

<style>
/* common */
*{
  width:100%;
}
body{
  margin:0px;
  padding:0px;
  display:block;
}
::-webkit-scrollbar{
  display: none;
}

/* tab */
.container-tabs{
    position:fixed;
    width: 100%;
    height: 50px;
    background: rgb(214, 205, 205);
    border: 1px solid grey;
    display: flex;
    z-index: 99;
    top:0px
}
.tab{
  border: 1px solid grey;
  height: 100%;
  flex-grow: 1;
}
/* content*/
.container-content{
  margin-top:50px;
}
.section{
  /* padding-top: 50px; */
  height: 100vh;
  padding:10px 20px;
}
</style>