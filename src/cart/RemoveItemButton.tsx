import { Box, Button, Typography } from '@mui/material'

const RemoveItemButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Box>
      <Button onClick={onClick}>
        <Typography>-</Typography>
      </Button>
    </Box>
  )
}

export default RemoveItemButton
