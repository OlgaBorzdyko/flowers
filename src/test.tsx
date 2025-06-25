import { useCategories } from './mocks/hooks/useCategories'

const Test = () => {
  const { data } = useCategories()
  console.log(data)
  return (
    <div>
      <button></button>
    </div>
  )
}
export default Test
