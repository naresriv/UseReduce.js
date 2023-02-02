import React, { useReducer } from 'react'

const intialSate = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment': return state + 1
        case 'decrement': return state - 1
        case 'reset': return intialSate
        default: return state
    }
}
const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, intialSate)
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => dispatch('increment')}>increment</button>
            <button onClick={() => dispatch('decrement')}>decrement</button>
            <button onClick={() => dispatch('reset')}>reset</button>
        </div>
    )
}

export default UseReducer
