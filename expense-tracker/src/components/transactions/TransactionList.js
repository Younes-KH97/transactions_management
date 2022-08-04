import { Button } from '@mui/material'
import { Box } from '@mui/system'
import { DataGrid } from '@mui/x-data-grid'
import clsx from 'clsx'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState';


const TransactionList = ({transactions}) => {
  const transactions_ = transactions
  const [checkboxSelection, setCheckboxSelection] = React.useState(true)
  const [selectionModel, setSelectionModel] = React.useState([]);
  const {deleteTransactionById} = useContext(GlobalContext)

  const handleDeleteRows = () => {
   for (let index = 0; index < selectionModel.length; index++) {
      deleteTransactionById(selectionModel[index])
   }
   
  }
  

  return (
    <Box   sx={{height: { md: 450, xs: 350 },
    width: 1,
    '& .super-app.positive': {
      backgroundColor: 'rgba(157, 255, 118, 0.49)',
      color: '#1a3e72',
      fontWeight: '600',
    },
    '& .super-app.negative': {
      backgroundColor: '#d47483',
      color: '#1a3e72',
      fontWeight: '600',
    }}} >

    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <Button
        sx={{ mb: 2 }}
        onClick={() => setCheckboxSelection(!checkboxSelection)}
      >

        Toggle checkbox selection
      </Button>

      <Button
          sx={{ mb: 2,
            alignSelf: 'flex-end',
            color:"red",
            size:'large'
            }}
          
            onClick={handleDeleteRows}
        >
      <DeleteOutlineIcon sx={{ fontSize: 40 }}  />
      </Button>


        
      
  </Box>

      <DataGrid
        columns={[
          { field: 'text',
            width: checkboxSelection ? 756: 805} ,

          { field: 'amount',
            type: 'number',
          
          cellClassName: (params) =>
            clsx('super-app', {
              negative: params.value < 0,
              positive: params.value > 0,
            }), },
            
        ]}
        pageSize={6}
        rowsPerPageOptions={[6]}
        rowCount={500}
        checkboxSelection={checkboxSelection} 
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
        }}
        rows={transactions_}
      />
    </Box>
  )
}

export default TransactionList