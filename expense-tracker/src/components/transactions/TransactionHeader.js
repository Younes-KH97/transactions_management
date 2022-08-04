import { Box } from '@mui/material'
import React from 'react'

const TransactionHeader = () => {
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: { xs: 'center', md: 'flex-start' },
      m: 3,
      minWidth: 1,
      borderBottom: 1
    }}
  >
    <Box component="span" sx={{ fontSize: 22, mt: 1, fontWeight: "midium" }}>
      History
    </Box>


  </Box>
  )
}

export default TransactionHeader