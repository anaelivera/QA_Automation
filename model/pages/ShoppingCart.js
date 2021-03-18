import {Selector} from 'testcafe'

class ShoppingCart {
    constructor() {
        this.cartButton = Selector('.shopping_cart_link')
        this.cartTitle = Selector('.subheader')
        this.cartQty = Selector('.cart_quantity')
        this.Backpack = Selector('#item_4_title_link')
    }
}

export default new ShoppingCart()