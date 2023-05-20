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
      {hide ? <CreateTodo defaultValues={{ name, age, email }} addData={editData} /> : (
        <>
          <h2>{name}</h2>
          <h2>{age}</h2>
          <p>{email}</p>
          <button onClick={deleteCard}>remove</button>
          <button onClick={() => setHide(!hide)}>Edit</button>
        </>
      )}
    </div>
  )
}
