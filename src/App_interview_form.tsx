import React, { useState } from 'react'
import './App.css'

const myJson = [
    {
        name: 'john1',
        email: 'john1@gmail.com',
        password: '123',
    },
    { name: 'john2', email: 'john2@gmail.com', password: '1231' },
]

function App_interview_form() {
    // const [test, setTest] = useState('')

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    })

    // 1. React.ChangeEvent<HTMLInputElement>
    // 2. if using form
    //  event: React.FormEvent<HTMLFormElement>
    //  event.preventDefault();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        console.log('Name', name)
        console.log('Value', value)

        setValues((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = () => {
        // console.log(values)
        const temp = [...myJson]
        const { name, email, password } = values
        const newList = { ...temp, name, email, password }
        console.log('vijay', newList)
    }

    return (
        <div className="App">
            <h1>Registratino form</h1>
            Name
            <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
            />{' '}
            <br />
            Password:
            <input
                type="text"
                name="password"
                value={values.password}
                onChange={handleChange}
            />
            <br />
            EMail{' '}
            <input
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
            />
            <br />
            {/* Test{' '}
            <input
                type="text"
                name="test"
                value={test}
                onChange={(e) => setTest(e.target.value)}
            />
            <br /> */}
            <button onClick={handleSubmit}>Submit</button>
            {/* {JSON.stringify(name+ email+password)} */}
            {JSON.stringify(myJson)}
        </div>
    )
}

export default App_interview_form

// 1) Email
// 2) Password
// 3) Name
// 4) Submit button
