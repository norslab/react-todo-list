import React from "react";
import { CreateTodo } from "./components/create-todo";
import { CardTodo } from "./components/card-todo";

function App() {
  const [data, setData] = React.useState([]);
  const addData = (item) => {
    setData((p) => {
      return [...p, { ...item, id: new Date().getTime() }]
    })
  }

  return (
    <div>
      <CreateTodo addData={addData} />
      {data.map((item) => (
        <CardTodo setData={setData} key={item.id} {...item} />
      ))}
    </div>
  )
}

export default App
