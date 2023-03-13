let products = [
    { id: '1', categoria: 'Varitas', name: "Varita Harry Potter", price: 5000, description:"Insertar aqui descripción del producto", foto: 'https://cdn.shopify.com/s/files/1/0514/6332/3817/products/256320_2.png?v=1638955883' },
    { id: '2', categoria: 'Varitas', name: "Varita Hermione Granger", price: 4500, description:"Insertar aqui descripción del producto", foto: 'https://cdn.shopify.com/s/files/1/0514/6332/3817/products/Hermione2_Product_800x.png?v=1639063444' },
    { id: '3', categoria: 'Varitas', name: "Varita Ron Weasley", price: 4000, description:"Insertar aqui descripción del producto", foto: 'https://cdn.shopify.com/s/files/1/0514/6332/3817/products/Ron1_Product_800x.png?v=1639126271' },
    { id: '4', categoria: 'Varios', name: "Soporte Varitas", price: 2500, description:"Insertar aqui descripción del producto", foto: 'https://cdn.shopify.com/s/files/1/0514/6332/3817/products/WandStand_1_800x.png?v=1610540195' },
    { id: '5', categoria: 'VestimentaGryffindor', name: "Túnica Gryffindor", price: 8000, description:"Insertar aqui descripción del producto", foto: 'https://cdn.shopify.com/s/files/1/0514/6332/3817/products/1296477_1296649_0.png?v=1616145541' },
    { id: '6', categoria: 'VestimentaRavenclaw', name: "Túnica Ravenclaw", price: 8000, description:"Insertar aqui descripción del producto", foto: 'https://cdn.shopify.com/s/files/1/0514/6332/3817/products/1296491_1296657_0.png?v=1613579776' },
    { id: '7', categoria: 'VestimentaHufflepuff', name: "Túnica Hufflepuff", price: 8000, description:"Insertar aqui descripción del producto", foto: 'https://cdn.shopify.com/s/files/1/0514/6332/3817/products/1296498_1296661_0.png?v=1616145737' },
    { id: '8', categoria: 'VestimentaSlytherin', name: "Túnica Slytherin", price: 8000, description:"Insertar aqui descripción del producto", foto: 'https://cdn.shopify.com/s/files/1/0514/6332/3817/products/1296484_1296653_0.png?v=1613579670' },
]

export const gFetch = (id) => new Promise((res, rej) => {
    let condition = true
    if (condition) {
        setTimeout(() => {
            res(id ? products.find(prod => id === prod.id) : products)
        }, 1000)
    } else {
        rej('Ha ocurrido un error')
    }
})
