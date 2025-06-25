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
    const products = [
      { id: 1, productName: 'Товар 1' },
      { id: 2, productName: 'Товар 2' },
      { id: 3, productName: 'Товар 3' }
    ]
    return new Response(JSON.stringify(products), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  })
]
