import {Selector} from 'testcafe'

class ProductsPage {
    constructor(){
        this.pageTitle = Selector('.product_label')
        this.itemBackpack = Selector('.inventory_item_img')
        this.addButton = Selector('.btn_primary.btn_inventory')
        this.productOne = Selector('.inventory_item_label')
            .child('.inventory_item_name')
        this.productTwo = Selector('.inventory_item_label')
            .child('.inventory_item_name')
        this.itemBike = Selector('img[alt="Sauce Labs Bike Light"]')
        this.backButton = Selector('.inventory_details_back_button')
    }
}

export default new ProductsPage()