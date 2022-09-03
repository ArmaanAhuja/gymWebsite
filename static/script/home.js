let changeImg = document.getElementsByClassName('changeImg'); 
let bodyImg = document.querySelector('.bodyImg img'); 
 

changeImg[0].addEventListener('click', ()=> {
    bodyImg.src = '../static/img/home-bg-1.jpg'; 
})
changeImg[1].addEventListener('click', ()=> {
    bodyImg.src = '../static/img/home-bg-2.jpg'; 
})
changeImg[2].addEventListener('click', ()=> {
    bodyImg.src = '../static/img/home-bg-3.jpg'; 
})

let navbar2 = document.getElementsByClassName('navbar2')[0]; 
// console.log(navbar2); 

let hamburgerIcon = document.getElementById('hamburger'); 
// console.log(hamburgerIcon); 

hamburgerIcon.addEventListener('click', ()=> {
    if(navbar2.style.top == '-50vh'){
        navbar2.style.top = '12vh'; 
    }
    else{
        navbar2.style.top = '-50vh'; 
    }
})