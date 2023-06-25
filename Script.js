let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})



let typed = new Typed('.auto-input',{
    strings: ['Front-End Devloper','Back-End Developer','Java And Python Developer','System App Developer','Photo Video Edditor','UI Designer','Chess Player','Machine lerning'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop: true,
})

let navlinkns = document.querySelectorAll('nav ul li a')

let sections = document.querySelectorAll('section')

window.addEventListener('scroll',function(){
    const scrollPos = window.scrollY + 20
    sections.forEach(sections=> {
        if (scrollPos > sections.offsetTop && scrollPos < (sections.offsetTop + sections.offsetHeight)){
            navlinkns.forEach(link => {
                link.classList.remove('active');
                if(sections.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }   
    });
});