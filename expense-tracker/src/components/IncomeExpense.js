import React, { useContext } from 'react'
import { Box, Divider } from '@mui/material'
import { GlobalContext } from '../context/GlobalState'


const IncomeExpense = () => {
  const {transactions} = useContext(GlobalContext)
  const amounts = transactions.map((obj) => obj.amount)

  const incomes = amounts.filter(amount => amount > 0)
  const sum_incomes = incomes.reduce((acc, inc) => acc+=inc ,0)

  
  const expenses = amounts.filter(amount => amount < 0)
  const sum_expenses = expenses.reduce((acc, inc) => acc+=inc ,0)

  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      justifyContent: 'space-evenly',
      alignItems: 'center',
      bgcolor: 'background.paper',
      overflow: 'hidden',
      borderRadius: '12px',
      boxShadow: 1,
      fontWeight: 'bold',
      width: 1
    
    }}
  >
          <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'center', md: 'center' },
        m: 3,
        minWidth: { md: 150 },
      }}
    >
      <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
        INCOME
      </Box>
      <Box component="span" sx={{ color: '#357a38', fontSize: 22 }}>
        ${sum_incomes}
      </Box>
    </Box>
    <Divider orientation="vertical" flexItem />
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'center', md: 'flex-center' },
        m: 3,
        minWidth: { md: 150 },
      }}
    >
      <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
        EXPENSE
      </Box>
      <Box component="span" sx={{ color: '#ff1744', fontSize: 22 }}>
        ${sum_expenses}
      </Box>
    </Box>
  </Box>
  )
}

export default IncomeExpense