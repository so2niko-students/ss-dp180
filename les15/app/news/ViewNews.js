// import { Templater } from '../share/Templater.js';
import { TemplateNews } from './TemplateNews.js';

export class ViewNews {
    constructor() {
        this.domNews = document.querySelector('.news');
        this.btnSearch = document.querySelector('.btn__search');
        // this.templater = new Templater('/app/news/templateNews.dp180');
        this.templater = new TemplateNews();
    }

    renderNews(news) {
        let newsStr = '';

        news.forEach(nws => {
            newsStr += this.prepareNewsArticle(nws);
        });

        this.domNews.innerHTML = newsStr;
    }

    prepareArticleData(article) {
        return Object.entries(article).map(el => {
            return {
                name: el[0],
                value: el[1]
            };
        });
    }

    prepareNewsArticle(article) {
        return this.templater.getNewsTemplate(this.prepareArticleData(article));
    }

    addListeners(searchFunc) {
        this.btnSearch.addEventListener('click', searchFunc);
    }

}
