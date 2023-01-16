<template>
    <div class="container-about">
        <div class="container-profile">
            <div class="wrap-photo">
                <img  class="profile-photo" src="@/assets/profile.jpg" alt="hyojeong_photo">
            </div>
            <div class="container-introduce">
                <div class="name">류효정
                    <p class="info_detail">1996.02.22</p>
                </div>
                <div class="info">
                    <p>부경대 경영학부 졸업</p>
                    <p class="info_detail">관광경영학 전공</p>
                    <p>부산대 블록체인 개발자 양성과정 수료</p>
                    <p>(주)바다플랫폼 근무</p>
                    <p class="info_detail">연구개발팀장</p>
                </div>
                <a class="channel" href="https://hyodventure.notion.site/">개발블로그</a>
            </div>
        </div>
        <div class="contianer-skill">
            <img class="skill" src="@/assets/skill.png" alt="hyojeong_skill">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.container-about{
    width: 100%;
    /* height: 100vh; */
    /* background: rgb(214, 205, 205); */
    /* border: 1px solid grey; */
}
.container-profile{
    width: 100%;
    display: flex;
}
.wrap-photo{
    width: 30%;
}
.profile-photo{
    height: 200px;
    object-fit: cover;
}
.conatainer-introduce{
    width: 70%;
}
.name{
   
    width:100%;
    font-size: 30px;
    margin-bottom: 10px;
}
.info_detail{
    font-size: 12px;
    font-weight: 400;
    color: rgb(40, 37, 37);
}
.channel{
    font-size: 12px;
}
.skill{
   width: 500px;
   margin:20px 0px;
}
</style>