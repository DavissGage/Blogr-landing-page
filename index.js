'use strict';

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('closeMenu');
const product = document.getElementById('product');
const company = document.getElementById('company');
const connect = document.getElementById('connect');
const arrow = document.querySelectorAll('.arrow')

//hamburger open and close functions 

hamburger.addEventListener('click', () =>{
    mobileMenu.style.display = 'grid';
    closeMenu.style.display = 'block';
    hamburger.style.display = 'none';
});

closeMenu.addEventListener('click', () =>{
    mobileMenu.style.display = 'none';
    hamburger.style.display = 'block';
    closeMenu.style.display = 'none';
});




//Added Mobile Drop Down Menu Functionality
const getDropDownMenus = document.querySelectorAll('#dropdown-menu')
let dropdown = document.querySelectorAll('.drop-item');



document.querySelectorAll("li.dropdown").forEach(li => li.addEventListener("click", openMenu));



function openMenu(){
    this.querySelector('.dropdown-menu').classList.toggle('active');
    this.querySelector('img.arrow').classList.toggle('active');
};


const mediaQuery = window.matchMedia('(min-width:768px)');


mediaQuery.addEventListener('change', () => {
    mobileMenu.style.display = 'none';
    hamburger.style.display = 'block';
    closeMenu.style.display = 'none';
})
