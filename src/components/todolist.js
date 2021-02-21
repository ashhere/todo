// import React , {useState} from 'react';

// function Todoform() {

//   const [newTodo , setNewTodo] = useState('')

//   const [todos , setTodos] = useState([])

//   function handeltodo(e){
//     e.preventDefault()
//     setNewTodo(e.target.value)
    
//   }

//   function handelNewtodo(e){
//     e.preventDefault()
//     if (newTodo === '') return
//     setTodos([...todos , { id: todos.length, text: newTodo }])
    
//     // console.log(todo)
//   }


//   function  removetodo(id){
//     setTodos(todos.filter((todo) => todo.id !== id));
//   }


//     return(
//             <>
//              <div className="app-background">
//               <form id = "to-do" onSubmit={handelNewtodo}>
//                 <input /*type = "text" */ placeholder = "Enter text" onChange={handeltodo}></input>
//                 <button onClick={handelNewtodo}>Add  </button> <br></br>

//                 <ul>
//                   {todos.map((todo) => (
                   
//                     <li key = {todo.id}>
//                       {todo.text} 
//                       <a className="remove" href="#" onClick={()=> removetodo(todo.id)}>
//                          Delete
//                        </a>
//                     </li>
                     
                   
//                   ))}
//                 </ul>
//               </form>
      
      
//              </div>
//             </>
//     )
// }

// export default Todoform;