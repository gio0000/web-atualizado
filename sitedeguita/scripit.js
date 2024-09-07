// Lista de produtos com imagens e informações
const products = [
    { id: 1, name: 'Guitarra Elétrica Stratocaster', price: 'R$ 3.000', image: 'https://www.fender.com/cdn-cgi/image/format=png/https://www.fmicassets.com/Damroot/ZoomJpg/10037/0140510558_fen_ins_frt_1_rr.jpg', link: 'details.html' },
    { id: 2, name: 'Guitarra Acústica', price: 'R$ 1.500', image: 'https://www.fender.com/cdn-cgi/image/format=png/https://www.fmicassets.com/Damroot/ZoomJpg/10037/0140510558_fen_ins_frt_1_rr.jpg', link: 'details.html' },
    // Adicione mais produtos conforme necessário
];

// Função para exibir produtos na página inicial e na página de produtos
function displayProducts() {
    const productContainer = document.querySelector('.product-list');
    if (!productContainer) return; // Verifica se o container existe

    productContainer.innerHTML = ''; // Limpa o container

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="200" height="150">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <a href="${product.link}">Ver mais</a>
        `;
        
        productContainer.appendChild(productElement);
    });
}

// Adiciona um listener para carregar os produtos e gerenciar o vídeo quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
});

let slideIndex = 0;
