import { setupWorker } from 'msw/browser'

import { handlers } from './handlers.js'

export const browser = setupWorker(...handlers)
