<template>
  <div class="container-project">
    <div class="container-card">
      <div class="card" v-for="(card,idx) in cardList" :key="idx">
        <div class="card_name">{{ card.name }}</div>
        <ul class="card_content">
          <li><span class="card_title">• 개발기간 </span><span>{{ card.period }}</span></li>
          <li><span  class="card_title">• 역할 </span> <span>{{ card.roll }}</span></li>
          <li><span  class="card_title">• 언어 및 프레임워크 </span><span>{{ card.tool }}</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      cardList:[
        {detail: 'QR 스캔시 식품 정보를 알려주는 웹 (Mobile 전용)', name:'식품정보 웹', period: '2021.03.~2021.08. (5개월)', roll: '서비스 기획, 디자인, 프론트엔드', tool:'Vue2, HTML/CSS, JavaScript'},
        {detail: '식품 정보 웹 ver.2 (Mobile 전용)', name:'식품정보 웹 V2', period: '2022.04.~2022.07. (4개월)', roll: '서비스 기획, 프론트엔드', tool:'Vue2, HTML/CSS, JavaScript'},
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
  padding:5px;
  margin:20px 0px;
}
.card_name{
  color:var(--main-color);
  margin-bottom: 5px;
  font-size: 20px;
  font-weight:800;
}
.card_title{
  font-weight: bold;
  font-size: 17px;
}
.card_content{
  padding:20px 15px;
  border-radius: 15px;
  max-width:100%;
  /* border: solid var(--font-color) 1px; */
  box-shadow: 1px 1px 5px var(--font-color) ;
  line-height: 2;
  
}
</style>