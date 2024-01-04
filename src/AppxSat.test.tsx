import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import App from './App'

// Mock the fetch function for the test

// jest.mock('./api')
test.skip('renders and check button text', () => {
    render(<App />)
    // screen.debug()
    const label = screen.getByText('Submit it!')
    expect(label).toBeInTheDocument()

    const count = screen.getByText('Increment')
    expect(count).toBeInTheDocument()
})

test.skip('renders failed', () => {
    render(<App />)

    const label = screen.queryByText(/Increment2/i)
    expect(label).not.toBeInTheDocument()

    const btn = screen.getByTestId('my-button')
    expect(btn).toBeInTheDocument()
    fireEvent.click(btn)

    const inc = screen.getByTestId('count-id')
    expect(inc).toBeInTheDocument()

    const btn1 = screen.getByTestId('my-button')
    expect(btn1).toBeInTheDocument()
    fireEvent.click(btn1)

    const label1 = screen.queryByText(/2/i)
    expect(label1).not.toBeInTheDocument()

    // screen.debug()
})

test('Validation check', async () => {
    // const mockData = 'Mocked data'
    // require('./api').default.mockResolvedValueOnce(mockData)

    render(<App />)

    const label = screen.queryByText(/Increment2/i)
    expect(label).not.toBeInTheDocument()

    const btn = screen.getByTestId('my-button')
    expect(btn).toBeInTheDocument()
    fireEvent.click(btn)

    const inc = screen.getByTestId('count-id')
    expect(inc).toBeInTheDocument()

    // const btn1 = screen.getByTestId('my-button')
    const btn1 = screen.getByRole('button', { name: /click me/i })
    expect(btn1).toBeInTheDocument()
    fireEvent.click(btn1)
    expect(
        screen.getByRole('button', { name: /click me/i })
    ).toHaveBeenCalledTimes(1)

    const label1 = screen.queryByText(/2/i)
    expect(label1).toBeInTheDocument()

    // Simulate user input
    // const inputElement = getByLabelText('My Input:');
    // fireEvent.change(inputElement, { target: { value: 'Test Input' } });
    // Check if the input value is updated
    //   expect(inputElement.value).toBe('Test Input');

    // await waitFor(() => {
    //     expect(screen.getByText(`Data: ${mockData}`)).toBeInTheDocument()
    // })
    // const onChangeSpy = jest.fn();
    // render(<App
    //     name="abc",
    //     onUserClick ={onChangeSpy}
    //   />)
    screen.debug()
})
