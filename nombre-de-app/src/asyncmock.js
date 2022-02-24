const products = [
    { id: 1, name: 'Auris', price: 'usd 1000', category: 'auriculares', img:'https://http2.mlstatic.com/D_NQ_NP_812249-MLA45690287042_042021-V.webp', stock: 25, description:'Descripcion de auris'},
    { id: 2, name: 'Mouse', price: 'usd 800', category: 'mouse', img:'https://http2.mlstatic.com/D_NQ_NP_755532-MLA46389425748_062021-V.webp', stock: 16, description:'Descripcion de mouse'},
    { id: 3, name: 'computadora gamer', price: 'usd 1200', category: 'PC', img:'https://http2.mlstatic.com/D_NQ_NP_878315-MLA48417394279_122021-W.webp', stock: 10, description:'Descripcion de PC'}
]

const categories = [
    {id: 'Auris', description: 'Auris'},
    {id: 'Mouse', description: 'Mouse'},
    {id: 'PC', description: 'PC'}
]

export const getProducts = (idCategory) => {
    return new Promise ((resolve) => {
        const productsToResolve = idCategory ? products.filter(item => item.category === idCategory) : products
        setTimeout(() => {
            resolve(productsToResolve);
        },2000);
    });
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        const prod = products.find(p => p.id === parseInt(id))
        setTimeout(() => {
            resolve(prod)
        }, 1000)
    })
}

export const getCategories = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categories)
        }, 1000)
    })
}


