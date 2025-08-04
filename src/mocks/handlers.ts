import { http } from 'msw'

import { staticProductsDataArray } from './staticProductsDataArray'

export const handlers = [
  http.get('/categories', () => {
    return new Response(JSON.stringify(staticProductsDataArray), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }),
  http.get('/categories/:id/products', () => {
    const products = {
      totalCount: 30,
      limit: 8,
      products: [
        { id: 1, productName: 'Букет 1', img: '/bouquet.jpeg', price: 7600 },
        { id: 2, productName: 'Букет 2', img: '/bouquet.jpeg', price: 7600 },
        { id: 3, productName: 'Букет 3', img: '/bouquet.jpeg', price: 7600 },
        { id: 4, productName: 'Букет 4', img: '/bouquet.jpeg', price: 7600 },
        { id: 5, productName: 'Букет 5', img: '/bouquet.jpeg', price: 7600 },
        { id: 6, productName: 'Букет 6', img: '/bouquet.jpeg', price: 7600 },
        { id: 7, productName: 'Букет 7', img: '/bouquet.jpeg', price: 7600 },
        { id: 8, productName: 'Букет 8', img: '/bouquet.jpeg', price: 7600 },
        { id: 9, productName: 'Букет 9', img: '/bouquet.jpeg', price: 7600 },
        { id: 10, productName: 'Букет 10', img: '/bouquet.jpeg', price: 7600 }
      ]
    }
    return new Response(JSON.stringify(products), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  })
]
