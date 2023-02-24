let cadre = document.querySelectorAll('.fa-cart-shopping')
function savPanier(panier) {
  localStorage.setItem("panier", JSON.stringify(panier))
}


// Affiche les données du localStorage
function recupererpanier(){

  let panier = localStorage.getItem("panier")
  if (panier == null) {
       return []
  }else{
      return JSON.parse(panier)
  }
  
}

function addPanier(product) {
  let Panier = recupererpanier();
  // Verifie Si le produit est deja dans le panier (Si oui alors il augmente la qte sinon, il ajoute le nouveau produits)
  let foundProduct = Panier.find(p=> p.Name == product.Name)

  if(foundProduct != undefined){
      foundProduct.quantity++
  }else{
      product.quantity = 1;
      Panier.push(product)
  }
 
  savPanier(Panier)
  console.log('add succes')
} 

cadre.forEach((demo) => demo.addEventListener("click", (e)=>{
  e.preventDefault();
  let parent = demo.closest('.cardre')
  let text = parent.querySelector('.name p').innerHTML
  let prix = parent.querySelector('.prix').innerHTML
  let img = parent.querySelector('.cardre img').src
  // console.log(img.textContent)
  // console.log(prix.innerHTML)
  let produit = {
    Name : text,
    img:img,
    prix: parseInt(prix)
  } 
  console.log(produit)

  addPanier(produit)
  console.log

  window.location.replace('http://127.0.0.1:5500/HTML/produit.html')
}))