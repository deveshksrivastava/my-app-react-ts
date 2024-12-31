import React, {useState,useEffect} from 'react'

export const TodoApp = () => {
    const [myData, setMyData] = useState<any>([])
    const [id, setId] = useState<number>(0)
    const [todo, setTodo] = useState<number>(0)
    const [completed, setCompleted] = useState<number>(0)
    const [userId, setUmapserId] = useState<number>(0)
    useEffect(() => {

        // const data = fetch('https://jsonplaceholder.typicode.com/todos')
        const response = fetch('https://dummyjson.com/todos')
        const data = response.then((res) => res.json())
        const result = data.then((data) => {
           console.log(data.todos   ) 
           setMyData(data.todos)
         })
    
    }, [])

    const handleAdd = () => {
        const newItem = {id: 31, todo: 'Go to the office', completed: true, userId: 143}
        const newData = [...myData, newItem]
        // myData.push(newItem)
        setMyData(myData)

        console.log("MY NEW DATA IS ", myData)
    }
    
  return (
    <div>
        <h1>TO DO APP</h1>
        
        {/* {id: 30, todo: 'Go to the gym', completed: true, userId: 142} */}
        <div>
            {/* id<input type='text' placeholder='Enter ID...' onChange={} /> */}
            todo<input type='text' placeholder='Enter todo...' />
            completed<input type='text' placeholder='Enter completed...' />
            userId<input type='text' placeholder='Enter userId...' />
            <button onClick={handleAdd}>Submit</button>
        </div>
        <ul>
        {
        myData && myData.map((item:any)=>{
        return      <li>{item.todo}</li>
        })}
        </ul>

    </div>
  )
}
