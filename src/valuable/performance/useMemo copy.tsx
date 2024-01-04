import React, { memo, useState } from 'react'

const Child = memo(function () {
    console.log('Child is called') // this wil be called afer click of button 2 times
    return <div>Child</div>
})

const MemoMe = () => {
    const [count, setcount] = useState(0)
    const submitHandle = () => {
        setcount(count + 1)
    }

    return (
        <div>
            <p>Parent Count : {count}</p>
            <button onClick={submitHandle}> Click Memo</button>
            <Child />
        </div>
    )
}

export default MemoMe
