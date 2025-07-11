import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { useCategories } from './mocks/hooks/useCategories'
import { useProducts } from './mocks/hooks/useProducts'
import PaginationComponent from './PaginationComponent'
import { Category, Product } from './types/ApiDataTypes'

const Main = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(1)
  const [page, setPage] = useState<number>(1)
  const { data: categories, isLoading } = useCategories()
  const { data: products, refetch } = useProducts(selectedCategoryId)
  useEffect(() => {
    if (selectedCategoryId !== null) {
      setPage(1)
      refetch()
    }
  }, [selectedCategoryId, refetch])
  if (isLoading || !products || !products.products) {
    return <div>Загрузка...</div>
  }

  const start = (page - 1) * products?.limit
  const end = start + products?.limit
  const currentProducts = products.products.slice(start, end)

  return (
    <MainWrapper>
      <CategoriesWrapper>
        {categories.map((category: Category) => (
          <div key={category.id}>
            <CategoryCard
              key={category.id}
              onClick={() => setSelectedCategoryId(category.id)}
            >
              {category.categoryName}
            </CategoryCard>
          </div>
        ))}
      </CategoriesWrapper>
      <ProductsGrid>
        {currentProducts.map((product: Product) => (
          <ProductCard key={product.id}>{product.productName}</ProductCard>
        ))}
      </ProductsGrid>
      {products?.totalCount && (
        <PaginationComponent
          count={products?.totalCount}
          limit={products?.limit}
          onChange={(newPage: number) => setPage(newPage)}
          page={page}
        />
      )}
    </MainWrapper>
  )
}
export default Main

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border: 2px dashed blue;
`

const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 2px dashed blue;
  width: 100%;
  justify-content: space-between;
`

const CategoryCard = styled.div`
  flex: 1 1 calc(33.333% - 16px);
  min-width: 200px;
  max-width: 100%;
  min-height: 200px;
  max-height: 100%;
  margin: 1em;
  border: 1px solid gray;
`

const ProductsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
  width: calc(100% - 20px);
  border: 2px dashed blue;
  padding-left: 15px;
  padding-right: 5px;
`
const ProductCard = styled.div`
  flex: 0 1 calc(25% - 10px);
  box-sizing: border-box;
  min-width: 180px;
  min-height: 400px;
  border: 1px solid gray;
`
