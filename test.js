var tl = gsap.timeline({scrollTrigger : {
    trigger: "#main",
    start: "top top",
    pin: true,
    scrub: 3

 }

});



tl.
to("#topimage",{
    top:"-15%", 
    ease:Power1,
},"same")
.to("#btm",{
    top:"15%",   
    ease:Power1,
},"same")
.to("#btmimg",{
    top:"15%",
    ease:Power1,
},"same")


.to("#a h3",{
    top:"-100%",
    
    ease:Power1,
},"same")
.to("#a h4",{
    top:"0%",
    delay:.2,
    ease:Power1,
},"same")

.to("#b h3",{
    top:"-100%",   
    ease:Power1,
},"same")
.to("#b h4",{
    top:"0%",
    delay:.2,
    ease:Power1,
},"same")
.to("#c h3",{
    top:"-100%",
    ease:Power1,
},"same")
.to("#c h4",{
    top:"0%",
    delay:.2,
    ease:Power1,
},"same")




.to("#topimage",{
    top:"-110%", 
    ease:Power1,
},"same same")
.to("#btm",{
    top:"-55%",   
    ease:Power1,
},"same same")
.to("#btmimg",{
    top:"-55%",
    ease:Power1,
},"same same")
 
.to("h4",{
    top:"-100%",
    ease:Power1,
},"same same")


.to("h1",{
    top:"30%",
    ease:Power1,
},)

