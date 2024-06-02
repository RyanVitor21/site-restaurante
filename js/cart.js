//cart

let cart = [];

const addToCart = (id) => {
    showCart();

    let foodImage = document.getElementById(id).getElementsByTagName('img')[0].src;
    let foodName = document.getElementById(id).getElementsByTagName('h3')[0].innerText;

    let food = cart.find(item => item.id == id);

    if (food == undefined) {
        cart.push({ id: id, quantity: 1 });

        updateDOMCart(id, 'add', foodImage, foodName);

    } else {
        let findIndex = cart.findIndex(item => item.id == food.id);
        cart[findIndex] = { id: food.id, quantity: ++food.quantity };

        updateDOMCart(id, 'update', foodImage, foodName);
    }
};

const updateButtonQuantity = (id, type) => {
    let food = cart.find(item => item.id == id);
    let findIndex = cart.findIndex(item => item.id == food.id);

    if (type == "add") {
        cart[findIndex] = { id: food.id, quantity: ++food.quantity };
    } else {
        cart[findIndex] = { id: food.id, quantity: --food.quantity };
    }

    updateDOMCart(id, 'update', '', '');

    if (cart[findIndex].quantity <= 0) {
        removeFoodCart(id);
    }
};

const removeFoodCart = (id) => {
    document.getElementById(`card-${id}`).remove();
    let findIndex = cart.findIndex(item => item.id == id);
    cart.splice(findIndex, 1);
};

const updateDOMCart = (id, type, foodImage, foodName) => {
    if (type == 'add') {
        document.getElementById("foods-cart").innerHTML += `
            <div class="food-card" id="card-${id}"> 
                <div class="food-card-head">
                    <img src="${foodImage}" alt="">
                    <p>${foodName}</p>
                </div>
                <div class="food-card-body">
                    <button onclick="updateButtonQuantity(${id}, 'subtract')">-</button>
                    <span id="quantity-${id}">1</span>
                    <button onclick="updateButtonQuantity(${id}, 'add')">+</button>
                </div>
            </div>`;
    } else if (type == 'update') {
        let findIndex = cart.findIndex(item => item.id == id);

        document.getElementById(`card-${id}`).querySelector('.food-card-body').innerHTML = `
            <button onclick="updateButtonQuantity(${id}, 'subtract')">-</button>
            <span id="quantity-${id}">${cart[findIndex].quantity}</span>
            <button onclick="updateButtonQuantity(${id}, 'add')">+</button>`;
    }
};

const showCart = () => {
    document.getElementById("cart").classList.add('show-cart');
};

const hideCart = () => {
    document.getElementById("cart").classList.remove('show-cart');
};
