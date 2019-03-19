window.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('.preloader').style.display ="none";
})

// NAV DISPLAY
const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.navBtn');

navBtn.addEventListener('click',()=>{
    nav.classList.toggle('show')
})

// VIDEO SWICTH 
document.querySelector('.video__switch').addEventListener('click',()=>{
    let btn =  document.querySelector('.video__switch-btn');
    if(!btn.classList.contains('btnSlide')){
        btn.classList.add('btnSlide')
        document.querySelector('.video__item').pause()
    }else{
        btn.classList.remove('btnSlide')
        document.querySelector('.video__item').play()
}
})
