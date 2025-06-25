import { useEffect } from 'react'

const Test = () => {
  useEffect(() => {
    fetch('/categories')
      .then((res) => res.json())
      .then(console.log)
  }, [])
  return <div style={{ color: 'black' }}>Дефолтная сборка</div>
}
export default Test
