import { http } from 'msw'

import { testArray } from '../testArray'

export const handlers = [
  http.get('/categories', () => {
    return new Response(JSON.stringify(testArray), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }),
  http.get('/categories/:id/products', () => {
    const products = {
      totalCount: 30,
      limit: 6,
      products: [
        { id: 1, productName: 'Товар 1' },
        { id: 2, productName: 'Товар 2' },
        { id: 3, productName: 'Товар 3' },
        { id: 4, productName: 'Товар 4' },
        { id: 5, productName: 'Товар 5' },
        { id: 6, productName: 'Товар 6' },
        { id: 7, productName: 'Товар 7' },
        { id: 8, productName: 'Товар 8' },
        { id: 9, productName: 'Товар 9' },
        { id: 10, productName: 'Товар 10' }
      ]
    }
    return new Response(JSON.stringify(products), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  })
]
