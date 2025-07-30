let menu=document.querySelector('#menu-bars');
let navbar=document.querySelector('.navbar');

menu.onclick = () =>{

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
menu.onclick = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

menu.classList.remove('fa-times');
navbar.classList.remove('active');

section.forEach(sec =>{

let top = window.scrollY;

let height = sec.offsetHeight;

let offset = sec.offsetTop - 150;

let id = sec.getAttribute('id');


if(top >= offset && top < offset +height){
  navLinks.forEach(links =>{
    links.classList.remove('active');
    document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
  });
};

});


}

document.querySelector('#search-icon').onclick= () =>{

    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick= () =>{

    document.querySelector('#search-form').classList.toggle('active');
}
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   loop:true,
  });


  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
   
   loop:true,
   breakpoints:{
    0:{
      slidesPerview:1,

    },
   640:{
        slidesPerview:2,
  
      }, 
    768:{
        slidesPerview:2,
  
      }, 
    1024:{
        slidesPerview:3,
  
      },   
},
  });


// window.onload = fadeOut;
document.addEventListener("DOMContentLoaded", function () {
  // Initialize cart quantity
  let cartQuantity = 0;

  // Function to update cart quantity
  const updateCartQuantity = () => {
      document.getElementById("cart-quantity").innerText = cartQuantity;
  };

  // Add event listeners to all "Add to Cart" buttons
  const addToCartButtons = document.querySelectorAll("button");
  addToCartButtons.forEach((button) => {
      button.addEventListener("click", () => {
          // Increment the cart quantity when the button is clicked
          cartQuantity++;
          // Update the cart quantity display
          updateCartQuantity();
      });
  });
});

const cartContainer = document.getElementById('cart-container');
const cartItemsList = document.getElementById('cart-items');
const cartIcon = document.getElementById('cart-icon');

function addToCart(itemName, itemPrice) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <span>${itemName}</span>
    <span>${itemPrice} &#8377;</span>
  `;
  cartItemsList.appendChild(listItem);
  
}

// Toggle cart visibility when the cart icon is clicked
cartIcon.addEventListener('click', () => {
  cartContainer.style.display = cartContainer.style.display === 'none' ? 'block' : 'none';
});
