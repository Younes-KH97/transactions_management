import { Container } from '@mui/material'
import axios from 'axios'
import React from 'react'
import AddTransaction from '../components/AddTransaction'
import Balance from '../components/Balance'
import Header from '../components/Header'
import IncomeExpense from '../components/IncomeExpense'
import Transactions from '../components/Transactions'

const Main = () => {
  const res =  axios.get('http://localhost:8081/api/v1/expense').then(
    function (resp) {
      console.log(resp.data)
    }
  );
  
  return (
    
    <Container
    sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'column' },
        alignItems: 'center',
        width: 1
      }}
    >

        <Header />
        <Balance />
        <IncomeExpense />
        <Transactions />
        

    </Container>
    
  )
}

export default Main