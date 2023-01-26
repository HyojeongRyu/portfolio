<template>
  <div>
    <header class="container-tabs">
      <!-- <div class="wrap-tabs"> -->
        <ul class="tab" :class="{'_on':index===onTab}" v-for="(tab,index) in componentList" :key="index" @click="goSection(index)">
          <li class="tab-name">{{tab.name}}</li>
        </ul>
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
  data(){
      return{
        onTab:0,
        lastScroll:0
      }
  },
  created(){
    console.log(this.componentList)
  },
  mounted(){
    window.addEventListener('scroll',this.curTab)
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
    curTab(){ //스크롤시 현재 탭 this.onTab에 할당
      const result=myFunction.scrollDirection(this.lastScroll);
      this.lastScroll=result.lastScroll;
      
      if(result.direction==='up'){
        const prevSection=document.getElementsByClassName(this.$refs.section[this.onTab-1].$el._prevClass)[0]
        const prevMid=prevSection.offsetTop+prevSection.offsetHeight/2
        
        window.scrollY<prevMid&&this.onTab--
      }else if(result.direction==='down'){
        const curSection=document.getElementsByClassName(this.$refs.section[this.onTab].$el._prevClass)[0]   
        const curMid=curSection.offsetTop+curSection.offsetHeight/2
        
        window.scrollY>curMid&&this.onTab++
      }

      // if(result.direction==='up'){
      //   const prevTop=document.getElementsByClassName(this.$refs.section[this.onTab+1].$el._prevClass)[0].offsetTop
      //   const curTop=document.getElementsByClassName(this.$refs.section[this.onTab].$el._prevClass)[0].offsetTop
      //   if(window.scrollY<=(curTop-prevTop)/2){
      //     this.onTab--
      //   }
      // }else if(result.direction==='down'){
      //   const nextTop=document.getElementsByClassName(this.$refs.section[this.onTab+1].$el._prevClass)[0].offsetTop
      //   if(window.scrollY>=nextTop/2){
      //     this.onTab++
      //   }
      // }
    },
    // //현재 섹션 어딘지 반환하는 함수
    // curSection(){
    //   // const prevTop=document.getElementsByClassName(this.$refs.section[this.onTab-1].$el._prevClass)[0].offsetTop
    //   const curTop=document.getElementsByClassName(this.$refs.section[this.onTab].$el._prevClass)[0].offsetTop
    //   const nextTop=document.getElementsByClassName(this.$refs.section[this.onTab+1].$el._prevClass)[0].offsetTop
    //   if(nextTop&&window.scrollY>=nextTop){
    //     this.onTab++
    //   }
    //   if(curTop&&window.scrollY<curTop){
    //     this.onTab--
    //   }
    // },
    //idx번째 섹션으로 scroll하는 함수
    goSection(idx){
      const target=document.getElementsByClassName(this.$refs.section[idx].$el._prevClass)[0]
      // //메뉴바 height
      // const tabY=50;
      //컴포넌트 top좌표
      const sectionTop=target.offsetTop;
      // myFunction.scrollToPosition(sectionTop-tabY)
      myFunction.scrollToPosition(sectionTop)
      this.onTab=idx
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
:root {
  --main-color: rgb(74,118,201);

}
body{
  margin:0px;
  padding:0px;
  display:block;
  font-family: 'NanumSquare', sans-serif
}
ul,li,ol{
  list-style: none;
  margin:0px;
  padding: 0px;

}

p{
  margin:2px;
}
::-webkit-scrollbar{
  /* display: none; */
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
    /* background: rgb(214, 205, 205); */
    /* border: 1px solid grey; */
    display: flex;
    z-index: 99;
    right:0px;
    flex-direction: column;
   
    justify-content: center;
}
.tab{
  /* border: 1px solid grey; */
  display: flex;
  height: 30px;
  padding:10px;
  text-align: center;
  vertical-align: middle;
  /* flex-grow: 1; */
  border-radius: 7px;
}
.tab:hover{
  cursor: pointer;
}
.tab-name{
  text-align: center;
  margin:auto
}
.tab._on{
  background-color: var(--main-color);
  color: white;
}
.container-contact{
  position: absolute;
  bottom: 10px;
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