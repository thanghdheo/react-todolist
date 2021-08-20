
import { useEffect, useState } from 'react';
import Todolist from './Components/TodoList';



function App() {

  const [todolist,setTodolist] = useState([]);


  useEffect(() => {
    if (localStorage.getItem('list')) {
      setTodolist(JSON.parse(localStorage.getItem('list')))
    }
  },[])

  useEffect(() => {
    localStorage.setItem('list',JSON.stringify(todolist));
  },[todolist])
 

  const handleInsert = (jobValue) => {
    todolist.unshift({
      ...jobValue
    })

  const newTodolist = [...todolist];

  setTodolist(newTodolist)

  }

  const handleUpdate = (id,jobValue) => {
    const index = todolist.findIndex(item => item.id === id);

    todolist[index] = {
      ...jobValue
    }

    const newTodolist = [...todolist];

    setTodolist(newTodolist)
  }

  const handleDelete = (id) => {
    const index = todolist.findIndex(item => item.id === id);

    todolist.splice(index,1);

    const newTodolist = [...todolist];

    setTodolist(newTodolist);
  }



  return (
    <div>
      <Todolist  handleUpdate={(id,job) => handleUpdate(id,job)} handleDelete={(id) => handleDelete(id)} handleInsert={(job) => handleInsert(job)} todolist = {todolist} />
    </div>
  );
}

export default App;
