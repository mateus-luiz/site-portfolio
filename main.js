
const btnAbout = document.querySelector("a#fAbout");
btnAbout.addEventListener("click", scrollToOnClick);

function scrollToOnClick(event){
    event.preventDefault();
    const id = btnAbout.getAttribute('href');
    const to = document.querySelector(id).offsetTop - 15;
    
    window.scroll({
        top: to,
        behavior: 'smooth'
    });
    console.log(to);
}