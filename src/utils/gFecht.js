let productos = [
    { id: '1', categoria: 'Varitas', name: "Varita Harry Potter", price: 5000, foto: './image/varitaharry.png' },
    { id: '2', categoria: 'Varitas', name: "Varita Hermione Granger", price: 4500, foto: './image/varitahermione.png' },
    { id: '3', categoria: 'Varitas', name: "Varita Ron Weasley", price: 4000, foto: './image/varitaron.png' },
    { id: '4', categoria: 'Varios', name: "Soporte Varitas", price: 2500, foto: './image/soportevarita.png' },
]

export const gFetch = (id) => new Promise((res, rej) => {
    let condition = true
    if (condition) {
        setTimeout(() => {
            res(id ? productos.find(prod => id === prod.id) : productos)
        }, 2000)
    } else {
        rej('Ha ocurrido un error')
    }
})
