//import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js"
//import { getDatabase,
//         ref,
//         push,
//        onValue } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js"

//const firebaseConfig = {
//    databaseURL: "https://shopping-cart-app-a67f9-default-rtdb.firebaseio.com"
//}

//const app = initializeApp(firebaseConfig)
//const database = getDatabase(app)
//const referenceInDB = ref(database, "shopping")

//const inputField = document.getElementById("input-field")
//const addButton = document.getElementById("add-button")

//onValue(referenceInDB, function(snapshot) {
//})

//addButton.addEventListener("click", function() {
//    inputField.value
//    push(referenceInDB, inputField.value)
//})

document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.getElementById('cart-items')
    const checkoutButton = document.getElementById('checkout');

    let cart = [];

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const productElement = this.parentElement;
            const name = productElement.getAttribute('data-name');
            
            addToCart(name);
        });
    });

    function addToCart(name) {
        cart.push({ name });
        
        updateCart();
    }

    function updateCart() {
        cartItems.innerHTML = '';

   }

    checkoutButton.addEventListener('click', function () {
        alert(`Thank you for your purchase!`);
        cart = [];
        updateCart();
    });
});
