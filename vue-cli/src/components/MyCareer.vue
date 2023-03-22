<template>
  <div class="container-career">
    <h3>기타활동/이력</h3>
    <ul>
      <li class="card career" v-for="(career,idx) in careerList" :key="idx">
        <div class="wrap-card career">
          <span class="card_title career">• {{career.name}} </span>
          <div  class="card_content career">
            <li v-for="(list, listIdx) in career.list" :key="listIdx">
              <span class="content_date">{{ list.date }}</span><span>{{ list.content }}</span>
            </li>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      careerList:[
        {
          name:'수상내역',
          list:[
            {date: '2020. 11.', content:'고려대 팬데믹 블록체인 아이디어톤 (장려상)'},
            {date: '2019. 02.', content:'2018 학교를 빛낸 얼굴 (총장상)'}
          ]
        },
        {
          name:'교내활동',
          list:[
            {date:'2018. 03. ~ 2018. 12. ',content: '부경대학교 동아리연합회장'},
            {date:'2017. 09. ~ 2017. 12. ', content: 'NSU 한국문화 교육동아리 Secretary'},
            {date:'2017. 09. ~ 2017. 12. ', content: 'NSU 한인학생회'},
            {date:'2015. 03. ~ 2015. 12. ', content: '부경대학교 경영학부 학생회 사무국장'}
          ]
        },

      ]
    }
  }
}
</script>

<style>
.container-career{
    width: 100%;
    /* height: 200px; */
    /* background: rgb(214, 205, 205);
    border: 1px solid grey; */
}
.card.career{
  width:80%;
  padding: 12px 0px 15px 20px;
  max-width:650px;
}
.wrap-card.career{
  /* margin-bottom: 10px; */
 
}
.card_title.career{
  font-size:17px;
}
.card_content.career{
  margin-top: 5px;
  padding-left: 10px;
}
.content_date{
  font-weight: 600;
  margin-right: 7px;
}
</style>