const products = [
    { id: 1, name: "منتج تجريبي 1", price: 10 },
    { id: 2, name: "منتج تجريبي 2", price: 25 },
    { id: 3, name: "منتج تجريبي 3", price: 50 },
    { id: 4, name: "منتج تجريبي 4", price: 100 }
];

let cart = [];

const container = document.getElementById('products-container');
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');

// عرض المنتجات
function displayProducts() {
    container.innerHTML = products.map(p => `
        <div class="product-card">
            <h3>${p.name}</h3>
            <div class="product-price">${p.price} $</div>
            <button class="add-btn" onclick="addToCart(${p.id})">إضافة للسلة</button>
        </div>
    `).join('');
}

// إضافة منتج للسلة
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

// تحديث السلة
function updateCart() {
    cartCount.innerText = cart.length;
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span>${item.name}</span>
            <span>${item.price} $</span>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalPrice.innerText = total;
}

// فتح وإغلاق السلة
document.getElementById('cart-btn').addEventListener('click', () => cartModal.style.display = 'flex');
document.getElementById('close-cart').addEventListener('click', () => cartModal.style.display = 'none');

// إتمام الطلب
document.getElementById('checkout-btn').addEventListener('click', () => {
    if(cart.length === 0) {
        alert('السلة فارغة!');
        return;
    }
    alert('تم إرسال الطلب بنجاح!');
    cart = [];
    updateCart();
    cartModal.style.display = 'none';
});

displayProducts();
