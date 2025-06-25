export interface Category {
  id: number
  categoryName: string
  products: [
    {
      id: number
      productName: string
    }
  ]
}
