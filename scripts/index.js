const cartButton = document.querySelector('.preview__button');
const cartButtonText = document.querySelector('.preview__button > span');
const cart = document.querySelector('.cart-icon');
const check = document.querySelector('.check-icon');

cartButton.addEventListener('click', toggleActiveButton); 

function toggleActiveButton(){
    if (buttonIsActive()) {
        toggleButtonText("Add to cart");
        removeActiveClasses();
        reverseAnimations();
    } else {
        toggleButtonText("Added to cart");
        removeReverseAnimations();
        addActiveClasses();
    }
}

function buttonIsActive(){
    return cartButton.classList.contains("button-active");
}

function addActiveClasses(){
    cart.classList.add("cart-slide");
    check.classList.add("check-slide");
    cartButton.classList.add("button-active");
}

function removeActiveClasses(){
    cart.classList.remove("cart-slide");
    check.classList.remove("check-slide");
    cartButton.classList.remove("button-active");
}

function reverseAnimations(){
    cart.classList.add("cart-slide--reverse");
    check.classList.add("check-slide--reverse");
}

function removeReverseAnimations(){
    cart.classList.remove("cart-slide--reverse");
    check.classList.remove("check-slide--reverse");
}

function toggleButtonText(newTextContent) {
    setTimeout(() => {
        cartButtonText.textContent = newTextContent;
    },500);
    
}