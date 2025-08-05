export interface Category {
  id: number
  categoryName: string
  img: string
  products: [
    {
      id: number
      productName: string
    }
  ]
}
export interface Product {
  id: number
  productName: string
  img: string
  price: number
}
