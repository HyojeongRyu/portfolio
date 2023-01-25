//smooth 하게 스크롤
exports.scrollToPosition=function (position){
    window.scroll({ top: position, behavior: "smooth" })
}

//scroll 방향 반환
exports.scrollDirection=function(last){
    const cur=window.scrollY
    const direction=last<cur?'down':'up'
    const lastScroll=cur;
    return {lastScroll,direction}
}
// var topOfElement = document.querySelector('#targetElement').offsetTop - XX;
// window.scroll({ top: topOfElement, behavior: "smooth" });