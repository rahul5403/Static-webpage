window.addEventListener("scroll", function(){
    var navi = document.querySelector("nav");
    navi.classList.toggle("sticky",window.scrollY>0)
    
})

