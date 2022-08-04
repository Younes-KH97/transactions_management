import { Box } from '@mui/material'
import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {


  const {transactions} = useContext(GlobalContext)
  const amounts = transactions.map((item) => item.amount)
  const total = amounts.reduce((acc, item) => acc+=item,0).toFixed(2)

  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      m: 3,
      width:1
    }}
  >
    <Box component="span" sx={{ fontSize: 22, mt: 1, fontWeight: "midium" }}>
      YOUR BALANCE
    </Box>
    <Box component="span" sx={{ color: 'secondary', fontSize: 28, fontWeight: "bold" }}>
      ${total}
    </Box>
  </Box>
  )
}

export default Balance