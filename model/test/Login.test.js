import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import {CREDENTIALS} from '../data/Constants'



fixture('Login feature')
    .page `https://www.saucedemo.com/`

test ('Users cannot login using invalid credentials', async t =>{
    await t
        .typeText(LoginPage.usernameField, CREDENTIALS.INVALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.INVALID_USER.PASSWORD)
        .click(LoginPage.loginButton)
    
        await t.expect(LoginPage.errorMessage.exists).ok()
})

test ('Users can login using valid credentials', async t =>{
    await t
        .typeText(LoginPage.usernameField, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)

        await t.expect(ProductsPage.pageTitle.innerText).eql('Products')
})
