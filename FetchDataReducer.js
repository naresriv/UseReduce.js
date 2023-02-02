import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

const initial = {
    loading: true,
    error: "",
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'Success_fetch': return {
            loading: false,
            error: "",
            post: action.payload
        }
        case 'error_fecth': return {
            loading: false,
            error: "",
            post: 'someThing wrong'
        }
        default: return state
    }
}
const FetchReducer = () => {

    const [info, dispatch] = useReducer(reducer, initial)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then((res) => {
                dispatch({ type: "Success_fetch", payload: res.data })
                console.log("posts", res)
            })
            .catch((error) => {
                dispatch({ type: "error_fecth" })
            })
    })

    return (

        <div>
            <p> Fetch reducer starts from here</p>
            <p>{info.post.title}</p>
        </div>
    )
}

export default FetchReducer
