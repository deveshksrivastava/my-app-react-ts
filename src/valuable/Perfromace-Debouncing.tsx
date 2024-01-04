import { useState, useEffect } from 'react'

export const AppDebouncing = () => {
    const [email, setEmail] = useState('')
    const [debouncedEmail, setDebouncedEmail] = useState('')

    // // Update debouncedEmail after user stops typing for 500ms
    // useEffect(() => {
    //     const handler = setTimeout(() => {
    //         setDebouncedEmail(email)
    //     }, 5000)

    //     // Cleanup function to clear the timeout if the email changes before the delay period ends
    //     return () => {
    //         clearTimeout(handler)
    //     }
    // }, [email]) // Only re-run the effect if the email changes

    // // Now you can use debouncedEmail to perform your API call or other expensive operation
    // useEffect(() => {
    //     if (debouncedEmail) {
    //         // Perform your API call or other operation here
    //         console.log(`API call with: ${debouncedEmail}`)
    //     }

    useEffect(() => {
        const debounding = setTimeout(() => {
            setDebouncedEmail(email)
        }, 5000)

        return () => {
            clearTimeout(debounding)
        }
    }, [email])

    useEffect(() => {
        if (debouncedEmail) {
            console.log('The debounce email is:', email)
        }
    }, [debouncedEmail, email])

    return (
        <div>
            {email}
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
    )
}
