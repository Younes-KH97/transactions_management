import { Box, Button, TextField } from '@mui/material'
import React, { useContext } from 'react'
import { useFormik } from 'formik';
import { GlobalContext } from '../../context/GlobalState';
import { useNavigate } from 'react-router-dom';

const FormTransaction = () => {
  const {addNewTransactionBy} = useContext(GlobalContext)
  let navigate = useNavigate()
  
    const formik = useFormik({
      initialValues: {
        text: '',
        amount: ''
      },
      onSubmit: values => {
        // console.log(JSON.stringify(values, null, 2));
        // console.log(values.text);
        const t = {id: Math.floor(Math.random()*1000),
                  text: values.text,
                  amount: Math.floor(values.amount)
                  }
        addNewTransactionBy(t)
        formik.resetForm();
        navigate('/')
      },
    });
    

  return (

  <Box component="form" onSubmit={formik.handleSubmit} noValidate 
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            m: 1,
            minWidth: { md: 350 },
            }}
  >
            <Box component="span">
                Text
            </Box>

            <TextField
              margin="normal"
              required
              fullWidth
              label="Enter text..."
              name="text"
              onChange={formik.handleChange}
              value={formik.values.text}
            />

            <Box component="span">
                Amount
            </Box>
            <Box component="span">
                (negative-expensive, positive-income)
            </Box>

            <TextField
              margin="normal"
              required
              fullWidth
              name="amount"
              label="Enter amount"
              onChange={formik.handleChange}
              value={formik.values.amount}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add transaction
            </Button>
    </Box>



  )
}

export default FormTransaction