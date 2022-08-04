from database import Base
from sqlalchemy import String, Integer, Column, Float

class Transaction(Base):
    __tablename__ = "transaction"
    text = Column(String(255), nullable = False, unique = True)
    amount = Column(Float)
    id = Column(Integer, primary_key = True)

    def __repr__(self) -> str:
        return f"Transaction details: text: {self.text} \namount: {self.amount}"
