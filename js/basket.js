
// Enregistre les données en localStorage

function saveBasket(basket) {
    localStorage.setItem("basket", JSON.stringify(basket))
}


// Affiche les données du localStorage

function getBasket(){


    let basket = localStorage.getItem("basket")
    if (basket == null) {
         return []
    }else{
        return JSON.parse(basket)
    }
    
}



// Ajouter UN produit et gestion de qte 
function addBasket(product) {
    let basket = getBasket();
    // Verifie Si le produit est deja dans le panier (Si oui alors il augmente la qte sinon, il ajoute le nouveau produits)
    let foundProduct = basket.find(p=> p.id == product.id)

    if(foundProduct != undefined){
        foundProduct.quantity++
    }else{
        product.quantity = 1;
        basket.push(product)
    }
   
    saveBasket(basket)
} 


// Supprimer un element dans un panier
function removeBasket(product) {
    let basket = getBasket();
    basket = basket.filter(p => p.id != product.id)
    saveBasket(basket)
}


// Change la quantite d'un produit

function changeQuantity(product, quantity){
    let basket = getBasket();
    let foundProduct = basket.find(p => p.quantity == product.quantity)

    if(foundProduct != undefined){
        foundProduct.quantity += quantity;
        if (foundProduct.quantity <= 0) {
                removeBasket(foundProduct)
        }else{
            saveBasket(basket)
        }
    }
    
}


// Quantite Total de produit

function getNumberProduct() {
    let basket = getBasket();
    let number = 0;
    for (let product of basket) {

        number += product.quantity;
    }
    return number
}


// Prix total de produits

function getTotalPrice() {
    let basket = getBasket();
    let total = 0;
    for (let product of basket) {

        total += product.quantity * product.prix;
    }
    return total
}

