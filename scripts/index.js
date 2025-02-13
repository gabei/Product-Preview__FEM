const addToCartButton = document.querySelector('.preview__button');
const cart = document.querySelector('.cart-icon');
const check = document.querySelector('.check-icon');

addToCartButton.addEventListener('click', () => {
    console.log(buttonIsActive());
    toggleActiveButton();
});

function toggleActiveButton(){
    if (buttonIsActive()) {
        removeActiveClasses();
        reverseAnimations();
    } else {
        removeReverseAnimations();
        addActiveClasses();
    }
}

function buttonIsActive(){
    return addToCartButton.classList.contains("button-active");
}

function addActiveClasses(){
    cart.classList.add("cart-slide");
    check.classList.add("check-slide");
    addToCartButton.classList.add("button-active");
}

function removeActiveClasses(){
    cart.classList.remove("cart-slide");
    check.classList.remove("check-slide");
    addToCartButton.classList.remove("button-active");
}

function reverseAnimations(){
    cart.classList.add("cart-slide--reverse");
    check.classList.add("check-slide--reverse");
}

function removeReverseAnimations(){
    cart.classList.remove("cart-slide--reverse");
    check.classList.remove("check-slide--reverse");
}