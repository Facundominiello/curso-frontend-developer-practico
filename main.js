const menuEmail = document.querySelector (".navbar-email")
const desktopMenu = document.querySelector (".desktop-menu")
const menuHamIcon = document.querySelector (".menu")
const menuMobile = document.querySelector (".mobile-menu")
const menuCarritoIcon = document.querySelector (".navbar-shopping-cart")
const shoppinCartContainer = document.querySelector ("#shoppinCartContainer")
const cardsContainer = document.querySelector(".cards-container")
const productDetailContainer = document.querySelector("#productDetail")
const productDeatailCloseIcon = document.querySelector(".product-detail-close")


menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMenuMobile);
menuCarritoIcon.addEventListener("click", toggleShoppinCartContainer);
productDeatailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
    const isShoppinCartContainerClosed = shoppinCartContainer.classList.contains("inactive")

    if (!isShoppinCartContainerClosed) {
        shoppinCartContainer.classList.add("inactive")
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMenuMobile() {
    const isShoppinCartContainerClosed = shoppinCartContainer.classList.contains("inactive")

    if (!isShoppinCartContainerClosed) {
        shoppinCartContainer.classList.add("inactive")
    }

    const isProductDetailClosed =  productDetailContainer.classList.contains("inactive")

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add("inactive") 
    }
    menuMobile.classList.toggle("inactive");
}

function toggleShoppinCartContainer() {
    const isMenuMobileClosed = menuMobile.classList.contains("inactive")

    if (!isMenuMobileClosed) {
       menuMobile.classList.add("inactive") 
    }
    const isProductDetailClosed =  productDetailContainer.classList.contains("inactive")
    
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add("inactive")
    }
    shoppinCartContainer.classList.toggle("inactive")
}

function openProductDetailAside() {
    shoppinCartContainer.classList.add("inactive")
    menuMobile.classList.add("inactive")
    productDetailContainer.classList.remove("inactive")
}
function closeProductDetailAside() {
    productDetailContainer.classList.add("inactive")
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: "Tapitas",
    price: 10,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: "Ruedas",
    price: 50,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: "W-40",
    price: 30,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: "Cadena",
    price: 40,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: "Manubrio",
    price: 70,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: "Pedalines",
    price: 45,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: "Pedales",
    price: "35",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

function renderProducts (arr){
    for (product of productList) {
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
    
        const productImg = document.createElement("img")
        productImg.setAttribute("src", product.image)
        productImg.addEventListener("click", openProductDetailAside)
    
        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info")
    
        const productInfoDiv = document.createElement("div")
    
        const productPrice = document.createElement("p")
        productPrice.innerText = "$" + product.price
        const productName = document.createElement("p")
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
        const productInfoFigure = document.createElement("figure")
        const productImgCart = document.createElement("img")
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)
