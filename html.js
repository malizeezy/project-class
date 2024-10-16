class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    calculateTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    getTotal() {
      return this.items.reduce((total, item) => total + item.calculateTotalPrice(), 0);
    }
  
    addItem(product, quantity) {
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push(new ShoppingCartItem(product, quantity));
      }
    }
  
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    displayCartItems() {
      // Implement your logic to display cart items on the UI
      console.log("Cart Items:");
      this.items.forEach(item => {
        console.log(`${item.product.name} - Quantity: ${item.quantity} - Total: ${item.calculateTotalPrice()}`);
      });
    }
  }
  
  // Test code
  const product1 = new Product(1, "Product 1", 10);
  const product2 = new Product(2, "Product 2", 20);
  
  const shoppingCart = new ShoppingCart();
  
  shoppingCart.addItem(product1, 3);
  shoppingCart.addItem(product2, 2);
  
  console.log("Total:", shoppingCart.getTotal());
  
  shoppingCart.removeItem(product1.id);
  
  shoppingCart.displayCartItems();