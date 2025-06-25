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
  http.get('/categories/:id/products', ({ params }) => {
    const { id } = params
    const category = testArray.find((category) => category.id === Number(id))
    const products = category?.products || 'В данный момент товаров нет'
    return new Response(JSON.stringify(products), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  })
]
