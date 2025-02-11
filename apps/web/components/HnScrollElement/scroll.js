
document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".sms-scroll--wrapper");
    const images = [
        document.querySelector(".sms-scroll--image1"),
        document.querySelector(".sms-scroll--image2"),
        document.querySelector(".sms-scroll--image3")
    ];

    let wrapperOffsetTop = wrapper.offsetTop;
    
    window.addEventListener("scroll", function () {
        let scrollY = window.scrollY;

        // Make wrapper sticky
        if (scrollY >= wrapperOffsetTop) {
            wrapper.style.position = "fixed";
            wrapper.style.top = "0";
            wrapper.style.width = "100%";
        } else {
            wrapper.style.position = "static";
        }

        // Calculate opacity changes
        let scrollOffset = Math.max(0, scrollY - wrapperOffsetTop);
        let step = window.innerHeight / images.length;

        images.forEach((img, index) => {
            let start = step * index;
            let end = step * (index + 1);

            if (scrollOffset >= start && scrollOffset < end) {
                let progress = (scrollOffset - start) / (end - start);
                img.style.opacity = 1 - progress;
                if (index + 1 < images.length) {
                    images[index + 1].style.opacity = progress;
                }
            } else if (scrollOffset >= end) {
                img.style.opacity = 0;
            } else {
                img.style.opacity = index === 0 ? 1 : 0;
            }
        });
    });
});



