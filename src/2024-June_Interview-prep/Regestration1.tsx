import React, {useState} from 'react'
import UserClass from "./UserClass"

const userJson = [{
  userid: "1",
  name: "Amit",
  city: "Bombay"
}, {
  userid: "2",
  name: "Camol",
  city: "Delhi"
}, {
  userid: "3",
  name: "Emili",
  city: "London"
}]

type User = {
  userid: string,
  name: string,
  city: string
}
const Regestration1 = () => {
  const [users, setUsers] = useState({
    name:"",
    city:""
  });
  const [searchtext, setSearchText] = useState<string>("")
  const [userslist, setUsersList] = useState<User[]>(userJson)
  const [userslistTemp, setUsersListTemp] = useState<User[]>([])

  const onChangehHandler = (item:any) =>{
    return (e:any) =>{
      setUsers((prev)=>({...prev, [item]:e.target.value }))
    } 
  }

  const handleSubmit = (e:any) =>{
    e.preventDefault()
    console.log(userslistTemp)
    const newUser:User = {
      userid: Math.random().toString(),
     name: users.name,
     city: users.city,
    }

    setUsersList((prev)=>[...prev, newUser])
    setUsersListTemp((prev)=>[...prev, newUser])
  }
  const handleDelete = (id:string) =>{
    const temp  = userslist.filter(item=> item.userid !== id)
    setUsersList(temp)
  }

  const handleSort = () =>{
    // const temp  = userslist.sort((a,b)=> b.city - a.city)
    // console.log("2", temp)
    // setUsersList(temp)
  }

  console.log("1", userslist)

  const searchHandler = (e:React.MouseEvent<HTMLButtonElement>) =>{
    debugger; // This line will cause the "no-debugger" lint error.

    console.log("search", searchtext)
    const temp  = userslistTemp.filter(item=> item.name.toLowerCase().includes(searchtext.toLowerCase()))
    setUsersList(temp)
  }
  
  return (
    <div className='mx-auto w-4/5 border-2 border-black rounded-md p-4 pt-12 '>
      <div className='flex gap-6 items-center'>
        <input type="text" name="" id="" placeholder='Search Name...' value={searchtext} onChange={(e)=>setSearchText(e.target.value)} className='border-2 border-black' /><br/>
        <button type="submit" className='bg-gray-500 w-24' onClick={searchHandler}>Search</button>
      </div>

      <div>
        <h1 className='text-2xl'>Registration</h1>
        <input  type='text'  placeholder='First Name' value={users.name} onChange={onChangehHandler("name")}  className='border-2 border-black mt-2' /><br/>
        <input  type='text'  placeholder='First Name' value={users.city} onChange={onChangehHandler("city")} className='border-2 border-black mt-2' /><br/>
        <button className='bg-blue-300 border-2 border-black  mt-2' onClick={handleSubmit}>Submit</button><br/>
        {JSON.stringify(users)}
      </div>
   
      {/* {JSON.stringify(userslist)} */}

      <ul>
      <li>
            <div className='flex gap-6 items-center bg-sky-950 text-white'>
              <div>SL NO</div>
              <div className="w-48">ID</div>
              <div>Name</div>
              <div onClick={handleSort} className="cursor-pointer">CITY</div>
              <div></div>
            </div>
          </li>
        {userslist.map((item:any, index:any)=>{
          return <li>
            <div className='flex gap-6 items-center'>
              <div>{index+1}</div>
              <div className="w-64">{item.userid}</div>
              <div>{item.name}</div>
              <div>{item.city}</div>
              <div><button className='bg-blue-300 border-2 border-black  mt-2' onClick={(e)=>handleDelete(item.userid)}>Delete</button><br/></div>
            </div>
            </li>
        })}
      </ul>
      {/* {JSON.stringify(userslist)} */}

      <UserClass fname="devesh" city="london" />
      
    </div>
  )
}

export default Regestration1
