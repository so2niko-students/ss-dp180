import { ModelNews } from './ModelNews.js';
import { ViewNews } from './ViewNews.js';

export class ControllerNews {
    constructor({ subscribe }) {
        this.model = new ModelNews();
        this.view = new ViewNews();
        this.subscribe = subscribe;
        this.subscribe('new-search', this.getNews.bind(this));
        // this.subscribe('new-search', (param) => this.getNews(param));
    }

    getNews(search) {
        this.model.getNews(search)
            .then(newsObj => this.view.renderNews(newsObj.articles));
    }
}
