import React from 'react'

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
      <form onSubmit={submit}>
        <div>
          <input name="name" value={text.name} onChange={changeState} type="text" placeholder="name" />
        </div>
        <div>
          <input name="age" value={text.age} onChange={changeState} type="text" placeholder="age" />
        </div>
        <div>
          <input name="email" value={text.email} onChange={changeState} type="text" placeholder="email" />
        </div>
        <button type="submit">{defaultValues ? "Edit" : "Submit"}</button>
      </form>
    </div>
  )
}
