import React, { useContext, useState } from 'react'
import TransactionHeader from './transactions/TransactionHeader'
import TransactionList from './transactions/TransactionList'

import axios from 'axios'

const Transactions = () => {

 // const {transactions} = useContext(GlobalContext)

  const [transactions, setTransactions] = useState([])
  const res =  axios.get('http://localhost:8081/api/v1/expense').then(
    function (resp) {
      setTransactions(resp.data)
    }
  );

  return (
    <>
        <TransactionHeader />
        <TransactionList transactions = {transactions}/>
    </>
  )
}

export default Transactions