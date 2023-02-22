let cadre = document.querySelectorAll('.fa-cart-shopping')

cadre.forEach((demo) => demo.addEventListener("click", (e)=>{
  e.preventDefault();
  let parent = demo.closest('.cardre')
  let img = parent.querySelector('.name p')
  console.log(img.textContent)

}))