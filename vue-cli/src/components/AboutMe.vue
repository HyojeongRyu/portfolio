<template>
    <div class="container-about">
        <div class="container-profile">
            <div class="wrap-photo">
                <img  class="profile-photo" src="@/assets/profile.png" alt="hyojeong_photo">
            </div>
            <div class="container-introduce">
                <div class="name">류효정
                    <p class="name_detail">1996.02.22</p>
                </div>
                <div class="container-info">
                    <div class="wrap-info">
                        <div class="info_title">• 부경대 경영학부 졸업</div>
                        <div class="info_detail">관광경영학 전공</div>
                    </div>
                    <div class="wrap-info">
                        <div class="info_title">• 부산대 블록체인 개발자 양성과정 수료</div>
                    </div>
                    <div class="wrap-info">
                        <div class="info_title">• (주)바다플랫폼 근무</div>
                        <div class="info_detail">연구개발팀장 (2021.03 ~ 2022.11)</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-experience">
            <div class="container-skill">
                <div class="wrap-skill" v-for="(skill,idx) in skillList" :key="idx">
                    <div class="skill_title">{{skill.name}}</div>
                    <div class="card skill" v-for="(list, listIdx) in skill.list" :key="listIdx">
                        <ul class="wrap-content skill">
                            <li class="skill" v-for="(itm,idx) in list.logo" :key="idx">
                                <div class="card_img skill">
                                    <img :src="itm">
                                </div>
                                <div class="skill_detail">{{ list.detail[idx] }}</div>
                            </li>
                            
                        </ul>
                  
                    </div>
                </div>
            </div>
            <div class="container-work">
                <div class="wrap-work" v-for="(work,idx) in workList" :key="idx">
                    <h3>{{work.name}}</h3>
                    <div class="card work" v-for="(list, listIdx) in work.list" :key="listIdx">
                        <div class="wrap-content work">
                            <div class="card_img work">
                                <img :src="list.logo">
                            </div>
                            <ul class="card_content work">
                                <li class="content_date work">{{ list.date }}</li>
                                <li class="card_title work">{{ list.title }}</li>
                                <li class="card_detail work" >{{ list.detail }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-card channel">
                <h3>채널</h3>
                <div class="wrap-card channel">
                    <a :href="card.link" target="_blank" class="card channel" v-for="(card,idx) in channelList" :key="idx">
                            <div class="card_img channel">
                                <img :src="card.imgSrc">
                            </div>
                            <ul class="card_content channel">
                                <li class="card_title channel"><span > {{ card.name }}</span></li>
                                <li class="card_detail channel"><span> {{ card.detail }}</span></li>
                            </ul>
                         
                    </a>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            channelList:[
                {name:'GitHub',detail:'학습내용, 프로젝트 형상 등을 관리합니다',imgSrc:require('@/assets/github-logo.png'),link:'https://github.com/HyojeongRyu'},
                {name:'Notion',detail:'학습내용을 포스팅합니다',imgSrc:require('@/assets/notion-logo.svg'),link:'https://hyodventure.notion.site/f56bd3940d6b4d01bf04c1b1ed64e657'},
            ],
            workList:[
                {
                    name:'WORK',
                    list:[
                        {logo: require('@/assets/vada_logo.png'), date: '2021. 03. ~ 2022. 11.  (1년 7개월)', title:'프론트엔드, 서비스 기획, 경영지원', detail:'스타트업 초기멤버'},
                    ]
                },
                {
                    name:'EDUCATION',
                    list:[
                        {logo: require('@/assets/pnu_logo.png'), date: '2020. 07. ~ 2020. 12.  (6개월)', title: '부산대 블록체인 개발자 양성과정',detail:'조장'}
                    ]
                },
            ],
            skillList:[
                {
                    name:'Front-End',
                    list:[
                        {
                            logo:[require('@/assets/skill-logo/html.png'),require('@/assets/skill-logo/css.png'),require('@/assets/skill-logo/vue.png'), require('@/assets/skill-logo/js.png')],
                            detail: ['HTML5', 'CSS3', 'Vue2',  'JS(ES6)'],
                        }
                    ]
                },
                {
                    name:'Back-End',
                    list:[
                        {
                            logo:[require('@/assets/skill-logo/nodejs.png'),require('@/assets/skill-logo/rest-api.png')],
                            detail: ['Node.js', 'RESTful API(JSON)']
                        }
                    ]
                },
                {
                    name:'Server',
                    list:[
                        {
                            logo:[require('@/assets/skill-logo/nginx.png'),require('@/assets/skill-logo/ncp.png'),require('@/assets/skill-logo/aws.png')],
                            detail: ['NginX', 'NCP Server', 'AWS EC2']
                        },
                    ]
                },
                {
                    name:'DB',
                    list:[
                        {
                            logo:[require('@/assets/skill-logo/mysql.png'),require('@/assets/skill-logo/maria.png')],
                            detail: ['MySQL', 'MariaDB']
                        },
                    ]
                },
                {
                    name:'OS',
                    list:[
                        {
                            logo:[require('@/assets/skill-logo/ubuntu.png')],
                            detail: ['Ubuntu']
                        },
                    ]
                },
                {
                    name:'Collaboration & Design & Document',
                    list:[
                        {
                            logo:[require('@/assets/skill-logo/github.png'),require('@/assets/skill-logo/figma.png'),require('@/assets/skill-logo/notion.png'),require('@/assets/skill-logo/office.png')],
                            detail: ['GitHub', 'Figma', 'Notion', 'MsOffice']
                        },
                    ]
                },
            ]
        }
    }

}
</script>

<style>
@media (max-width: 850px) {
 .card_title.work{
    font-size: 14.5px;
 }
 .skill_title{
    font-size: 15px;
 }
}
/* profile */
.container-about{

    width: 100%;
    /* border-style: none solid;
    border-color: var(--main-color); */
    /* height: 100vh; */
    /* background: rgb(214, 205, 205); */
    /* border: 1px solid grey; */
}
.container-profile{
    width: 100%;
    display: flex;
}
.container-experience{
    width: 100%;
}
.container-experience img{
    width:100%
}
.wrap-photo{
    width:200px;
    height: 250px;
}
.profile-photo{
    width:190px;
    height: 250px;
    /* object-fit: cover; */
}
.container-introduce{
    width: 70%;
    margin-left: 15px;
    padding:2px;
}
.name{
   
    width:100%;
    font-size: 22px;
    margin-bottom: 10px;
    font-weight: 600;
}
.name_detail{
    font-size: 14px;
    font-weight: 400;
    color: rgb(40, 37, 37); 
}
.wrap-info{
    /* padding: 2px 0px 0px 1px; */
    margin-bottom: 10px;
}
.info_title{
    font-weight: 600;
}
.info_detail{
    font-size: 12px;
    font-weight: 400;
    color: rgb(40, 37, 37);
    margin-left: 13px;
}

/* skill */
.container-skill{
    margin-top:20px;
    margin-bottom: 40px;
    width:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.wrap-skill{
    width: 48%;
    margin-bottom: 15px;
    
    /* margin-right: 30px; */
}
.card.skill{
    /* margin: 20px 10px; */
    display: flex;
    width:100%;
    height: 90px;
    max-width: 550px;
    box-shadow: none;
    border: solid 0.5px grey;
    flex-direction: row;
    justify-content: flex-start;
}
/* .wrap-skill_img{
    display: flex;
    flex-direction: row;
} */
.skill{
    width:auto;
    margin: 5px;
}
.card_img.skill{
    text-align: center;
    display: flex;
    justify-content: center;
}
.card_img.skill img{
    width:30px;
    height: 30px;
    
}
.skill_detail{
    text-align: center;
    margin-top: 2px;
}
.wrap-content.skill{
    display: flex;
    
}
.skill_title{
    font-weight: 600;
    /* font-size: 17px; */
}

/* work */
.container-work{
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 80px;
}
.wrap-work{
    width:48%;
}
.card.work{
    max-width: 550px;
    width:100%;
    height: 80px;
    padding: 15px 5px;
    flex-direction: row;
    box-shadow: none;
    border: solid 0.5px grey;
    margin:0px;
}
.wrap-content.work{
    margin:10px;
}
.card_img.work{
    width:50px;
    
}
.card_content.work{
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: start;
}
.content_date.work{
    padding-left: 1px;
    font-size: 13px;
}
.card_detail.work{
    font-size: 13px;
    padding-left: 1px;
}

/* channel */
.container-card.channel{
  margin-bottom: 50px;
}
.wrap-card.channel{
  display: flex;
  flex-direction: row;
  justify-content: space-around;

}
.card.channel{
    transition: all 0.2s linear;
    padding:20px 10px;
    width: 150px;
    height: 200px;
    display: flex;
    flex-direction: column;
    vertical-align: middle;
    word-break: keep-all;
    justify-content: space-around;
}
.card.channel:hover{
    transform: scale(1.1)
}
.card_img.channel{
    width:100px;
}
.card_img.channel img{
    width:100%;
    object-fit: contain;
}
.channel li{
    text-align: center;
}
.card_title.channel{
    font-size: 17px;
    margin: 10px 0px;
}
.card_detail.channel span{
    line-height: 20px;
}

</style>