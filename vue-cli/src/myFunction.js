exports.scrollToPosition=function (position){
    window.scroll({ top: position, behavior: "smooth" })
}
// var topOfElement = document.querySelector('#targetElement').offsetTop - XX;
// window.scroll({ top: topOfElement, behavior: "smooth" });