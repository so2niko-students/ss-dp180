export class TemplateNews {
    getNewsTemplate({ urlToImage, description, title, description, url, name }) {
        return `<div class="card mb-3" style="width: 18rem;">
        <img src="${urlToImage}" class="card-img-top" alt="${description}">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description}</p>
            <a href="${url}" class="btn btn-primary">Go ${name}</a>
        </div>
    </div>`;
    }
}