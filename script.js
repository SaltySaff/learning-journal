import { articles } from '/data.js'

const blog = document.querySelector('.blog')
const viewMore = document.querySelector('.view-more')

let expanded = false;

viewMore.addEventListener('click', toggleMoreLess)

function generateHtml(articles, count) {
    let articlesHtml = '';

    for (let i = 0; i < articles.length && i < count; i++) {
        const article = articles[i]
        articlesHtml += 
        `
            <div class="blog-container">
                <img class="blog-img" src="${article.image}" alt="${article.alt}">
                <div class="blog-text-container">
                    <time class="blog-date">${article.date}</time>
                    <h2 class="blog-title">
                        ${article.title}
                    </h2>
                    <p class="blog-text">
                        ${article.blurb}
                    </p>
                </div>
            </div>
        `
    }
    return articlesHtml;
}

function toggleMoreLess() {
    const viewMore = document.querySelector('.view-more')
    

    if (!expanded) {
        render(9);
        blog.lastElementChild.scrollIntoView({ behavior: 'smooth' });
        viewMore.textContent = 'View Less'
        expanded = true;
    } else {
        render(6)
        blog.firstElementChild.scrollIntoView({ behavior: 'smooth' });
        blog.scrollTop = blog.scrollHeight;
        viewMore.textContent = 'View More'
        expanded = false;
    }

}

function render(articleCount) {
    blog.innerHTML = generateHtml(articles, articleCount)
}

render(6)