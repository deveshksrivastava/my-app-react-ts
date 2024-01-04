import React from 'react'

// Higher Order Components are a pattern in React that allows you to reuse component logic. HOCs are functions that take a component and return a new component with additional props or behavior.

// 1. Send as componet
// 2. return as componet
// 3. use double arrow =>(Componet) = >(prosps)
// const useLogger = (Copm) => (props =>
//     return <Copm {..props} />

type User = {
    city: string
}

const Child = (props: User) => {
    return <div>Child {props.city}</div>
}

//Hoc
// eslint-disable-next-line react-hooks/rules-of-hooks
const useLogger = (ChildComp: any) => (props: any) => {
    console.log('my props: ', props)
    return <ChildComp {...props} enhancedProp="I am enhanced!" /> //2. return as componet
}
// eslint-disable-next-line react-hooks/rules-of-hooks
const Parent = useLogger(Child) //1. Send as componet

const Child1 = (props: { name: string; age: string; enhancedProp: string }) => {
    return (
        <div>
            Child Comp {props.name} {props.age} {props.enhancedProp}
        </div>
    )
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const Parent1 = useLogger(Child1)

const Hoc = () => {
    return (
        <div>
            <Parent city="Mumbai" />
            <Parent1 name="Mumbai" age="40" />
        </div>
    )
}

export default Hoc

// What is higher order component?
