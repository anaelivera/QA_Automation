import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import ShoppingCart from '../pages/ShoppingCart'
import {CREDENTIALS} from '../data/Constants'

fixture('Navigate to the shopping cart')
    .page `https://www.saucedemo.com/cart.html`
    .beforeEach(async t =>{
        await t
        .typeText(LoginPage.usernameField, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)
    })

test ('Users can navigate to the shopping cart', async t =>{
    await t
    .click(ShoppingCart.cartButton)

    await t.expect(ShoppingCart.cartTitle.innerText).eql('Your Cart')
    
})

test ('Validate a single item has been added to the shopping cart', async t =>{
    await t
    .click(ProductsPage.itemBackpack)
    .click(ProductsPage.addButton)
    .click(ShoppingCart.cartButton)

    await t.expect(ShoppingCart.Backpack.exists).ok()
    

})

test('Validate several items have been added to the shopping cart', async t =>{
    await t
    .click(ProductsPage.itemBackpack)
    .click(ProductsPage.addButton)
    .click(ProductsPage.backButton)
    .click(ProductsPage.itemBike)
    .click(ProductsPage.addButton)
    .click(ShoppingCart.cartButton)

    await t.expect(ShoppingCart.cartQty.count).gte(1)
})