    // Mobile SubNavigation 

    if (window.innerWidth < 666) {

    } else {

    }
    
    console.log(window.innerWidth); // comment
    
    
    
    // Desktop SubNavigation
    var secondChild = document.getElementById('show-subnav');
    var subnav = document.getElementById('sub-nav');

    function show() {
        
        subnav.style.opacity=1;
        subnav.style.visibility= 'visible';
    }
    
    function hide(){
        subnav.style.opacity=0;
        subnav.style.visibility= 'hidden';
    }

    
    // Multi-form section

    var firstFrom = document.getElementById('firstForm');
    var secondForm = document.getElementById('secondForm');
    var buscarprimaryBtn = document.getElementsByClassName('buscar-primary-btn')[0];
    var buscarSecondarBtn = document.getElementsByClassName('buscar-secondary-btn')[0];

    document.getElementById('secondForm').style.display = 'none';

    function showfirstform() {
        firstFrom.style.display = 'block';
        secondForm.style.display = 'none';

        buscarprimaryBtn.style.backgroundColor = "var(--bg-primary)";
        buscarprimaryBtn.style.color = "white";
        buscarSecondarBtn.style.backgroundColor = "#D9D7D7";
        buscarSecondarBtn.style.color = "#686868";

    }

    function showSecondform() {
        firstFrom.style.display = 'none';
        secondForm.style.display = 'block';

        buscarprimaryBtn.style.backgroundColor = "#D9D7D7";
        buscarprimaryBtn.style.color = "#686868";

        buscarSecondarBtn.style.backgroundColor = "var(--bg-primary)";
        buscarSecondarBtn.style.color = "white"
    }

    // JS for calendar

    var type = document.getElementById("dateInput");

    type.addEventListener('focus', function () {
        if (this.type === "text") {
            this.type = 'date';
        } else {
            this.type = 'text';  // Use assignment operator '=' here
        }
    });

    type.addEventListener('blur', function () {
        if (this.type === 'date') {
            this.type = 'text';
        }
    });


    // JavaScritp for responsive 
    // Navigation for small devices

    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    })




    // Noticias custom slider
    
    const fsimg1 = document.getElementById('fs-img1');
    const fsimg2 = document.getElementById('fs-img2');

    const btnleft = document.getElementsByClassName('btn-left')[0];
    const btnright = document.getElementsByClassName('btn-right')[0];

   btnright.addEventListener('click', ()=> {
    if (fsimg1.style.display == 'block'){
        fsimg1.style.display = 'none';
        fsimg2.style.display = 'block';
    } else {
        fsimg1.style.display = 'block';
        fsimg2.style.display = 'none';
    }
        }) 

    btnleft.addEventListener('click', function (){
    if (fsimg2.style.display == 'block'){
        fsimg2.style.display = 'none';
        fsimg1.style.display = 'block';
    } else {
        fsimg1.style.display = 'none';
        fsimg2.style.display = 'block';
    }
        })


    // Banner Slider
    const bannerS1 = document.getElementById('bannerS1');
    const bannerS2 = document.getElementById('bannerS2');
    const bannerS3 = document.getElementById('bannerS3');

    const btn1 =document.getElementById('btn1');
    const btn2 =document.getElementById('btn2');
    const btn3 =document.getElementById('btn3');

    bannerS2.style.display = 'none';
    bannerS3.style.display = 'none';

    btn1.addEventListener('click', function (){
            bannerS1.style.display = 'block';
            bannerS2.style.display = 'none';
            bannerS3.style.display = 'none';
            btn1.style.backgroundColor = "#9b9595ad"
            btn2.style.backgroundColor = "#FFF"
            btn3.style.backgroundColor = "#FFF"
    })

    btn2.addEventListener('click', function(){
            bannerS1.style.display = 'none';
            bannerS2.style.display = 'block';
            bannerS3.style.display = 'none';
            btn1.style.backgroundColor = "#FFF"
            btn2.style.backgroundColor = "#9b9595ad"
            btn3.style.backgroundColor = "#FFF"

    })

    btn3.addEventListener('click', function (){
            bannerS1.style.display = 'none';
            bannerS2.style.display = 'none';
            bannerS3.style.display = 'block';
            btn1.style.backgroundColor = "#FFF"
            btn2.style.backgroundColor = "#FFF"
            btn3.style.backgroundColor = "#9b9595ad"
 
    })



    // code: show sub-nav on click :



