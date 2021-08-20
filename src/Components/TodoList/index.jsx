import React, { useEffect, useRef, useState } from 'react';
import './Todolist.css'
import PropTypes from 'prop-types';
import { MdSystemUpdate } from 'react-icons/md'
import { AiFillDelete } from 'react-icons/ai'
import {v4}  from 'uuid'

Todolist.propTypes = {
    todolist : PropTypes.array,
    handleInsert: PropTypes.func,
    handleDelete: PropTypes.func,
    handleUpdate: PropTypes.func,
};

Todolist.defaultProps = {
    todolist: [],
    handleInsert: null,
    handleDelete: null,
    handleUpdate:null,
}

function Todolist(props) {

    const date = new Date();
    const h = `0${date.getHours()}`.slice(-2);
    const m = `0${date.getMinutes()}`.slice(-2);
    const s = `0${date.getSeconds()}`.slice(-2);

    let {todolist,handleInsert,handleDelete,handleUpdate} = props

    const [input,setInput] = useState('');
    const [search,setSearch] = useState('')
    const [list,setList] = useState([...todolist])

    const update = useRef([]);

    const handleChangeValue =  (e) => {
        setInput(e.target.value);
    }

    const onHandleInsert = () => {
        if(handleInsert){
            const jobValue = {
                id:v4(),
                name:input,
                time: `${h} : ${m} : ${s}`,
                isComplete:false
            }
            handleInsert(jobValue);
            setInput('');
        }
    }

    const onHandleDelete = (id)=>{
        if(handleDelete){
            handleDelete(id);
        }
    }


    const onHandleInput= (id) => {
        const btn = document.querySelector('.submit');
        btn.innerText = 'Update'

        const index = todolist.findIndex(item => item.id === id);
      
        setInput(todolist[index].name);

        update.current = {
            ...todolist[index],
        }

        
    }
    
    const onHandleUpdate =() => {
        if(handleUpdate){
            const jobValue = {
                ...update.current,
                name: input,
                time: `${h} : ${m} : ${s}`,
            }    

            handleUpdate(update.current.id,jobValue);
            setInput('')
        }
    }

    const onHandleSearch =(e) =>{
            setSearch(e.target.value)
            
    }

    useEffect(() => {
        const result = todolist.filter((todo) => {
            return todo.name.indexOf(search) !== -1
        })     

        setList(result);
    },[search,todolist])

    const handle = () => {
        const btn = document.querySelector('.submit');
        
        if (btn.innerText === 'Insert') {
            onHandleInsert()
        }else{
           onHandleUpdate()
           btn.innerText= 'Insert'
        }
    
    }
    
    return (
        <div className="body">
            <div className="content">
                <h2>DANH SÁCH CẦN LÀM NÈ BÀ CON</h2>
                <input onChange={(e)=>onHandleSearch(e)} value={search} type="text" placeholder="Nhập để tìm kiếm ..." />
                <ul className="todo__list">
                    <div className="insert__box">
                        <input onChange={(e) => handleChangeValue (e)} value={input} placeholder="Nhập công việc cần thêm" type="text" />
                        <button className="submit" disabled={!input} onClick={handle}>Insert</button>
                    </div>
                  
                    {
                        list.map((todo) => {
                            return (
                            <li key={todo.id}>
                                <div>
                                    {todo.name}
                                    <p>{todo.time}</p>
                                </div>
                                <div>
                                    <i onClick={() => onHandleInput(todo.id)}>
                                        <MdSystemUpdate />
                                    </i>
                                    <i onClick={() => onHandleDelete(todo.id)}>
                                         <AiFillDelete  />
                                    </i>
                                </div>
                            </li>
                            )
                        })
                    }
                
                </ul> 
            </div>
        </div>
    );
}

export default Todolist;