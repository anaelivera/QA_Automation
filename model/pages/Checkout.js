import {Selector} from 'testcafe'

class Checkout {
    constructor(){
        this.checkoutButton = Selector('.btn_action.checkout_button')
        this.nameField = Selector('input[data-test="firstName"]')
        this.lastnameField = Selector('input[data-test="lastName"]')
        this.zipField = Selector('input[data-test="postalCode"]')
        this.continueButton = Selector('.btn_primary.cart_button')
        this.errorInfoReq = Selector('h3[data-test="error"')
        
    }
}

export default new Checkout()