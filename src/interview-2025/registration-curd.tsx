import { name } from '@azure/msal-browser/dist/packageMetadata'
import React from 'react'

type IUser = {
    id: number,
    name: string,
    city: string
}

const myObject = [{
    id: 1,
    name: 'Example Name',
    city: 'Example City',
}]
export default function RegistrationCurd() {
    const [users, setUsers] = React.useState<IUser[]>([])
    const [name, setName] = React.useState('')
    const [city, setCity] = React.useState('')

    const addHandler = () => {
        console.log('add', users)
        const newUser = { id: Math.random(), name: `Example ${name} - ${Math.random()}`, city: `Example ${city} - ${Math.random()}` }
        setUsers([...users, newUser])
    }
    const deleteHandler = (id: number) => {
        const temp = users.filter(item => item.id !== id)
        setUsers(temp)
    }
    const updateHandler = (id: number, name: string, city: string) => {
        console.log('update', id, name, city)
        if (!name || !city) return
        setName(name)
        setCity(city)
        const temp = users.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    name: name,
                    city: city
                }
            }
            return item;
        })
        setUsers(temp)
    }

    const sortHandler = () => {
        console.log('before sort', users)
        const temp = users.sort((a: any, b: any) => b.city - a.city)
        const temp1 = users.sort((a: any, b: any) => a.city.localeCompare(b.city.toString().toLowerCase()));
        console.log('after sort', temp)
        console.log('after sort1', temp1)
        setUsers(temp)
    }
    return (
        <div className='mx-auto max-w-5xl'>
            <h1 className='mt-12 font-extrabold underline mb-6 text-3xl'>Registration</h1>
            <hr />
            NAME: <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className='m-2 bg-slate-300' />
            CITY : <input type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)} className='m-2 bg-slate-300' />
            <button onClick={addHandler} className='bg-blue-500 p-2 rounded-md'>Add</button><br />
            <div >
                <div className='flex gap-4 bg-gray-200 border m-2 p-2'>
                    <div className='w-60'>ID</div>
                    <div className='w-80'>NAME</div>
                    <div className='w-60 text-red-300' onClick={sortHandler}>CITY(SORT)</div>
                    <div className='w-60'>DEELTE</div>
                    <div className='w-60'>UPDATE</div>
                </div>
                {users.map((item) => (
                    <div className='flex gap-4 bg-gray-200 border m-1 p-1'>
                        <div className='w-60'>{item.id}</div>
                        <div className='w-80'>{item.name}</div>
                        <div className='w-60'>{item.city}</div>
                        <div className='w-60'><span onClick={() => deleteHandler(item.id)} className='bg-blue-500 p-1 rounded-md'>delete</span></div>
                        <div className='w-60'><span onClick={() => updateHandler(item.id, item.name, item.city)} className='bg-blue-500 p-1 rounded-md'>update</span></div>
                    </div>
                ))}
            </div>
            <hr />
            {JSON.stringify(users)}
        </ div>
    )
}
