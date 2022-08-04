import { Box } from '@mui/material'
import React from 'react'

const FormHeader = () => {
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: { xs: 'center', md: 'flex-start' },
      m: 2,
      minWidth: { md: 350 },
      borderBottom: 1
    }}
  >
    <Box component="span" sx={{ fontSize: 22, mt: 1, fontWeight: "midium" }}>
      Add new transaction
    </Box>


  </Box>
  )
}

export default FormHeader