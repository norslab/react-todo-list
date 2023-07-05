import React from 'react';


export const CreateTodo = ({ addData, defaultValues }) => {
  const [text, setText] = React.useState(defaultValues ? defaultValues : { name: "", age: "", email: "" })
  const submit = (e) => {
    e.preventDefault();
    addData(text)
    setText({ name: "", age: "", email: "" })
  }

  const changeState = (e) => {
    setText((p) => {
      return { ...p, [e.target.name]: e.target.value }
    });
  };
  return (
    <div>
      <form  onSubmit={submit}>
        <div className='contr container-todo'>
          <input className='todo-input' name="name" value={text.name} onChange={changeState} type="text" placeholder="to do list..." />

          <button className='btn-primary' type="submit">{defaultValues ? "Edit" : "Add"}</button>
        </div>
        {/* <div>
          <input name="age" value={text.age} onChange={changeState} type="text" placeholder="age" />
        </div>
        <div>
          <input name="email" value={text.email} onChange={changeState} type="text" placeholder="email" />
        </div> */}
        
      </form>
    </div>
  )
}
