let bars = document.querySelector('span');

document.querySelector('#bars').addEventListener("mouseover",()=>{
    bars.classList.add('active')
    
})
document.querySelector('#bars').addEventListener("mouseout",()=>{
    bars.classList.remove('active')
    
})
document.getElementById('btn').onclick = function (){add()}

function add(){
    document.getElementById('menu').classList.toggle('active')
}
let h2 = document.querySelector('.header-2')
window.onscroll = () =>{
    h2.classList.remove('active');
    if(window.scrollY > 80){
        document.querySelector('.header-2').classList.add('active')
    }else{
        document.querySelector('.header-2').classList.remove('active')
    }
}
window.onload = () =>{
    h2.classList.remove('active');
    if(window.scrollY > 80){
        document.querySelector('.header-2').classList.add('active')
    }else{
        document.querySelector('.header-2').classList.remove('active')
    }
}