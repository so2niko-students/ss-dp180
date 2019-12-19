import { TemplateNews } from './TemplateNews.js';

export class ViewNews {
    constructor() {
        this.domNews = document.querySelector('.news');
    }

    renderNews(news) {
        this.domNews.innerHTML = news.map(nws => TemplateNews.getNewsTemplate(nws)).join('');
    }
}
