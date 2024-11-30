describe('Add to Cart Tests', () => {
  it('should allow the user to add a product to the cart', () => {
    // Visit the application
    cy.visit('https://www.saucedemo.com/', { timeout: 120000 });

    // Log in with valid credentials
    cy.get('input[data-test="username"]').type('standard_user'); // Enter username
    cy.get('input[data-test="password"]').type('secret_sauce'); // Enter password
    cy.get('input[data-test="login-button"]').click(); // Click the login button

    // Assert successful login by checking the URL
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');

    // Add the first product to the cart
    cy.get('.inventory_item').first().find('button').click(); // Add to Cart button for the first product

    // Verify that the cart count has increased to 1
    cy.get('.shopping_cart_badge').should('contain', '1');

    // Navigate to the cart page
    cy.get('.shopping_cart_link').click();
    cy.url().should('eq', 'https://www.saucedemo.com/cart.html');

    // Verify the product is in the cart
    cy.get('.cart_item').should('have.length', 1); // Check there is one item in the cart
  });
});
