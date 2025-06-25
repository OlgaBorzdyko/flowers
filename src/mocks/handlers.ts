import { http } from 'msw'

import { testArray } from '../testArray'

export const handlers = [
  http.get('/categories', () => {
    return new Response(JSON.stringify(testArray), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  })
]
