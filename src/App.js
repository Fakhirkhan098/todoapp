import logo from './logo.svg';
import './App.css';
import {useState} from "react"
function App() {
      const [count,setCount]= useState(0)
    const [arr,setArr]= useState(["ali","Asim"])
    const [text,settext]= useState('')

     
    let add =()=>{

       arr.push(text)
       setArr ([...arr])
    }
let deleteTodo=(i)=>{


let newArr= arr.filter((x,n)=>{
  return i!==n;
})
setArr([...newArr])
}



let editTodo=(i)=>{
let newValue=prompt("Enter New Value");
let newArr=arr;
newArr[i]=newValue;
setArr([...newArr])
}


    return(
        <div >
          <input onChange={(e)=>{
             settext (e.target.value) 
          }} 
          placeholder='Enter Name'/>
          <p>{text}</p>
          <button onClick={add}>Add</button>
            {arr.map((x,i)=>(
              <>
                <p key={i} >{x}</p>
                <button onClick={()=>{deleteTodo(i)}}>delete</button>
                <button onClick={()=>{editTodo(i)}}>edit</button>
              </>
            ))}

        </div>
    )
}


export default App;





  //    Arr.push("Saim")
    //    setArr ([...Arr])
    
    // let add =()=>{

    //         setCount("count")
    // }
    // let add =()=>{
    //     if (count < 10) {
            
    //         setCount(count + 1)
    //     }
    // }