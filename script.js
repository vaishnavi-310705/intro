const catalog =[
    {id:1, name: 'product 1',price: 20},
    {id:2, name: 'product 2',price: 30},
    {id:3, name: 'product 3',price: 25},
];
function loadcatalog(){
    const catalogContainer=document.getElementById('content');
    catalogContainer.innerHTML='<h2>catalog</h2>';
    catalog.forEach(product =>{
        const productCard =document.createElement('div');
        productCard.classList.add('product-card');
    
    productcard.innerHTML=`
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
    <button onclick="addtoCart(${product.id})">Add to cart</button>
    `;
    catalogContainer.appendChild(productCard);
});

}
function addToCart(productId){
    console.log(`Product ${productid}added to cart`);
}
loadcatalog();

