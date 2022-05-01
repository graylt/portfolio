// -----Info: Resume----- myResume, myStuff


function myResume() {
    let x =document.getElementById('myStuff');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    }else {
        x.style.display = 'none';
}
}

// fixed header
const body = document.body;
const header = document.querySelector('header');
const scrollUp = 'scroll-up';
const scrollDown = 'scroll-down';

let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll === 0) {
        header.classList.remove(scroll.Up);
        return;
    }

    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
       // down
        header.classList.remove(scrollUp);
        header.classList.add(scrollDown);
    } else if (
        currentScroll < lastScroll && 
        header.classList.contains(scrollDown)
    ) {
       // up 
        header.classList.remove(scrollDown);
        header.classList.add(scrollUp);
    }
    lastScroll = currentScroll
});



