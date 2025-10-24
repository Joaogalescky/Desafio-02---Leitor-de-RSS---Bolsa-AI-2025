async function atualizar() {
    const res = await fetch('/api/atualizar');
    const { data } = await res.json();

    const lista = document.getElementById('lista');
    lista.innerHTML = '';

    data.forEach(noticia => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${noticia.link}" target="_blank">${noticia.title}</a>`;
        lista.appendChild(li);
    });
    console.log('Página atualizada!')
}
console.log('Página atualizada automaticamente!')
atualizar();  // Carrega as notícias automaticamente ao abrir a página