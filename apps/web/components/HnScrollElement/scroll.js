console.log("eyoo");

window.addEventListener('scroll', function() {
    const item = document.querySelector('.sms-scroll--wrapper');
    let bottomOffset = 4500;
    let topOffset = 2200;
    let scrollY = window.scrollY || document.documentElement.scrollTop;
    console.log('Scroll Y: ' + scrollY);
    if(scrollY > topOffset) {
        item.classList.add('sms-scroll--sticky');
        item.classList.remove('sms-scroll--bottom');
    }
    if(scrollY > bottomOffset || scrollY < topOffset) {
        item.classList.remove('sms-scroll--sticky');
        if(scrollY > bottomOffset) {
            item.classList.add('sms-scroll--bottom');
        }
    }
});


