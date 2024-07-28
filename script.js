// Sample data for products
const products = [
    { 
        id: 1, 
        name: 'Product 1', 
        price: 29.99, 
        image: 'product1.jpg'   // Update with the correct path to your image
    
    },
    { 
        id: 2, 
        name: 'Product 2', 
        price: 19.99, 
        image: 'product6.jpg'  // Update with the correct path to your image

    },
    { 
        id: 3, 
        name: 'Product 3', 
        price: 39.99, 
        image: 'product3.jpeg'  // Update with the correct path to your image
    },
  
];

// Function to display products on the page
function displayProducts() {
    const productContainer = document.querySelector('.product-list');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productItem);
    });
}

// Function to simulate adding to cart (dummy function)
function addToCart(productId) {
    alert(`Product ${productId} added to cart`);
}

// Display products when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
});
