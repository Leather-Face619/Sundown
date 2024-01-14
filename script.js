const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
    
  });

var elem = document.querySelector("#elem-container")
var fixed = document.querySelector("#fImgs")
elem.addEventListener("mouseenter", () => {
    fixed.style.display = "inline"
})
elem.addEventListener("mouseleave", () => {
    fixed.style.display = "none"
})

var elem2= document.querySelectorAll(".elem")
elem2.forEach((e)=>{
    e.addEventListener("mouseenter", () => {
        var img = e.getAttribute("data-img")
    fixed.style.backgroundImage =  `url(${img})`
   
})
})

/////////////       Curser   //////////////////////
var cur = document.querySelector("#cursor")
var pg1 = document.querySelector(".swiper")
function cursorEffect() {
    pg1.addEventListener("mousemove", function (dets) {

        /* pure js 
        cur.style.left= dets.x + "px"
        cur.style.top= dets.y + "px"*/

        gsap.to(cur, {
            x: dets.x,

            y: dets.y
        })
    })
    pg1.addEventListener("mouseenter", function () {
        gsap.to(cur, {
            scale: 1,

            opacity: 1
        })
    })
    pg1.addEventListener("mouseleave", function () {
        gsap.to(cur, {
            scale: 0,
            opacity: 0
        })
    })
}
cursorEffect()
var menu = document.querySelector("#nav2")
var full = document.getElementById("full-scr")
var navImg = document.querySelector("nav img")
var Flag = 0
menu.addEventListener("click",function () {
    if (Flag == 0) {
        full.style.top = 0
    navImg.style.opacity = 0
    Flag++
    } else {
        full.style.top = "-100%"
        navImg.style.opacity = 1
        Flag = 0
    }
    
})

var lo = document.querySelector("#loader")
setTimeout(() => {
    lo.style.top = "-100%"
}, 4000);