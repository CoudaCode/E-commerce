
let nomProsuits = document.getElementById('NomProduits').innerHTML;
let mtn = document.querySelector('.montnt')
let quantite = document.querySelector('.mtn')
let Plus = document.querySelector('.plus')
let Moins = document.querySelector('.Moins')
let SumProduct = parseInt(mtn.innerHTML)
let qte = 1;
let AjouT =document.querySelector('.ajout')

Plus.addEventListener('click',(e)=>{
   
        qte += 1
        quantite.innerHTML = qte

        let totaux = qte*SumProduct
        mtn.innerHTML = totaux

       
console.log(totaux) 
}

)
Moins.addEventListener('click',(e)=>{
    let totaux;
    
    if(qte <= 1 ){
        qte = 1
    }else{
        qte -= 1
        quantite.innerHTML = qte;
         totaux = qte*SumProduct;
         mtn.innerHTML = totaux;
    }
    console.log(totaux)
})
let product = {
    Nom : nomProsuits,
    quantite: qte,
    Montant : qte*SumProduct,
}


function saveBasket(basket) {
    localStorage.setItem("basket", JSON.stringify(basket))
}    

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
    let foundProduct = basket.find(p => p.Nom == product.Nom)

    if(foundProduct != undefined){
        foundProduct.quantity += qte;
    }else{
        product.quantity = qte;
        basket.push(product)
    }
   
    saveBasket(basket)
} 



AjouT.addEventListener('click', ()=>{
    addBasket(product)
    AjouT.style.display = 'none'
})

