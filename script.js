let titles = document.querySelectorAll('.title');
let arr = [];
let typer = (title_text, elem, counter) => {
    let myint = setInterval(function() {
        if(counter < title_text.length){
            elem.innerHTML += title_text.charAt(counter);
            counter++;
        }else {
            clearInterval(myint);
        }

    }, 150);

}

// imgs transition 
// typerWriter titles
let scrolling = false;
window.addEventListener('scroll', function() {
    scrolling = true;
});

let imgs = document.querySelectorAll('#ss .container .img-container .img');
setInterval(() => {
    if(scrolling) {
        titles.forEach(title => {
            if(title.innerHTML === '' && (window.scrollY + window.innerHeight) >= title.offsetTop){
                typer(title.getAttribute('data-title'), title, 0);
            }
        });
        imgs.forEach(img => {
            if((window.scrollY + window.innerHeight) >= img.offsetTop){
                img.style.opacity = '1';
                img.style.transform = 'translateX(0) translateY(0)';
            }
        })
    scrolling = false;
    }
}, 200);


// skills
let icons = document.querySelectorAll('#skills .container .card i');
icons.forEach(icon => {
    icon.addEventListener('click', ()=> {
        icon.parentElement.classList.toggle('anim-box');
    })
});




