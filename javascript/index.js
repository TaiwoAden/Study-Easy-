const mobNavContainer = document.querySelector('.mobile-nav');
const iconImg1 = document.querySelector('.iconsimg1');
const iconImg2 = document.querySelector('.iconsimg2');

let isClicked = true;

let showOrHide = function() {
    if(isClicked){
        mobNavContainer.style.display = 'flex';
        iconImg1.style.display = 'none';
        iconImg2.style.display = 'block';
        isClicked = false;
    } else{
        mobNavContainer.style.display = 'none';
        iconImg1.style.display = 'block';
        iconImg2.style.display = 'none';
        isClicked = true;
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));