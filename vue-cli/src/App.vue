<template>
  <div>
    <header class="container-tabs">
      <!-- <div class="wrap-tabs"> -->
        <div class="tab" v-for="(tab,index) in componentList" :key="index" @click="goSection(index)">
          <span class="tab-name">{{tab.name}}</span>
        </div>
        <div class="container-contact">
          <div class="container-phone">
            <span class="wrap-icon_phone">
              <img src="@/assets/icon_phone.png" alt="">
            </span>
            <div class="wrap-content_phone"  @click="copy">
              010-8367-0120
            </div>
          </div>
          <div class="container-email">
            <span class="wrap-icon_email">
              <img src="@/assets/icon_email.png" alt="">
            </span>
            <div class="wrap-content_email" @click="copy">
              ryu8701@gmail.com
            </div>
          </div>
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
      // //메뉴바 height
      // const tabY=50;
      //컴포넌트 top좌표
      const sectionTop=target.offsetTop;
      // myFunction.scrollToPosition(sectionTop-tabY)
      myFunction.scrollToPosition(sectionTop)
    },
    copy(e){
      console.log(e)
      const content=document.getElementsByClassName(e.target._prevClass)[0].textContent
      
      if(content){
        navigator.clipboard.writeText(content).then(() => {
				alert('클립보드에 복사되었습니다.');
			})
      }
    }
  }
}

</script>

<style>
/* @font-face {
    font-family: 'NanumSquareRound';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
    font-weight: normal;
    font-style: normal;
} */
@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/nanumsquare.css);
/* common */
*{
  width:100%;
  
}
body{
  margin:0px;
  padding:0px;
  display:block;
  font-family: 'NanumSquare', sans-serif
}

p{
  margin:2px;
}
::-webkit-scrollbar{
  display: none;
}
a{
  text-decoration: none;
}
a:link { color: black; text-decoration: none;}
a:visited { color: black; text-decoration: none;}
a:hover { color: black; text-decoration: none;}

/* tab */
.container-tabs{
    position:fixed;
    width: 15%;
    height: 100vh;
    background: rgb(214, 205, 205);
    border: 1px solid grey;
    display: flex;
    z-index: 99;
    right:0px;
    display:flex;
    flex-direction: column;
}
.tab{
  border: 1px solid grey;
  height: 30px;
  padding:10px;
  text-align: center;
  /* flex-grow: 1; */
}
.container-phone,.container-email{
  display: flex;
}
.wrap-icon_phone,.wrap-icon_email{
  width: 20px;
}
.wrap-content_phone, .wrap-content_email{
  font-size: 10px;
}
.wrap-content_phone:hover, .wrap-content_email:hover{
  cursor:pointer
}

/* content*/
/* .container-content{
  margin-top:50px;
} */
.section{
  /* padding-top: 50px; */
  min-height: 100vh;
  padding:20px 20px;
}
</style>