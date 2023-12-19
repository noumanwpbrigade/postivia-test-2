// second owl slider -------

$('.owl-carousel-2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["<img src='../asstes/left.png' alt=''>", "    <img src='../asstes/right.png' alt=''>"],
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})


// first slider
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["<img src='../asstes/arrow-circle-left.png' alt=''>", "    <img src='../asstes/arrow-circle-right.png' alt=''>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


