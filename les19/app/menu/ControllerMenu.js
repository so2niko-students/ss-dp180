import { ViewMenu } from './ViewMenu.js';

export class ControllerMenu {
    constructor({ notify }) {
        this.view = new ViewMenu(this.clickSearchBtn.bind(this));
        this.notify = notify;
    }

    clickSearchBtn() {
        this.notify('new-search', this.view.searchValue);
    }
}