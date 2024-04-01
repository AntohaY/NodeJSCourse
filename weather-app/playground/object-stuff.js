const name = 'Anton'

const age = 26

const user = {
    name,
    age,
    location: 'Kherson'
}


const product = {
    label: 'Red notebook',
    price: 2,
    stock: 123,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

const {label, stock, price: price123, rating = 5} = product
console.log(label)
console.log(stock)
console.log(price123)
console.log(rating) //5