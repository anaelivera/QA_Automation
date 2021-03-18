import {Selector} from 'testcafe'

class LogoutPage {
    constructor() {
        this.burgerButton = Selector('#react-burger-menu-btn')
        this.logoutButton = Selector('#logout_sidebar_link')
        this.loginButton = Selector('#login-button')
    }
}

export default new LogoutPage()