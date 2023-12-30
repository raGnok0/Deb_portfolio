// window.addEventListener('load',()=>{
//     document.body.style.background = "black";
//     setTimeout(() => {
//         document.body.style.background = "white";
//     }, 3000);
// })
let work_title = document.querySelector('.work-title');
let navbar = document.querySelector('.navbar');
let banner = document.querySelector('.banner-animation p');

window.onscroll = ()=>{
    let top = window.scrollY;
    let offset = work_title.offsetTop;
    let height = work_title.offsetHeight;
    // console.log(offset,height);
    let offset_nav = navbar.offsetTop;
    let height_nav = navbar.offsetHeight;
    if(top > offset){
        work_title.classList.add('work-title-animate');
        navbar.classList.add('navbar-animation');
        banner.classList.add('banner-animated');
    }else{
        work_title.classList.remove('work-title-animate');
        navbar.classList.remove('navbar-animation');
        banner.classList.remove('banner-animated');
    }

}

let contact_btn = document.querySelector('.clicky-btn');
let contact = contact_btn.childNodes[1];
let magnet = document.getElementById('magnetic');
let about = magnet.childNodes[1];
magnet.onmousemove = (e)=>{
    let x = e.offsetX;
    let y = e.offsetY;
    let transX = x -  (magnet.clientWidth/2);
    let transY = y -  (magnet.clientHeight/2);
    if(transX < 0 && transY < 0){
        var aboutX = transX+transX;
        var aboutY = transY+transY;
    } else{
        aboutX = 10;
        aboutY = 10;
    }
    // console.log(transX,transY);
    magnet.style.transform = `translateX(${transX}px) translateY(${transY}px)`;
    about.style.transform = `translateX(${aboutX}px) translate(${aboutY}px) `
}
magnet.onmouseout = (e)=>{
    magnet.style.transform = `translate(0px,0px)`;
    about.style.transform = `translate(0px,0px)`;
}

contact_btn.onmousemove = (e)=>{
    let x = e.offsetX;
    let y = e.offsetY;
    let transX = x -  (contact_btn.clientWidth/2);
    let transY = y -  (contact_btn.clientHeight/2);
    if(transX < 0 && transY < 0){
        var contactX = transX+transX;
        var contactY = transY+transY;
    } else{
        contactX = 10;
        contactY = 10;
    }
    // console.log(transX,transY);
    contact_btn.style.transform = `translateX(${transX}px) translateY(${transY}px)`;
    contact.style.transform = `translateX(${contactX}px) translate(${contactY}px) `
}
contact_btn.onmouseout = (e)=>{
    contact_btn.style.transform = `translate(0px,0px)`;
    contact.style.transform = `translate(0px,0px) `

}

//text transitions
const paras = document.querySelectorAll('.para');
const para2 = document.getElementById('para2');
const para3 = document.getElementById('para3');
const main_footer = document.querySelector('.footer1');
const click_btn = document.querySelector('.clicky-btn')
// console.log(paras)
document.addEventListener('scroll',()=>{
    paras.forEach(para =>{
        if(para.getBoundingClientRect().top <= 499 && para.getBoundingClientRect().bottom<= 611){
            para.classList.add('text-animate');
        }
    })
    if(para2.getBoundingClientRect().top <= 577 && para2.getBoundingClientRect().bottom <= 737){
        para2.classList.add('text-animate');
        para3.classList.add('text-animate');
        main_footer.classList.add('footer-animate');
        click_btn.classList.add('clicky-btn-animate');
    }
})



function isInView(element){
    const rect = element.getBoundingClientRect();
    return(
        rect.bottom > 0 &&
        rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );
}
// name -animation
window.addEventListener('scroll',()=>{
    document.body.style.setProperty("--scroll",window.pageYOffset/(document.body.offsetHeight - window.innerHeight))
},false)

// window.onload = ()=>{
//     document.body.innerHTML = null;
//     document.body.style.backgroundColor = "black"
// }