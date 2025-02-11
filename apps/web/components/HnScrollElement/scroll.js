import { head } from "lodash-es";

console.log("eyoo");

window.addEventListener('scroll', function() {
    const item = document.querySelector('.sms-scroll--wrapper');
    const img1 = document.querySelector('.sms-scroll--image1');
    const img2 = document.querySelector('.sms-scroll--image2');
    const img3 = document.querySelector('.sms-scroll--image3');
    const headline = document.querySelector('.sms-scroll--headline');
    const shadowpink = "sms-textshadow--pink";
    const shadowblue = "sms-textshadow--blue";
    const shadowgreen = "sms-textshadow--green";
    let bottomOffset = 4500;
    let topOffset = 2200;
    let scrollY = window.scrollY || document.documentElement.scrollTop;
    if(scrollY > topOffset) {
        item.classList.add('sms-scroll--sticky');
        item.classList.remove('sms-scroll--bottom');
    }
    // color pink
    if(scrollY < topOffset+750) {
        headline.classList.add('sms-color--pink');
        headline.classList.add(shadowpink);
        headline.classList.remove('sms-color--blue');
        headline.classList.remove(shadowblue);
        img1.style.opacity = 1;
        img2.style.opacity = 0;
    }
    // color blue
    if(scrollY > topOffset+750) {
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
    if(scrollY > topOffset+1500) {
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


