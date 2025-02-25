import { head } from "lodash-es";


window.addEventListener('scroll', function() {
    const item = document.querySelector('.sms-scroll--wrapper');
    const img1 = document.querySelector('.sms-scroll--image1');
    const img2 = document.querySelector('.sms-scroll--image2');
    const img3 = document.querySelector('.sms-scroll--image3');
    const headline = document.querySelector('.sms-scroll--headline');
    const shadowpink = "sms-textshadow--pink";
    const shadowblue = "sms-textshadow--blue";
    const shadowgreen = "sms-textshadow--green";
    const shortScreen = 1140;
    const midScreen = 1240;
    const bigscreen = 1440;
    
    let bottomOffset, topOffset, colorChangeOffset1, colorChangeOffset2;

    // Check if it's a mobile view
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const isMini = window.matchMedia("(max-width: 375px)").matches;
    if (isMobile && !isMini) {
        // Mobile-specific scroll breakpoints
        bottomOffset = 3600; 
        topOffset = 1600; 
        colorChangeOffset1 = topOffset + 300; // Pink to Blue
        colorChangeOffset2 = colorChangeOffset1 + 600; // Blue to Green
    } 
    else if(isMini) {
        // Mini Mobile-specific scroll breakpoints
        bottomOffset = 3120;
        topOffset = 1680;
        colorChangeOffset1 = topOffset + 300; // Pink to Blue
        colorChangeOffset2 = colorChangeOffset1 + 700; // Blue to Green
    }
    else {
        // Default (Desktop) breakpoints
        bottomOffset = 4500;
        topOffset = 2200;
        colorChangeOffset1 = topOffset + 750; // Pink to Blue
        colorChangeOffset2 = topOffset + 1500; // Blue to Green
    }

    if(window.innerHeight<shortScreen && !isMini && !isMobile) {
        bottomOffset = 4080;
    }
    if(window.innerHeight<=midScreen && !isMini && !isMobile) {
        bottomOffset = 4300;
    }
    if(window.innerHeight<=bigscreen && window.innerHeight>midScreen && !isMini && !isMobile) {
        bottomOffset = 4620;
    }
    //console.log(window.innerHeight);
    let scrollY = window.scrollY || document.documentElement.scrollTop;
    //console.log(scrollY);
    if(scrollY > topOffset) {
        item.classList.add('sms-scroll--sticky');
        item.classList.remove('sms-scroll--bottom');
    }
    // color pink
    if(scrollY < colorChangeOffset1) {
        headline.classList.add('sms-color--pink');
        headline.classList.add(shadowpink);
        headline.classList.remove('sms-color--blue');
        headline.classList.remove(shadowblue);
        img1.style.opacity = 1;
        img2.style.opacity = 0;
    }
    // color blue
    if(scrollY > colorChangeOffset1) {
        headline.classList.add('sms-color--blue');
        headline.classList.add(shadowblue);
        headline.classList.remove(shadowpink);
        headline.classList.remove(shadowgreen);
        headline.classList.remove('sms-color--pink');
        headline.classList.remove('sms-color--green');
        img1.style.opacity = 0;
        img2.style.opacity = 1;
        img3.style.opacity = 0;
    }
    // color green
    if(scrollY > colorChangeOffset2) {
        headline.classList.add('sms-color--green');
        headline.classList.add(shadowgreen);
        headline.classList.remove(shadowblue);
        headline.classList.remove('sms-color--blue');
        img2.style.opacity = 0;
        img3.style.opacity = 1;
    }
    if(scrollY > bottomOffset || scrollY < topOffset) {
        item.classList.remove('sms-scroll--sticky');
        if(scrollY > bottomOffset) {
            item.classList.add('sms-scroll--bottom');
        }
    }
});


