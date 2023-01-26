<template>
  <div class="container-project">
    <div class="container-card">
      <div class="card" v-for="(card,idx) in cardList" :key="idx">
        <h1 class="card_name">{{ card.name }}</h1>
        <div class="card_content">
          <div><span class="card_title">개발기간</span><span>{{ card.period }}</span></div>
          <div><span  class="card_title">역할</span> <span>{{ card.roll }}</span></div>
          <div><span  class="card_title">언어 및 프레임워크</span><span>{{ card.tool }}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      cardList:[
        {name:'식품정보 웹', period: '2021.03.~2021.08. (5개월)', roll: '서비스 기획, 디자인, 프론트엔드', tool:'Vue2, HTML/CSS, JavaScript'},
        {name:'식품정보 웹 V2', period: '2022.04.~2022.07. (4개월)', roll: '서비스 기획, 프론트엔드', tool:'Vue2, HTML/CSS, JavaScript'},
        {name:'카페 커뮤니티', period: '2022.02.~(진행중)', roll: '서비스 기획, 디자인, 프론트엔드', tool:'Vue2, HTML/CSS, JavaScript'}
      ]
    }
  }
}
</script>

<style>
.container-project{
    width: 100%;
    /* height: 100vh; */
    /* background: rgb(214, 205, 205);
    border: 1px solid grey; */
}
.container-card{
  width:90%;
  margin:10px;
}
.card{
  width: 50%;

}
.card_name{
  color:var(--main-color)
}
.card_title{
  font-weight: bold;
}
</style>