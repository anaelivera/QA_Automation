import LoginPage from '../pages/LoginPage'
import LogoutPage from '../pages/LogoutPage'
import {CREDENTIALS} from '../data/Constants'

fixture ('Logout feature testing')
    .page `https://www.saucedemo.com/inventory.html`

test ('Users can logout', async t =>{
    await t
        .typeText(LoginPage.usernameField, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)
        .click(LogoutPage.burgerButton)
        .click(LogoutPage.logoutButton)

        await t.expect(LoginPage.loginButton.exists).ok()
})