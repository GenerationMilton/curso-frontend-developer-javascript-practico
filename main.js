const menuEmail= document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');
const menuHamIcon= document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu=document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer= document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);

menuHamIcon.addEventListener('click',toggleMobileMenu);

menuCarritoIcon.addEventListener('click', toggleCarritoAside);

//fucntion 1
function toggleDesktopMenu(){
    console.log('Click');
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

//fucntion 2
function toggleMobileMenu(){
    console.log('Click');

    const isAsideClosed= aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

//fucntion 3
function toggleCarritoAside(){
    console.log('click');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
    
}


//funcion products
const productList =[];
productList.push({
    name: 'Bike',
    price:120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price:220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Compu',
    price:620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr){
    for(product of arr){

        //CREAR LA MAQUETACION DEL HTML
        const productCard= document.createElement('div');
        productCard.classList.add('product-card');
    
        //product ={name,price,image}-> product.image
        const productImg = document.createElement('img'); //Crea el elemento imagen
        productImg.setAttribute('src', product.image); // Se le agrega el atributo a la imagen con la lista de productos del array que se hizo arriba
    
        const productInfo = document.createElement('div'); // Crea el contenedor div
        productInfo.classList.add('product-info'); // le añade la clase product-info al productInfo(div)
    
        const productInfoDiv = document.createElement('div');//Crea el contenedor div vacio
    
        const productPrice= document.createElement('p');//Crea el parrafo <p>
        productPrice.innerText= '$' + product.price;//le añade el precio al parrafo productPrice con la lista de productos del array que se hizo
        
        const productName = document.createElement('p');//Crea el parrafo <p>
        productName.innerText = product.name;//le añade el nombre al parrafo productName con la lista de productos del array que se hizo arriba
    
        const productInfoFigure= document.createElement('figure'); //Crea el figure<figure>
        const productImgCart=document.createElement('img');//Crea el elemento imagen
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');//le añade el atributo de la imagen a productImgCart

        //APPENCHILD LA MAQUETACION Al HTML DE ARRIBA HACIA ABAJO 
        cardsContainer.appendChild(productCard); //arriba se selecciono la clase (cards-container)estamos apendiando el productCard

        productCard.appendChild(productImg);//Se le hizo append el productImg al productCard
        productCard.appendChild(productInfo);//se le hizo append el productInfo al productCard

        productInfoDiv.appendChild(productPrice);//se le hizo append el productPrice al productInfoDiv
        productInfoDiv.appendChild(productName);//se le hizo append el productName al productInfoDiv

        productInfo.appendChild(productInfoDiv);//se le hizo apppend el productInfoDiv al productInfo
        productInfo.appendChild(productInfoFigure);//se le hizo apppend el productInfoFigure al productInfo
        productInfoFigure.appendChild(productImgCart);//se le hizo append el productImgCart al productInfoFigure
       
    
        
    
        
    }
}

renderProducts(productList);