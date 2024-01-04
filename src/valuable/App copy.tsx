import React, { useState } from 'react'

type User = {
    name: string
    email: string
    password: string
}

const jsonData = [
    {
        name: 'john1',
        email: 'john1@gmail.com',
        password: '123',
    },
    { name: 'john2', email: 'john2@gmail.com', password: '1231' },
]
export default function AppBootstrap() {
    const [values, setValues] = useState({ name: '', email: '', password: '' })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        // Perform actions with the form data, for example, sending it to a server
        console.log('Form submitted:', values)
        jsonData.push(values)
        // Reset the form fields
        setValues({
            name: '',
            password: '',
            email: '',
        })
    }

    const handleOnChaged = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'email') {
            const search = [...jsonData]
            const found = search.filter((item) =>
                item.email.toLowerCase().includes('john1')
            )
            console.log(search)
            console.log(found)
        }
        // console.log(e.target.name)
        setValues({ ...values, [e.target.name]: e.target.value }) // mistake: use this [] to {}
    }

    return (
        <div>
            <div className="container mt-5">
                <h1 className="display-4">Hello, Bootstrap in React!</h1>
                <button className="btn btn-primary">Click me</button>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                </div>
                <form>
                    <div className="form-group row">
                        <label
                            htmlFor="inputEmail3"
                            className="col-sm-2 col-form-label"
                        >
                            Email
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="email"
                                // className="form-control"
                                id="inputEmail3"
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label
                            htmlFor="inputPassword3"
                            className="col-sm-2 col-form-label"
                        >
                            Password
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="password"
                                className="form-control"
                                id="inputPassword3"
                                placeholder="Password"
                            />
                        </div>
                    </div>
                    <fieldset className="form-group">
                        <div className="row">
                            <legend className="col-form-label col-sm-2 pt-0">
                                Radios
                            </legend>
                            <div className="col-sm-10">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gridRadios"
                                        id="gridRadios1"
                                        value="option1"
                                        checked
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="gridRadios1"
                                    >
                                        First radio
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gridRadios"
                                        id="gridRadios2"
                                        value="option2"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="gridRadios2"
                                    >
                                        Second radio
                                    </label>
                                </div>
                                <div className="form-check disabled">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gridRadios"
                                        id="gridRadios3"
                                        value="option3"
                                        disabled
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="gridRadios3"
                                    >
                                        Third disabled radio
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div className="form-group row">
                        <div className="col-sm-2">Checkbox</div>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="gridCheck1"
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="gridCheck1"
                                >
                                    Example checkbox
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary">
                                Sign in
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {/* <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" value={values.name} onChange={handleOnChaged} />
                <br />

                <label htmlFor="email">EMail:</label>
                <input type="text" name="email" value={values.password}  onChange={handleOnChaged} />
                <br />

                <label htmlFor="password">Password:</label>
                <input type="text" name="password" value={values.password}  onChange={handleOnChaged} />
                <br />
               
                <input type="submit"></input><br/>
                {JSON.stringify(values)}<br/><hr/>
                {JSON.stringify(jsonData)}
            </form>  */}
            {/* <button type="submit">submit</button> */}
        </div>
    )
}

// // ???Point to be noted
// 1. e: React.FormEvent<HTMLFormElement>
//   e.preventDefault();
//   onSubmit={handleSubmit}
//  <button type="submit">submit</button> : should have type="submit"
// 2. e: React.ChangeEvent<HTMLInputElement>
// input simple name="name" onChange={handleOnChaged}
// setUser({ ...user, [e.target.name]: [e.target.value] }) // mistake this [] to {}
