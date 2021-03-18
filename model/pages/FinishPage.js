import {Selector} from 'testcafe'

class FinishPage {
    constructor() {
        this.thankyouMessage = Selector('.complete-header')
    }
}

export default new FinishPage()