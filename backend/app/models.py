from sqlalchemy import Column, Integer, String
from app.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)   # auto-increments
    name = Column(String(100), nullable=False)
    department = Column(String(100))
    email = Column(String(150), unique=True, nullable=False)
    phone_no = Column(String(20))      # String, not Integer: keeps +91 and leading zeros
    location = Column(String(100))