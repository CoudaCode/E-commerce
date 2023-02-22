

    let link = document.querySelectorAll('.fa-cart-shopping')
    let total = document.querySelectorAll('.prix')
    let totalNom = document.querySelectorAll('.nomofProduct')
    let imgs = [
        "./image/bain-et-corps.jpeg",
        "./image/produits-cheveux.jpeg",
        "./image/images.jpeg",
        "./image/Parfums/channel.jpeg",
        "./image/givenchy.jpeg",
        "./image/bain-et-corps1.jpeg",
        "./image/Parfums/parfums2.jpeg",
        "./image/Bain-et-Corps/bain3.jpeg",
        "./image/cheveux.jpeg",
        "./image/Mains-ongles/ongles4.jpeg",
        "./image/Bain-et-Corps/bain5.jpeg",
    ]


    let totalPrix = [];
    let totalName = []
    for (const key of total){
        totalPrix.push(parseInt(key.innerHTML))
    }

    for (const nom in totalNom) {
        totalName.push(totalNom[nom].innerHTML)
    }



    for (const element of link){
            element.addEventListener('click', ()=> {
                console.log('click  ')
            })
    }
