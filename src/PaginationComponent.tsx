import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const PaginationComponent = ({ count }: { count: number }) => {
  const pageLimit = 10
  const pagesCount = Math.ceil(count / pageLimit)
  return (
    <Stack spacing={2}>
      <Pagination count={pagesCount} />
    </Stack>
  )
}

export default PaginationComponent
