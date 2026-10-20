from typing import Optional
from pydantic import BaseModel, ConfigDict

class UserCreate(BaseModel):
    name: str
    department: Optional[str] = None
    email: str
    phone_no: Optional[str] = None
    location: Optional[str] = None

class UserOut(UserCreate):
    id: int
    model_config = ConfigDict(from_attributes=True)