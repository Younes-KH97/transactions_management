from typing import List
from fastapi import Body, FastAPI, Path, Query, HTTPException, status
from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel, Field
from database import SessionLocal
from sqlalchemy import select
import models

class Transaction(BaseModel):
    text: str = Field(...)
    amount: float = Field(...)

    class config:
        orm_mode = True

class TransactionInDb(Transaction):
    id: int

    class config:
        orm_mode = True

transactions = [

]

app = FastAPI()
session = SessionLocal()

@app.get('/transactions/{transaction_id}', tags = ["transactions"], status_code=status.HTTP_200_OK)
async def method_name(transaction_id: int = Path(...)):
    transaction = session.query(models.Transaction).filter_by(id = transaction_id).first()
    if not transaction:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"transaction with id: {transaction_id} in not found")
    return transaction

@app.post('/transactions', tags = ["transactions"], status_code = status.HTTP_201_CREATED)
async def method_name(transaction: Transaction = Body(...)):
    transaction_ = models.Transaction(**jsonable_encoder(transaction))
    session.add(transaction_)
    session.commit()
    return transaction

@app.delete('/transactions/{transaction_id}', tags = ["transactions"], status_code = status.HTTP_200_OK)
async def method_name(transaction_id: int = Path(...)):
    transaction = session.get(models.Transaction, transaction_id) 
    if not transaction:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"transaction with id: {transaction_id} is not found")
    session.delete(transaction)
    session.commit()
    

@app.put('/transactions/{transaction_id}', status_code=status.HTTP_200_OK ,tags = ["transactions"])
async def method_name(transaction_id: int = Path(...), 
                      new_transaction: Transaction = Body(...) 
                     ):    
    stmt = select(models.Transaction).where(models.Transaction.id == transaction_id)
    try:
        transaction = session.scalars(stmt).one()
    except:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="transaction not found")

    transaction.text = new_transaction.text
    transaction.amount = new_transaction.amount
    #print(transaction)
    session.commit()


@app.get('/transactions', status_code=200,
                          tags = ["transactions"]
                        )
async def method_name():
    items = session.query(models.Transaction).all()
    return items

