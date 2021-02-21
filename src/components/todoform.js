import React , {useState} from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
function Todoform() {

  const [newTodo , setNewTodo] = useState('')

  const [todos , setTodos] = useState([])

  function handeltodo(e){
    e.preventDefault();
    setNewTodo(e.target.value)
    
  
    
  }

  function handelNewtodo(e){
    e.preventDefault()
    
    if (newTodo === '') return
    setTodos([...todos , { id: todos.length, text: newTodo }]);
    setNewTodo('');
    
    
    // console.log(todo)
  }


  function  removetodo(id){
    setTodos(todos.filter((todo) => todo.id !== id));
  }

 function handelRemovetodo(e) {
   e.preventDefault()
   setTodos([])

 }


    return(
            <>
            <div className = "heading"> 
            <   h1> To do list </h1>
            </div>
             <div className="app-background">

               
              <form id = "to-do" onSubmit={handelNewtodo}>
                <input /*type = "text" */ placeholder = "Enter todo...." value={newTodo} onChange={handeltodo}></input>
                <button onClick={handelNewtodo} className="add-btn"> Add  </button>  
                <button onClick={handelRemovetodo}className="Btn-reset" >Reset  </button>
                

                 <br></br>
                 

                <ul>
                  {todos.map((todo) => (
                   
                    <li key = {todo.id}>
                      {todo.text} 
                      <a className="remove" href="#" onClick={()=> removetodo(todo.id)}>
                        <DeleteForeverIcon/>
                       </a>
                       
                    </li>
                     
                   
                  ))}
                </ul>
              </form>

                 
              
               
      
             </div>
            </>
    )
}

export default Todoform;