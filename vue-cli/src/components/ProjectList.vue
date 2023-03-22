<template>
  <div class="container-project">
    <div class="container-card project">
      <h3>프로젝트</h3>
      <div class="wrap-card project">
        <a class="card project" :href="card.link" target="_blank" v-for="(card,idx) in cardList" :key="idx">
          <div class="card_name project">{{ card.name }}</div>
            <div class="wrap-content">
              <div class="card_img project">
                <img :src="card.imgSrc">
              </div>
              <ul class="card_content project">
                  <li><span class="card_title project">• 개발기간 </span><span>{{ card.period }}</span></li>
                  <li><span class="card_title project">• 개발인원 </span><span>{{ card.men}}</span></li>
                  <li><span class="card_title project">• 기여도 </span><span>{{ card.percentage}}</span></li>
                  <li><span class="card_title project">• 역할 </span> <span>{{ card.roll }}</span></li>
                  <li><span class="card_title project">• 언어 및 프레임워크 </span><span>{{ card.tool }}</span></li>
                  
              </ul>
            </div>
            <div class="card_curtain project">
                  <div class="curtain_detail project">바로가기</div>
            </div> 
        </a>
      </div>
        <!-- <div class="card_img">
          <img src="" alt="">
        </div> -->
      
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      cardList:[
        {detail: '식품 정보 웹 ver.2 (Mobile 전용)', name:'식품정보 웹 V2', period: '2022.05.~2022.07. (3개월)', roll: '프론트엔드, 서비스 기획',men:'1명',percentage:'100%', tool:'Vue2, HTML/CSS, JavaScript',imgSrc:require('@/assets/safeean2.png'),link:'http://qr.safeean.com/beta'},  
        {detail: 'QR 스캔시 식품 정보를 알려주는 웹 (Mobile 전용)', name:'식품정보 웹', period: '2021.03.~2021.08. (5개월)', roll: '프론트엔드,서비스 기획, 디자인',men:'2명', percentage:'40%',tool:'Vue2, HTML/CSS, JavaScript',imgSrc:require('@/assets/safeean1.png'),link:'http://qr.safeean.com/'},
        {detail: '', name:'카페 커뮤니티', period: '2022.02.~(진행중)', roll: '프론트엔드, 백엔드 (회원가입/로그인 파트) ',men:'3명', percentage:'40%', tool:'Vue2, HTML/CSS, JavaScript',imgSrc:require('@/assets/cafe.png'),link:'https://github.com/HyojeongRyu/web-project'}
      ]
    }
  },
  methods:{
    onModal(){

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
/* project-card */
.container-card{
 
}
.wrap-content{
  display: flex;
  flex-direction: row;
  justify-content: center;
  vertical-align: middle;
  /* margin:5px 0px; */
  margin:auto;
}
.wrap-card.project{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content:flex-start;
}
.card_curtain.project{
  
  min-height: 200px;
 
}
.card.project{
  
  padding:10px 10px;
  min-width: 370px;
  width: 45%;
  min-height: 280px;
  margin:20px 0px;
  /* min-height: 200px; */
  /* width: 100%; */
}
.card_img.project{
  width: 30%;
  max-width: 150px;
  height: 200px;
}
.card_img.project img{
  border-radius: 15px;
  width:100%;
  
}
.card.project:hover{
  cursor:pointer;
  transform: scale(1.05)
}

.card_name.project{
  color:var(--main-color);
  margin-bottom: 10px;
  font-size: 20px;
  font-weight:800;
  margin-left: 2px;
}
.card_title.project{
  font-size: 17px;
}
.card_content.project{
  width:70%;
  padding-left: 10px;
  min-height: 200px;
  /* box-shadow: 1px 1px 5px var(--font-color) ; */
  line-height: 1.7;  
  vertical-align: middle;
  display: flex;
  flex-direction: column;
  justify-content: center;
  word-break: keep-all;
}
</style>