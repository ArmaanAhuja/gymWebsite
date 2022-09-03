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
