<template>
  <div class="container-project">
    <div class="container-card project">
      <h2>프로젝트</h2>
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
      <div class="container-cowork">
      
          <div class="wrap-cowork">
            <h3>Feedback</h3>
            <ul>
              <li class="wrap-comment" v-for="(item, idx) in commentList" :key="idx">
                <div class="man">
                  <img class="imoticon" :src="item.face">
                  <span>{{ item.man }}</span>
                </div>
                <div class="fig-comment">
                  <span class="comment" v-html="item.comment" ></span>
                </div>
              </li>
            </ul>
          </div>
        
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
      ],
      commentList:[
        { 
          face:require('@/assets/face.png'),
          man: '남*규 (웹 디자이너)',
          comment:`항상 팀원들을 생각하고 <b>책임감</b>을 가지고 일하는 개발자입니다.<br>
                  팀장으로서 모두의 <b>일정을 조율</b>하고 <b>효율적</b>인 방법을 제안해주기도 했습니다.<br>
                  또한 유연한 <b>해결능력</b>으로 문제를 해결하여 도움이 많이 되었습니다.`
        },
        // {
        //   face:require('@/assets/face_02.png'),
        //   man: '남*우 (백엔드 개발자)',
        //   comment:`항상 팀원들을 생각하고 프로젝트에 <b>책임감</b>을 가지고 일하는 개발자입니다.<br>
        //           팀장의 위치에서 모두가 프로젝트 일정을 맞춰 잘 소화할 수 있도록 <b>조율</b>하여 <b>효율적</b>인 방법을 제안해 주기도 하였습니다.<br>
        //           또한 어떠한 문제가 일어나도 유연한 <b>문제해결능력</b>으로 프로젝트 기간 안에 문제를 해결하여 도움이 많이 되었습니다.`
        // }
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
  margin-bottom:20px;
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
  object-fit: cover;
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
/* comment */
.wrap-comment{
  display: flex;
  height: 200px;
}
.man{
  width:30%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.imoticon{
  width:100px;
  object-fit: contain;
  height: 150px;
}
.fig-comment{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width:70%;
  word-break: keep-all;
  position: relative;
  /* border: 1px solid #484848 ; */
  border-radius: 50px;
   box-shadow: 1px 1px 5px var(--font-color) ;
}
/* 삼각형 테두리 */
.fig-comment:after {
  border-color: transparent #484848 transparent transparent;
  border-style: solid;
  border-width: 12px;
  content: '';
  display: block;
  left: -25px;
  position: absolute;
  top: 90px;
  width: 0;
  z-index: 0;
}
/* 삼각형 */
.fig-comment:before{
  border-color: transparent white transparent transparent;
  border-style: solid;
  border-width: 12px;
  content: '';
  display: block;
  left: -24.5px;
  position: absolute;
  top: 90px;
  width: 0;
  z-index: 1;
}
</style>