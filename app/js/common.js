var allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        var observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })
        // if (el.loaded()) {
        //     el.classList.add('is-loaded');
        // }
    })
}


allLozadImg();


// scroll animations
var anim = document.querySelectorAll('.anim')

function scrollAnimations() {
    if (anim.length) {
        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                var el = entry.target;
                if (entry.isIntersecting) {
                    if (el.classList.contains('anim-js')) {

                    } else {
                        el.style.animationDelay = el.dataset.animDelay + 'ms';
                        el.style.animationDuration = el.dataset.animDuration + 'ms';
                        el.style.animationName = el.dataset.anim;
                    }


                    el.classList.add('done');
                    // observer.unobserve(entry.target);
                } else {
                    el.classList.remove('done');
                }

            })
        }, {threshold: .5});
        if (window.innerWidth > 991) {
            anim.forEach(animate => {
                observer.observe(animate)
            })
        } else {

            anim.forEach(animate => {

                observer.observe(animate)


            })
        }
    }
}


scrollAnimations();


$(window).scroll(function (e) {
    $el = $('body');
    $el.toggleClass('show-fixed', $(this).scrollTop() > 72);

});


// Add an event listener listening for scroll

function navHighlighter() {

    // Get current scroll position
    let scrollY = window.pageYOffset;

    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - (sectionHeight / 2.5);
        sectionId = current.dataset.sec;

        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {
            console.log(sectionId);
            document.querySelector(".progress--1 .text p small").innerHTML = `0${sectionId}`;
        }
    });
}
//scroll to function


let progressBtns = [...document.querySelectorAll('.scroll-to')];

function goToSectionProg() {
    if (progressBtns.length) {
        progressBtns.forEach((btn) => {
            let numb = btn.dataset.to;
            let el = document.querySelector(`.${numb}`);
            let currentOffset = 0;
            let dataDesk = btn.dataset.offsetDesk;
            let dataMob = btn.dataset.offsetMod;
            if (window.innerWidth > 767) {
                currentOffset = dataDesk;
            } else {
                currentOffset = dataMob;
            }
            // console.log(currentOffset);
            btn.addEventListener('click', () => {
                // console.log(btn);
                // console.log(currentOffset);
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(el).offset().top + Number(currentOffset)
                }, 500);
            })
        })
    }
}

goToSectionProg();


//scroll to function



//sliders
let clientsSlides = [...document.querySelectorAll('.tomato-slider')];

function clientsSlider() {
    if (!clientsSlides.length) {

    } else {
        if (window.innerWidth > 767) {

        } else {
            clientsSlides.forEach((sld) => {
                let sldCont = sld.querySelector('.swiper');


                const swiper2 = new Swiper(sldCont, {
                    // Optional parameters
                    loop: false,

                    slidesPerView: 'auto',
                    speed: 600,
                    direction: "horizontal",
                    spaceBetween: 0,
                    freeMode: false,
                    mousewheel: true,
                    autoplay: {
                        delay: 2200,
                    },
                    navigation: false,



                });
            })
        }

    }
}

clientsSlider();



//sliders


//open video modal

let videoOpener = document.querySelector('.play-btn');
let videoModal = document.querySelector('.modal-window--video');
let closeModal = document.querySelector('.close-modal');


function ifVideoOpenedOnPage() {
    if(!videoOpener) {

    } else {
        videoOpener.addEventListener('click', (e) => {
            e.preventDefault();
            let dataType = videoOpener.dataset.videoType;
            let dataSrc = videoOpener.dataset.videoModal;

            let videoContainer = videoModal.querySelector(`.iframe--${dataType}`);
            videoContainer.classList.add('active');
            videoContainer.src = dataSrc;

            document.body.classList.add('no-scroll');
            videoModal.classList.add('open');
        });

        closeModal.addEventListener('click', (e) => {
            e.stopPropagation();
            closeModal.closest('.modal-window').classList.remove('open');
            document.body.classList.remove('no-scroll');
            let videoContainer = videoModal.querySelector(`.iframe.active`);
            videoContainer.classList.remove('active');
            videoContainer.src = '';

        });
        videoModal.addEventListener('click', () => {
            videoModal.classList.remove('open');
            document.body.classList.remove('no-scroll');
            let videoContainer = videoModal.querySelector(`.iframe.active`);
            console.log(videoContainer);
            videoContainer.classList.remove('active');
            videoContainer.src = '';
        });
        videoModal.querySelector('.modal-container').addEventListener('click', (e) => {
            e.stopPropagation();
        })
    }
}
ifVideoOpenedOnPage();










