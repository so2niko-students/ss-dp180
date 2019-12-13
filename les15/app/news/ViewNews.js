import { Templater } from '../share/Templater.js';

export class ViewNews {
    constructor() {
        this.domNews = document.querySelector('.news');
        this.btnSearch = document.querySelector('.btn__search');
        this.templater = new Templater('/app/news/templateNews.dp180');
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
        return this.templater.getHTML(this.prepareArticleData(article));
        //     `<div class="card mb-3" style="width: 18rem;">
        //     <img src="${article.urlToImage}" class="card-img-top" alt="${article.description}">
        //     <div class="card-body">
        //       <h5 class="card-title">${article.title}</h5>
        //       <p class="card-text">${article.description}</p>
        //       <a href="${article.url}" class="btn btn-primary">Go ${article.source.name}</a>
        //     </div>
        //   </div>`;
    }

    addListeners(searchFunc) {
        this.btnSearch.addEventListener('click', searchFunc);
    }

}
