import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const PaginationComponent = ({
  count,
  onChange,
  page,
  limit
}: {
  count: number
  onChange: (newPage: number) => void
  page: number
  limit: number
}) => {
  const pagesCount = Math.ceil(count / limit)
  return (
    <Stack spacing={2}>
      <Pagination
        count={pagesCount}
        onChange={(_, newPage) => onChange(newPage)}
        page={page}
      />
    </Stack>
  )
}

export default PaginationComponent
