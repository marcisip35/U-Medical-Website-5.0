
/* Quick Links Animation */
const observerOne = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
            if(entry.isIntersecting){
                entry.target.classList.add('showOne');
            } else {
                entry.target.classList.remove('showOne');
            }
    });
});

const hiddenElementsOne = document.querySelectorAll('.hiddenOne');
hiddenElementsOne.forEach((el) => observerOne.observe(el));
//

/* About Animation */
const observerTwo = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
            if(entry.isIntersecting){
                entry.target.classList.add('showTwo');
            } else {
                entry.target.classList.remove('showTwo');
            }
    });
});

const hiddenElementsTwo = document.querySelectorAll('.hiddenTwo');
hiddenElementsTwo.forEach((el) => observerTwo.observe(el));
//

/* Mission Animation*/
document.addEventListener("DOMContentLoaded", () => {
    const fadeIns = document.querySelectorAll('.fade-in');

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    fadeIns.forEach(fadeIn => {
        observer.observe(fadeIn);
    });
});
//



