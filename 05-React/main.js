window.addEventListener("load", function() {
    let template = document.getElementById('article-template');
    let articles = document.getElementById('articles');

    for(let i = 1; i <= 5; i++){
    let clonado = template.cloneNode(true);
        clonado.removeAttribute('id');
    let h2 = clonado.getElementsByTagName('h2')[0];
    h2.innerHTML = h2.textContent + ' ' + i;

        articles.appendChild(clonado);
    }
});


