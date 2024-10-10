import { colors } from '@mui/material'
import React, {useState} from 'react'

type Colors = {
    id: number,
    color: string
    check:boolean
}[]

export const TodoAppJune = () => {
    const [text, setText] = useState<string>('')
    const [ischeck, setIsChecked] = useState<boolean>(false)
    const [ischeckAll, setIsCheckedAll] = useState<boolean>(false)
    const[colors, setColors] = React.useState<Colors>([
        {id: 1, color: 'red', check:false},
        {id: 2, color: 'blue', check:false},
        {id: 3, color: 'green', check:false}, 
    ])

  const add = () => {
    console.log('add', text)
    setColors([...colors, {id: colors.length + 1, color: text,check:true }])
  }

  const handleDelete = (id:number) => {
    const newtemp = colors.filter((item)=> item.id !== id)
    setColors(newtemp)
    console.log('delete')
  }

  const handleChecked = (id:number) => {
    const newtemp = colors.map((item)=>{
        if(item.id === id){
          item.check = !item.check
        }
        return item
    })

    setColors(newtemp)
  }

  const handleAllCheck = (e:any) =>{
    setIsCheckedAll(!ischeckAll)

    const listcheckedall = colors.map((item)=>{
        item.check = !ischeckAll
        return item
    })
  }
  return (
    <div className='max-w-2xl mx-auto'>
        <div className="h1">TO APPLICAITON</div>
        <div className="flex">
            <div>
                <label htmlFor="Colors">Color</label>
                <input type="text" name="" id="" onChange={(e)=>setText(e.target.value)} placeholder='Enter todo...' className='border' /><br/>
            </div>
            <button type="button" className='bg-red-400 rounded-lg p-2' onClick={add}>Add Items</button>
        </div>

        <div>
           Select All  <input type="checkbox" name="" id="" onChange={handleAllCheck} />
        </div>
        <div className='pb-12'>
            {
                colors && colors.map((item)=>{
                    return (
                        // <div className='grid grid-cols-3 gap-2 border-2'>
                        //     <div key={item.id} className='pl-24 border-2'>{item.color}</div>
                        //     <div  className='flex justify-end w-full border-2'>
                        //       <button type="button" className='bg-red-400 rounded-lg' onClick={()=>handleDelete(item.id)}>delete</button>
                        //     </div>
                        //     <div className='border-2' >
                        //       <input type="checkbox" name="" id="" checked={item.check} onChange={(e) => handleChecked(item.id)}  />
                        //     </div>
                        // </div>
                        <div className="grid grid-cols-3 gap-2 border-2 justify-items-center items-center">
                          <div className='h-12 flex items-center'>
                            <div>{item.color}</div>
                          </div>
                          <div className='border-2'>
                            <button type="button" className='bg-red-400 rounded-lg' onClick={()=>handleDelete(item.id)}>delete</button>
                          </div>
                          <div> 
                            <input type="checkbox" name="" id="" checked={item.check} onChange={(e) => handleChecked(item.id)}  />
                          </div>
                        </div>
                    ) 
                })
            }
        </div>

        <br />
        <br />
        <br />
    </div>
  )
}
