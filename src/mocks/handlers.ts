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
        { id: 1, productName: 'Товар 1', img: '/bouquet.jpeg' },
        { id: 2, productName: 'Товар 2', img: '/bouquet.jpeg' },
        { id: 3, productName: 'Товар 3', img: '/bouquet.jpeg' },
        { id: 4, productName: 'Товар 4', img: '/bouquet.jpeg' },
        { id: 5, productName: 'Товар 5', img: '/bouquet.jpeg' },
        { id: 6, productName: 'Товар 6', img: '/bouquet.jpeg' },
        { id: 7, productName: 'Товар 7', img: '/bouquet.jpeg' },
        { id: 8, productName: 'Товар 8', img: '/bouquet.jpeg' },
        { id: 9, productName: 'Товар 9', img: '/bouquet.jpeg' },
        { id: 10, productName: 'Товар 10', img: '/bouquet.jpeg' }
      ]
    }
    return new Response(JSON.stringify(products), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  })
]
