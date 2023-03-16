<template>
  <div class="container-career">
    <h3>기타활동/이력</h3>
    <ul>
      <li><span class="card_title project">• 개발기간 </span><span>{{ card.period }}</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      school:[
        {date:'2018. 03. ~ 2018. 12. ',content: '부경대학교 동아리연합회장'},
        {date:'2017. 09. ~ 2017. 12. ', content: 'NSU 한국문화교육봉사동아리 Secretary'},
        {date:'2017. 09. ~ 2017. 12. ', content: 'NSU 한인학생회'},
        {date:'2015. 03. ~ 2015. 12. ', content: '부경대학교 경영학부 학생회 사무국장'},
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
</style>