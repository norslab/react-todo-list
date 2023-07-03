import React from 'react'
import { CreateTodo } from '../create-todo'

export const CardTodo = ({ name, age, email, id, setData }) => {
  const [hide, setHide] = React.useState(false)
  const deleteCard = () => {
    setData((p) => {
      return p.filter((item) => item.id != id)
    })
  }

  const editData = (item) => {
    setData((p) => {
      return p.map((el) => (el.id == id ? {...item, id} : el))
    })
    console.log(item);
    setHide(false)
  }

  return (
    <div style={{ border: "2px solid #e5e5" }}>
      {hide ? <CreateTodo defaultValues={{ name, }} addData={editData} /> : (
        <div className='d-flex align-items-center py-2 px-2 border-bottom item '>
          <input className=' mt-0 me-2 checkbox' type="checkbox" />
          <p className='m-0 '>{name}</p>
          {/* <h2>{age}</h2>
          <p>{email}</p> */}
          <div className='div ms-auto'>
             <button className='btn btn-success edit' onClick={() => setHide(!hide)}>Edit</button>
              <button className='btn btn-danger ms-1 delete' onClick={deleteCard}>remove</button>
          </div>
          
        </div>
      )}
    </div>
  )
}
