import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

test('renders and check button text', () => {
    render(<App />)
    const linkElement = screen.getByText(/Submit it!/i)
    expect(linkElement).toBeInTheDocument()

    const emailtext = screen.getByText(/password:/i)
    expect(emailtext).toBeInTheDocument()

    const submitClick = screen.getByText(/Increment/i)
    fireEvent.click(submitClick)
    // const count = screen.getByTestId('count-id')
    // expect(count).toHaveValue('1')

    // screen.debug()
})
