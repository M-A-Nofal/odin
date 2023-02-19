// Scroll To Top  
let scrollSpan = document.querySelector(".up");

window.onscroll = function () {
    if (window.pageYOffset >= 200) {
        scrollSpan.classList.add("show");

    } else {
        scrollSpan.classList.remove("show");
    }
};

scrollSpan.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};

// scroll to section

const allLinks = document.querySelectorAll(".links a");

function scrollToSection(elements) {

    elements.forEach(ele => {

        ele.addEventListener("click", (e) => {

            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({

                behavior: 'smooth'
            });
        });
    });
};

scrollToSection(allLinks);

// play video
let video = document.querySelector(".videosrc");
let btnVideo = document.querySelector(".play-video");

btnVideo.addEventListener("click", () => {
    video.play();
});

// blog show
let show1 = document.getElementById("show1");
let show2 = document.getElementById("show2");
let plusIcon = document.querySelector(".plus-icon");

plusIcon.onclick = (() => {
    show1.style.display = "block";
    show2.style.display = "block";
    plusIcon.remove();
})
